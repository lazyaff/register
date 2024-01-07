import prisma from "@/libs/prisma";
import { writeFile } from "fs/promises";

export async function GET(req, context) {
    try {
        const id = Number(context.params.id) || 0;
        const data = await prisma.mahasiswa.findFirst({ where: { id } });
        if (data) {
            return Response.json({
                success: true,
                code: 200,
                message: "Data berhasil didapatkan",
                data: data,
            });
        } else {
            return Response.status(404).json(
                {
                    success: false,
                    code: 404,
                    message: "Data tidak ditemukan",
                },
                { status: 404 }
            );
        }
    } catch (error) {
        return Response.json(
            {
                success: false,
                code: 500,
                message: "Terjadi kesalahan",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(req, context) {
    try {
        const id = Number(context.params.id) || 0;
        const data = await prisma.mahasiswa.findFirst({ where: { id } });
        if (data) {
            const del = await prisma.mahasiswa.delete({ where: { id } });
            return Response.json({
                success: true,
                code: 200,
                message: "Data berhasil dihapus",
            });
        } else {
            return Response.json(
                {
                    success: false,
                    code: 404,
                    message: "Data tidak ditemukan",
                },
                { status: 404 }
            );
        }
    } catch (error) {
        return Response.json(
            {
                success: false,
                code: 500,
                message: "Terjadi kesalahan",
            },
            { status: 500 }
        );
    }
}

export async function PUT(req, context) {
    const id = Number(context.params.id) || 0;
    const isExist = await prisma.mahasiswa.findFirst({ where: { id } });
    if (isExist) {
        const data = await req.formData();
        const picture = data.get("picture");
        const input = {};
        for (const [key, value] of data.entries()) {
            input[key] = value;
        }
        let { name, phone, email, date_birth, address } = input;
        let update = { name, phone, email, date_birth, address };

        // validasi input
        if (!name || !phone || !email || !date_birth || !address) {
            return Response.json(
                {
                    success: false,
                    code: 400,
                    message: "Tidak boleh ada isian yang kosong",
                },
                { status: 400 }
            );
        }

        const dateOfBirthString = date_birth;
        const parts = dateOfBirthString.split("-");
        const formattedDateOfBirth = `${parts[1]}-${parts[0]}-${parts[2]}`;
        date_birth = new Date(formattedDateOfBirth);
        date_birth.setDate(date_birth.getDate() + 1);
        update.date_birth = date_birth;

        // validasi foto
        if (picture.size > 0) {
            const extension = picture.name.substring(
                picture.name.lastIndexOf(".") + 1
            );
            const currentDate = new Date();
            const formattedDate = currentDate
                .toISOString()
                .replace(/:/g, "-")
                .replace(/\..+/, "");
            const filename = `${formattedDate}_${Math.floor(
                Math.random() * 1000000
            )}.${extension}`;
            const bytes = await picture.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const path = `public/profile/${filename}`;
            await writeFile(path, buffer);
            update["picture"] = filename;
        }

        const upd = await prisma.mahasiswa.update({
            where: { id },
            data: update,
        });

        return Response.json({
            success: true,
            code: 200,
            message: "Data berhasil diperbarui",
            data: upd,
        });
    } else {
        return Response.json(
            {
                success: false,
                code: 404,
                message: "Data tidak ditemukan",
            },
            { status: 404 }
        );
    }
}
