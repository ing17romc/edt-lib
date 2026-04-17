---
mode: 'agent'
description: 'Publish a minor version of the package. Commits+pushes, handles npm web auth if needed, publishes to NPM, deploys Storybook, updates the CHANGELOG, and pushes the release tag.'
---

Perform the following steps automatically:

1. **Inspect current release state**: Check `git status`, `git log --decorate -5`, and `npm pkg get version` before changing anything. If a previous attempt already created a version bump commit or tag (for example `vX.Y.Z`), resume from that version instead of bumping again.
2. **Initial Commit and Push**: Save all intended code changes made so far and push them before starting the release flow. Do not stage `.codex/` unless explicitly requested.
3. **Create or resume the minor version**:
   - If no release bump exists yet, run `npm version minor`.
   - If the repo is already bumped from an interrupted publish, reuse the existing version and do not run `npm version minor` again.
4. **Build before publish**: Run `npm run build`.
5. **Publish to NPM**: Run `npm publish --access public`.
   - If npm requires browser-based authentication or 2FA, immediately open the login/auth page in the browser.
   - Prefer an automatic browser open flow first. If needed, use browser automation to complete the npm web login.
   - After auth succeeds, retry only `npm publish --access public`. Do not rerun `npm version minor`.
6. **Publish Storybook**: Deploy the latest version of Storybook by running `npm run release-sb`.
7. **Update Changelog**: Document the released changes in `CHANGELOG.md`. The version and date must match the released version in `package.json`.
8. **Commit and Push release metadata**: Commit the changelog updates, push `main`, and push the release tag created by `npm version`.
