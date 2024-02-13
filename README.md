# Node JS Template
by [Wayfinding Software Solutions](https://wayfinding.software)

This repo is meant to be a starting point for a new app or micro-service project, using Node JS and Express.js.

## Other Features of note
* [Jest](https://jestjs.io/) Testing Framework
* [Github Codespaces](https://github.com/features/codespaces) for instant Developer Environment setup
* [dotenv](https://github.com/motdotla/dotenv?tab=readme-ov-file#dotenv-) handling environment variables / settings
    * [dotenv-vault](https://github.com/dotenv-org/dotenv-vault) for secrets

## Important Commands

To run this application:

```
npm start
```

To run all tests:
```
npm test
```

## Getting started with dotenv

For local config files that won't get pushed to Github, just place them in a `.env` file in the root directory.

Example `.env` file:
```
NEW_VARIABLE="valueofvariable"
ANOTHER_ONE="any string as value"
```

The `.env.vault` file is different.  They make it easy to setup an encrypted data store so the secret values can safely be synced to github and configured for staging and production environments.  See the instructions in `.env.vault` to get started.