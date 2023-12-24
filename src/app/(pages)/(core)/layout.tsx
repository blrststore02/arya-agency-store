import { Loading } from "@/components/aALoading"
import { Suspense } from "react"

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </>
  )
}
