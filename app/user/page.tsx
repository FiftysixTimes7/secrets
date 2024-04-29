import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth, signOut } from "@/auth"
import { getSecretNum, deleteUser } from '../util';

export default async function User() {
    const session = await auth();
    if (!session?.user?.email)
        redirect("/");
    return <>
        <div className="flex items-center justify-between">
            <Link className="p-1 px-3 mx-3 hover:bg-gray-800 rounded-md transition" href={`/${new Date().toLocaleDateString("en-CA")}`}>&lt; Back</Link>
            <h1 className="text-xl mx-5"><Link className='underline hover:text-gray-300' href={"/user"}>{session.user.name}</Link>&apos;s secrets</h1>
            <form
                action={async () => {
                    "use server"
                    await signOut();
                }}
            >
                <button className="p-1 px-3 mx-3 border-2 border-white hover:bg-gray-800 rounded-md transition" type="submit">Sign Out</button>
            </form>
        </div>
        <p className='m-2'>Total secrets: {await getSecretNum()}</p>
        <a className="w-fit mx-auto my-2 flex justify-center p-1 px-2 fill-white hover:bg-gray-800 transition rounded-md border-2" href="/api/export" download>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 576 512" className='my-auto'>
                {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z" />
            </svg>
            <p className='px-1 transition text-sm'>Export</p>
        </a>
        <form
            action={async () => {
                "use server"
                await deleteUser();
                await signOut();
            }}
        >
            <button className="flex justify-center p-1 px-2 mx-auto my-2 fill-red-500 hover:fill-white hover:bg-red-600 transition rounded-md border-2 group" type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 448 512" className='my-auto'>
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
                <p className='px-1 text-red-500 group-hover:text-white transition text-sm'>Delete Account</p>
            </button>
        </form>
    </>
}
