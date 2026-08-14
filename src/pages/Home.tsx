import RichText from '../components/RichText'
import { rankGuidance, seasonResults } from '../data/results'

export default function Home() {
  return (
    <>
      <section className="mb-6">
        <h2 className="mb-3 text-xl font-bold text-ink">2025 Toronto Go Season Overview</h2>
        <p className="text-sm leading-relaxed text-muted">
          A summary of notable 2025 Go results involving Toronto and Canadian Go, including local
          tournament champions, notable achievements by Canadian players, results from national
          events such as the 2025 NAGF Professional Qualification Exam, and outcomes for Canadian
          representatives in international competitions.
        </p>
      </section>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-b from-slate-50 to-slate-100">
              <th className="border-b border-border p-3 text-left font-semibold text-ink">
                Event
              </th>
              <th className="border-b border-border p-3 text-left font-semibold text-ink">
                Date
              </th>
              <th className="border-b border-border p-3 text-left font-semibold text-ink">
                Winner(s)
              </th>
            </tr>
          </thead>
          <tbody>
            {seasonResults.map((result) => (
              <tr key={result.event} className="hover:bg-accent/5">
                <td className="border-b border-border p-3 align-top">
                  <span className={result.eventHighlight ? 'font-bold' : undefined}>
                    {result.event}
                  </span>
                </td>
                <td className="border-b border-border p-3 align-top whitespace-nowrap text-ink">
                  {result.date}
                </td>
                <td className="border-b border-border p-3 align-top">
                  {result.winners.map((winner, i) => (
                    <div key={i}>
                      <RichText text={winner} />
                    </div>
                  ))}
                  {result.note && (
                    <span className="mt-1.5 block text-[13px] leading-snug text-muted">
                      {result.note}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="relative mt-10 mb-3 pb-2 text-xl font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-15 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-cyan">
        CGA Ranking Guidance
      </h2>

      <div className="max-w-sm overflow-hidden rounded-lg border border-border shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-b from-slate-50 to-slate-100">
              <th className="border-b border-border p-2.5 text-left font-semibold text-ink">
                Fox/野狐
              </th>
              <th className="border-b border-border p-2.5 text-left font-semibold text-ink">
                CGA
              </th>
            </tr>
          </thead>
          <tbody>
            {rankGuidance.map(([fox, cga]) => (
              <tr key={fox} className="hover:bg-accent/5">
                <td className="border-b border-border p-2.5 text-ink">{fox}</td>
                <td className="border-b border-border p-2.5 text-ink">{cga}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
