import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("checking seed...")
    let admin = await prisma.user.findUnique({ where: { email: "admin@admin.com" } });
    if (!admin) {
        console.log("creating admin user...")
        await prisma.user.createMany({
            data: [
                { email: 'admin@admin.com', password: 'admin', name: "Admin" }
            ],
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });