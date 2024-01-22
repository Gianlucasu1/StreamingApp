import { Logo } from "./_components/logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-y-5'>
      <Logo />
      {children}
    </div>

  )
}