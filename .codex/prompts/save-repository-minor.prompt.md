---
mode: 'agent'
description: 'Publish a minor version of the package. Commits+pushes, prepares the release, pauses for a manual npm publish, then resumes Storybook, changelog, and tag push.'
---

Perform the following steps automatically:

1. **Inspect current release state**: Check `git status`, `git log --decorate -5`, and `npm pkg get version` before changing anything. If a previous attempt already created a version bump commit or tag (for example `vX.Y.Z`), resume from that version instead of bumping again.
2. **Initial Commit and Push**: Save all intended code changes made so far and push them before starting the release flow. Do not stage `.codex/` unless explicitly requested.
3. **Create or resume the minor version**:
   - If no release bump exists yet, run `npm version minor`.
   - If the repo is already bumped from an interrupted publish, reuse the existing version and do not run `npm version minor` again.
4. **Build before publish**: Run `npm run build`.
5. **Manual publish handoff**: Do not run `npm publish --access public` yourself. Instead, tell the user to run `npm publish --access public` manually in their own console.
   - Pause after giving the command and wait for the user to confirm the publish completed, or to share the exact failure output.
   - If the user reports browser auth, 2FA, or another npm publish issue, help them resolve it, but do not execute the publish command on their behalf.
   - If the user confirms the version was published successfully, or npm reports that the target version already exists, continue the workflow without creating a new version bump.
6. **Publish Storybook**: Deploy the latest version of Storybook by running `npm run release-sb`.
7. **Update Changelog**: Document the released changes in `CHANGELOG.md`. The version and date must match the released version in `package.json`.
8. **Commit and Push release metadata**: Commit the changelog updates, push `main`, and push the release tag created by `npm version`.
