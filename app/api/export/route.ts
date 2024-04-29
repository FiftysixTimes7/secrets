import { getSecrets } from "@/app/util"

export async function GET() {
    const secrets = await getSecrets();
    return Response.json(secrets);
}
