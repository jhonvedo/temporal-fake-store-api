import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    let admin = await prisma.user.findUnique({ where: { email: "admin@admin.com" } });
    if ("admin") {
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