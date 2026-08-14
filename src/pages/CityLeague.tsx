import roomTutorial from '../assets/room-tutorial.webp'

const link = 'text-accent hover:underline'
const strong = 'font-semibold text-ink'

export default function CityLeague() {
  return (
    <>
      <h2 className="mb-3 text-2xl font-bold text-ink">Room Tutorial</h2>
      <p className="text-sm leading-relaxed text-muted">
        This picture shows where to select the correct playing room on GoPanda2. In the drop-down
        menu at the top, you can change the room to "AGA City League" for Leagues A–D, or "AGA
        City League (Manual)" for League E. Make sure you choose the correct room before your game
        starts.
      </p>
      <p className="text-sm leading-relaxed text-muted">
        这张图片展示了如何在 GoPanda2
        中选择正确的对局房间。你可以在上方的下拉菜单中切换到 "AGA City
        League"（A–D 级使用）或 "AGA City League (Manual)"（E 级使用）。请在对局开始前确认你进入了正确的房间。
      </p>
      <img src={roomTutorial} alt="Room Tutorial" className="mt-4 max-w-full rounded-lg" />

      <h2 className="mt-10 mb-3 text-2xl font-bold text-ink">
        City League FAQs (for Toronto and Waterloo teams)
      </h2>

      <div className="space-y-8">
        <section>
          <h3 className="mb-2 text-lg font-bold text-ink">
            1. My opponent did not show up. What do I do?
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              If a game has been scheduled and one player is not present at the agreed start time,
              there is a 20-minute grace period. After 20 minutes, the absent player forfeits the
              game.
            </p>
            <p>
              If your opponent does not show up, take a timestamped screenshot of the Pandanet
              lobby showing their absence.
            </p>
            <p>
              Send this information to your team captain. If you already have the opposing team
              captain's email, you may instead email the opposing team captain directly and cc
              your team captain. The team captain will forward the information to the Tournament
              Director as needed. If neither player is present at the agreed time and there is no
              valid reason, the game will be ruled a double forfeit.
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-lg font-bold text-ink">
            2. How are match results recorded, what happens if a match ends 2–2, and how are ties
            in the standings broken?
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              Match score is the primary factor in rankings. A team's match score reflects wins,
              losses, and ties for the team as a whole. Each match win counts as 2 points, a tie
              counts as 1 point, and a loss counts as 0 points. Match score is always considered
              before any tie-breakers.
            </p>
            <p>
              Example: A team with 4 wins and 3 ties (11 points) is ranked higher than a team with
              5 wins and 2 losses (10 points).
            </p>
            <p>During the regular season, a match that ends 2–2 is recorded as a draw.</p>
            <p>
              In A League finals and in any promotion or relegation matches, a 2–2 result is
              decided by Board 1. The team that wins on Board 1 wins the match.
            </p>
            <p>
              If two or more teams have the same match score, ties in the standings are broken in
              the following order:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Board Points</li>
              <li>Head-to-head result</li>
              <li>Board 1 wins</li>
              <li>Board 2 wins</li>
              <li>Board 3 wins</li>
              <li>Board 4 wins</li>
            </ul>
            <p>
              Board Points are calculated as the total number of individual game wins across all
              rounds. Each game win is worth 1 Board Point. For example, a 2–2 match gives each
              team 2 Board Points.
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-lg font-bold text-ink">
            3. Do I need a video call for my game, and how should I set it up?
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              For League A–C games, a video call is required by default unless both players agree
              otherwise. While recording the call is not strictly required, it is{' '}
              <span className={strong}>strongly encouraged</span>. Note that a formal report of
              suspected cheating can only be filed if the game was conducted via a video call (see
              #4). Matches should be arranged on Pandanet at the scheduled time, and you can use
              Pandanet private messages to agree on which video call software to use.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Jitsi: Recommended for players without a paid Zoom account. No time limit. Works
                in a web browser and has a mobile app.
              </li>
              <li>Zoom (paid): No time limit.</li>
              <li>
                Skype or Google Meet: No time limits. Many players can use Google Meet through
                their Gmail accounts.
              </li>
            </ul>
            <p>
              If you prefer not to sort out video call details on the day of the game, you may
              tell the Toronto team captain in advance that you would like to formalize the video
              call process ahead of time so the game runs more smoothly.
            </p>
            <p>
              If for any reason you are not satisfied with the camera arrangement, or if your
              opponent is unable to set up a camera and you require one, please contact your team
              captain immediately. If your team captain is unavailable, please email your team
              captain, the opponent's team captain, and the Tournament Director explaining that
              you are not satisfied with the camera arrangement and are therefore abandoning the
              match.
            </p>
            <p>
              Please note that abandoning the match in this situation does not result in a
              forfeit by either side. The game should be rescheduled for a later date, at which
              time the camera requirements should be satisfied, or a substitute player may be
              used.
            </p>
            <p>
              Additional webcam rules can be found here:{' '}
              <a
                href="https://pandanet-igs.com/communities/agacityleague/503"
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                Webcam requirements and FAQs
              </a>
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-lg font-bold text-ink">
            4. I reviewed the game using AI and believe my opponent cheated. What should I do?
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              Only players who participated in the game may file a formal complaint. Players
              should not make public cheating allegations or discuss an ongoing complaint
              publicly. Doing so may result in an immediate adverse ruling at the discretion of
              the Tournament Director, or escalation to the Code of Conduct Committee to review a
              possible conduct violation.
            </p>
            <p>
              If you believe your opponent cheated in some way, such as using AI assistance or
              other prohibited methods, collect any supporting evidence, such as the SGF file. A
              formal report of suspected cheating may only be filed if a video call was used.
              Players are <span className={strong}>strongly encouraged</span> to record their
              required webcam or video call during the match, as a recording may be submitted as
              additional evidence if there are concerns about fair play or rule violations.
            </p>
            <p>
              You must email the Tournament Director with your complaint and supporting evidence.
              If you do not know the Tournament Director's email address, you may ask your team
              captain for assistance.
            </p>
            <p>
              Complaints should be submitted early enough for the Tournament Director to respond
              before the next round is paired. Complaints submitted later may still be
              investigated, but they may not affect the next round pairings.
            </p>
            <p>
              You may contact your team captain for help or guidance. However, under the current
              rules, the formal complaint must come from the player involved in the game. This
              document does not fully account for cases involving junior players, where it may be
              unreasonable for a child to submit a formal complaint on their own.
            </p>
            <p>
              More details are available in the{' '}
              <a
                href="https://drive.google.com/file/d/1YMuiZUl6irg840YM_lWlnqZV8ZCTKSxR/view"
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                AGA Fair Play Online Go Tournament Rules and Procedures document
              </a>
            </p>
            <p>
              <a
                href="https://pandanet-igs.com/communities/agacityleague/503"
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                Webcam requirements and FAQs
              </a>
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-lg font-bold text-ink">
            5. Where can I find the official rules for the City League?
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              The Official Rules Document contains the full tournament rules, including details
              that support the FAQs and provide answers to other common questions. Players are
              encouraged to review it to understand all aspects of tournament play.
            </p>
            <p>
              <a
                href="https://pandanet-igs.com/communities/agacityleague/287"
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                Official Rules Document
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
