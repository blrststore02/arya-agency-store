"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Page({ params }: { params: { name: string } }) {
    const route = useRouter();
    useEffect(() => {
    })

    return (
        <>
            user route input.... {params.name}
        </>
    )
}