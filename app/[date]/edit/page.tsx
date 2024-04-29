import { redirect } from 'next/navigation';
import { getSecret, updateSecret, deleteSecret } from '../../util';
import Content from './content';

export default async function Edit({ params }: Readonly<{ params: { date: string } }>) {
    const secret = await getSecret(params.date);
    async function handleSave(content: string) {
        "use server"
        updateSecret(params.date, content);
        redirect(`/${params.date}`);
    }
    async function handleDelete(content: string) {
        "use server"
        deleteSecret(params.date);
        redirect(`/${params.date}`);
    }
    return <Content defaultContent={secret?.content ?? ""} handleSave={handleSave} handleDelete={handleDelete} />
}
