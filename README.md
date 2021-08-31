## Available Scripts

### How to use:
1. Clone the repository.
2. Open the "Extensions" setting on the browser.
3. Enable developer mode.
4. Click on "Load unpacked" and open the "Build" directory from the cloned repository.
 The extension is now enabled and you can "shift key + left click" to bring up a note.

_________________________________________________________________________________________________________________


In the project directory, you can run:

### `yarn start`

First, set `REACT_APP_LOCAL=true`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build:extension`

First, set `REACT_APP_LOCAL=false`

This command will build the app as a Chrome extension. You will need to navigate to the `chrome://extensions` tab and click `Load unpacked`. Then, select the build folder.
