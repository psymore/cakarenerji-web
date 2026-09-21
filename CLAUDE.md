@AGENTS.md

# CMP

"CMP" is the user's shorthand for: **commit, merge, push**. When the user writes it (or says it in words), do all of this, without asking again:

1. Update the docs the change touches (`docs/route-must-haves.md` change log, `docs/images.md`, `docs/current-state.md`, `OPEN-QUESTIONS.md`, `README.md`, ...). Create a doc if it should exist and does not. If it was already updated or created for this change, leave it: do not redo it.
2. Commit on the current topic branch (message ends with the Co-Authored-By line from the session), fast-forward merge it into `main`, push `main` (a push deploys the site through GitHub Actions), delete the merged branch.
3. Report the pushed commit range. Without "CMP" (or an explicit merge/push request), only commit on the topic branch and leave `main` and the remote alone.
