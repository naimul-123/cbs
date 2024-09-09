import MobileNab from "@/components/MobileNab";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    const loggedIn = await getLoggedInUser()
    console.log(loggedIn);
    if (!loggedIn) return redirect('/sign-in')

    else {
        return (
            <main className="flex h-screen w-full font-inter">
                <Sidebar user={loggedIn} />
                <div className="flex size-full flex-col">

                    <div className="root-layout">
                        <Image src="/icons/logo.svg" alt="menu-icon" width={30} height={30} />
                        <div>

                            <MobileNab user={loggedIn} />
                        </div>
                    </div>
                    {children}
                </div>

            </main>
        );
    }
}
