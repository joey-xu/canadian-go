import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <main className="mx-auto my-8 max-w-4xl rounded-xl border border-border bg-card p-7 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
      <header className="mb-6 flex items-start gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 to-cyan-500 text-xl font-extrabold text-white shadow-[0_6px_18px_rgba(37,99,235,0.12)]">
          Go
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink">Canadian Go</h1>
      </header>

      <Nav />

      <Outlet />

      <footer className="mt-10 space-y-1 text-sm text-muted">
        <p>Updated 2026 • Toronto Go</p>
        <p>
          Join our Discord:{' '}
          <a
            href="https://discord.gg/Pv3VxRd9wU"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            https://discord.gg/Pv3VxRd9wU
          </a>
        </p>
      </footer>
    </main>
  )
}
