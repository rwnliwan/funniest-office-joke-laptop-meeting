# Trial log — funniest-office-joke-laptop-meeting

- Competition: `u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c`
- Title: The Funniest Office Joke, Judged Head to Head
- Prize: $2, fee $0 (entryFeesUsd "0.00", verified live API 25 Nov 2026)
- Deadline: 26 Nov 2026 19:00 WITA (2026-11-26T11:00:00Z); R1 cutoff 25 Nov 22:00 WITA
- Gate: /output/entry.txt UTF-8, 1–200 characters, not only whitespace
- Judge: pairwise, z-ai/glm-5.3-flash, 3 blind rounds, finalists 12
- Kit: FRESH from /c/<slug>/kit; kit.json bundle_sha256
  `110400832ed78cd539e3df0a597b4bdba08f74544b52b4fafe2774975d78132c`
  = live API bundleSha256; cli/makefun.mjs sha256
  `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836`
  = kit.json file entry. Harness `harness@458c737e...`, scorer program@49e164c1...
- Entry text (36 characters, coordinator-verified, used verbatim):
  `My laptop died. The meeting did not.`
- Research (coordinator): field 106 submissions at research time; saturated:
  meeting 19, printer 12, boss 8, "meeting could have been an email" 3.
  Chosen angle: laptop 0-hit; "died" only 1 hit with a different mechanism
  (office plant died, then its plastic replacement got promoted — not
  hardware dying while the meeting survives).

## v1 — initial build

- main.ts writes the 36-character joke to /output/entry.txt (or $ENTRY_OUTPUT).
- README carries the 3 live make.fun badges (competition, rank, reward)
  with the repo name `funniest-office-joke-laptop-meeting` in the rank/reward
  URL segments, plus a link to the bounty page. 0 static badges.
- `.makefun/owner.json` holds wallet `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`.
- LICENSE: MIT.
- Preflight (local, token-free): run main.ts, check output file content and
  length — recorded below once run.
