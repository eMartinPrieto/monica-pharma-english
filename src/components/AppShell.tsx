import { HeartPulse } from 'lucide-react'

type AppShellProps = { children: React.ReactNode }

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen soft-pixel-bg">
      <header className="sticky top-0 z-10 border-b-4 border-gray-900 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border-4 border-gray-900 bg-pink-200"><HeartPulse size={22} /></div>
          <div><p className="text-xs font-bold uppercase tracking-wider text-pink-600">Pharma English Quest</p><h1 className="text-lg font-black leading-tight text-gray-900">English for Mónica</h1></div>
        </div>
      </header>
      <main className="mx-auto max-w-md px-4 py-6">{children}</main>
    </div>
  )
}
