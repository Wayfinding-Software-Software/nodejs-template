# Node JS Template
by [Wayfinding Software Solutions](https://wayfinding.software)

This repo is meant to be a starting point for a new app or micro-service project, using Node JS and Express.js.

# Features
* [Express.js](https://github.com/expressjs/express) Application Framework
   * [Express Generator](https://expressjs.com/en/starter/generator.html)
   * [Routing](https://expressjs.com/en/guide/routing.html) 
   * [Database Integration](https://expressjs.com/en/guide/database-integration.html) 
* [Jest](https://jestjs.io/) Testing Framework
* [Github Codespaces](https://github.com/features/codespaces) for instant Developer Environment setup
* [dotenv](https://github.com/motdotla/dotenv?tab=readme-ov-file#dotenv-) handling environment variables / settings
    * [dotenv-vault](https://github.com/dotenv-org/dotenv-vault) for secrets

# Important Commands

### To run this application:

```
npm start
```
And visit [http://localhost:3000](http://localhost:3000) to see the homepage.  Or in VS Code, a tab will automatically open.

### To run all tests:
```
npm test
```

# Using github codespaces

I recommend using github codespaces with the native [Visual Studio Code](https://code.visualstudio.com/) app.

The steps that I follow when getting started are:
1. Go to the github repo and click the `< > Code` dropdown.
2. Click the `+` button to create a new codespace.

You're taken to a web interface running Visual Studio Code after creating the new codespace.  You can continue in the web ui if you want, but I like to move to native so:

3. `control + C` to stop the server that automatically runs (you want to restart from the native VS Code terminal)
4. Close the window, returning back to the github repo
5. Click the `< > Code` dropdown
6. Click the `...` on the codespace that you created
7. Click "Open in Visual Studio Code" to redirect to your native VS Code

From here, VS code will prompt github login and recommend installing important extensions like "Dev Containers" and "GitHub Codespaces".  It's all very easy and straightforward.

That's it!  You can forget about setting up and maintaining dev environments and focus on building apps.

The rules for the dev environment setup are in `.devcontainer/devcontainer.json`.

# Getting started with dotenv

For local config files that won't get pushed to Github, just place them in a `.env` file in the root directory.

Example `.env` file:
```
NEW_VARIABLE="valueofvariable"
ANOTHER_ONE="any string as value"
```

The `.env.vault` file is different.  They make it easy to setup an encrypted data store so the secret values can safely be synced to github and configured for staging and production environments.  See the instructions in `.env.vault` to get started.

# Write new Tests

You can create more tests in the `/tests/` directory and organize them however you like.  Use the `homepage.test.js` as an example.  Read more about the [Jest](https://jestjs.io/) Testing Framework.  And just be sure to end each filename with `.test.js`.
