---
mode: 'agent'
description: 'Publish a patch version of the package. Commits+pushes, publishes to NPM (patch), deploys Storybook and updates the CHANGELOG.'
---

Perform the following steps automatically:

1. **Initial Commit and Push**: Save all code changes made so far.
2. **Publish to NPM**: Release a new patch version of the package by running `npm run publish-npm-patch`.
3. **Publish Storybook**: Deploy the latest version of Storybook by running `npm run release-sb`.
4. **Update Changelog**: Document the changes in the `CHANGELOG.md` file. The version must match the version in `package.json`.
5. **Commit and Push Changelog**: Save the `CHANGELOG.md` changes.
