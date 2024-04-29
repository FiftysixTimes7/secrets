import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth, signOut } from "@/auth"

export default async function MainLayout({
    params,
    children,
}: Readonly<{
    params: { date: string },
    children: React.ReactNode;
}>) {
    const session = await auth();
    if (!session?.user?.email)
        redirect("/");
    function dateTarget(mode?: string) {
        switch (mode) {
            case "-y": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY) - 1, parseInt(MM) - 1, parseInt(DD));
                return newDate.toLocaleDateString('en-CA');
            }
            case "-m": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 2, parseInt(DD));
                return newDate.toLocaleDateString('en-CA');
            }
            case "-d": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 1, parseInt(DD) - 1);
                return newDate.toLocaleDateString('en-CA');
            }
            case "+y": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY) + 1, parseInt(MM) - 1, parseInt(DD));
                return newDate.toLocaleDateString('en-CA');
            }
            case "+m": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY), parseInt(MM), parseInt(DD));
                return newDate.toLocaleDateString('en-CA');
            }
            case "+d": {
                let newDate = new Date();
                let [YYYY, MM, DD] = params.date.split('-');
                newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 1, parseInt(DD) + 1);
                return newDate.toLocaleDateString('en-CA');
            }
            default:
                return new Date().toLocaleDateString('en-CA');
        }
    }
    return <>
        <div className="m-2 flex items-center justify-end">
            <h1 className="text-xl">{session.user.name}&apos;s secrets</h1>
            <form
                action={async () => {
                    "use server"
                    await signOut();
                }}
            >
                <button className="p-1 px-3 mx-3 border-2 border-white hover:bg-gray-800 rounded-md transition" type="submit">Sign Out</button>
            </form>
        </div>
        <div className='m-3'>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tighter transition" href={dateTarget("-y")}>&lt;&lt;&lt;</Link>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tight transition" href={dateTarget("-m")}>&lt;&lt;</Link>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md transition" href={dateTarget("-d")}>&lt;</Link>
            <Link className="bg-gray-200 hover:bg-white text-black m-2 p-1 px-3 rounded-md transition" title="Click to reset to today" href={dateTarget()}>{params.date}</Link>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md transition" href={dateTarget("+d")}>&gt;</Link>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tight transition" href={dateTarget("+m")}>&gt;&gt;</Link>
            <Link className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tighter transition" href={dateTarget("+y")}>&gt;&gt;&gt;</Link>
        </div>
        {children}
    </>
}