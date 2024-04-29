import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser() {
    const session = await auth();
    if (session?.user?.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: session.user.email }, include: { secrets: true } });
        if (!dbUser)
            await prisma.user.create({
                data: {
                    email: session.user.email,
                },
            });
        return dbUser;
    }
    return null;
}

export async function getSecret(date: string) {
    const dbUser = await getUser();
    if (dbUser)
        for (let e of dbUser.secrets)
            if (e.date === date)
                return e;
    return null;
}

export async function getSecretNum() {
    const dbUser = await getUser();
    if (dbUser)
        return dbUser.secrets.length;
    return null;
}

export async function updateSecret(date: string, content: string) {
    const dbUser = await getUser();
    if (dbUser) {
        for (let e of dbUser.secrets)
            if (e.date === date)
                return await prisma.secret.update({
                    where: { id: e.id },
                    data: { content: content }
                });
        return await prisma.secret.create({
            data: { date: date, content: content, authorId: dbUser.id }
        });
    }
    return null;
}

export async function deleteSecret(date: string) {
    const dbUser = await getUser();
    if (dbUser)
        return await prisma.secret.deleteMany({ where: { date: date, authorId: dbUser.id } });
}

export async function deleteUser() {
    const dbUser = await getUser();
    if (dbUser) {
        await prisma.secret.deleteMany({ where: { authorId: dbUser.id } });
        return await prisma.user.delete({ where: { id: dbUser.id } });
    }
}
