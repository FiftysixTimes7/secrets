import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSecret(date: string) {
    const session = await auth();
    if (session?.user?.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: session.user.email }, include: { secrets: true } });
        if (!dbUser)
            await prisma.user.create({
                data: {
                    email: session.user.email,
                },
            });
        else {
            const secret = await prisma.secret.findMany({ where: { authorId: dbUser.id, date: date } });
            for (let e of dbUser.secrets) {
                if (e.date === date)
                    return e;
            }
        }
    }
    return null;
}

export default async function Main(props: { date: string }) {
    const secret = await getSecret(props.date);
    console.log(props.date);
    console.log(secret);
    return <p>{secret?.content ?? "Nothing"}</p>
}
