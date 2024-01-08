import prisma from "@/libs/prisma";
import { writeFile } from "fs/promises";

export async function GET() {
    const data = await prisma.mahasiswa.findMany();
    if (data) {
        data.forEach((data) => {
            const dateObject = new Date(data.date_birth);
            const day = dateObject.getDate().toString().padStart(2, "0");
            const month = (dateObject.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            const year = dateObject.getFullYear();
            const formattedDate = `${year}-${month}-${day}`;
            data.date_birth = formattedDate;
        });
        return Response.json({
            success: true,
            code: 200,
            message: "Data berhasil didapatkan",
            data: data,
        });
    } else {
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

export async function POST(req) {
    try {
        const data = await req.formData();
        const picture = data.get("picture");
        const input = {};
        for (const [key, value] of data.entries()) {
            input[key] = value;
        }
        let {
            name,
            phone,
            email,
            date_birth,
            address,
            password,
            confirm_password,
        } = input;

        // validasi input
        if (
            !name ||
            !phone ||
            !email ||
            !date_birth ||
            !address ||
            !password ||
            !confirm_password ||
            picture.size == 0
        ) {
            return Response.json(
                {
                    success: false,
                    code: 400,
                    message: "Tidak boleh ada isian yang kosong",
                },
                { status: 400 }
            );
        }

        // Validasi password
        if (password !== confirm_password) {
            return Response.json(
                {
                    success: false,
                    code: 400,
                    message: "Kata sandi tidak cocok",
                },
                { status: 400 }
            );
        }

        const crypto = require("crypto");
        function hashPassword(password) {
            const sha256 = crypto.createHash("sha256");
            const hashedPassword = sha256.update(password).digest("hex");
            return hashedPassword;
        }
        password = hashPassword(password);

        const dateOfBirthString = date_birth;
        const parts = dateOfBirthString.split("-");
        const formattedDateOfBirth = `${parts[1]}-${parts[2]}-${parts[0]}`;
        date_birth = new Date(formattedDateOfBirth);
        date_birth.setDate(date_birth.getDate());

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

        const mahasiswa = await prisma.mahasiswa.create({
            data: {
                name,
                phone,
                email,
                date_birth,
                address,
                picture: filename,
                password,
            },
        });

        return Response.json({
            success: true,
            code: 200,
            message: "Data berhasil ditambahkan",
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                code: 500,
                message: error.toString(),
            },
            { status: 500 }
        );
    }
}
