import { AAFooter } from "@/components/aAFooter";
import { AAHeader } from "@/components/aAHeader";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Our Businesses | Arya Agency Store',
    description: 'View date and table vise number generated',
}

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <AAHeader />
            <main className="flex min-h-main w-full bg-white">
                {children}
            </main>
            <AAFooter />
        </div>
    )
}
