import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/city-league', label: 'Pandanet-AGA City League' },
  { to: '/2026-canadian-open', label: '2026 Canadian Open' },
]

export default function Nav() {
  return (
    <nav className="mb-6 border-b border-border">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `inline-block border-b-2 pb-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-accent text-ink'
                    : 'border-transparent text-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
