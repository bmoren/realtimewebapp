### real time web app foundation
##### MCAD Advanced Web + Screen
---
The files contained here are the foundation of a one to many (and many to one) realtime web app.

We are using express.js to serve out our static HTML files (line 7 in app.js) and using socket.io to handle real-time communication and messaging (lines 10-19 in app.js and lines 23 & 27 in public/frontend.js and line 12 in index.html) Through this combination we can have realtime communication across many devices.

In this example we create an emoji sharer where when we click on a screen position, we replicate an emoji in that position on everyone's screen who is connected.

---
### do this first in terminal.app (install node and npm using nvm)!
1. `xcode-select --install` install os X developer tool scripts
1. install [nvm](https://github.com/creationix/nvm)
1. `cd ~`
1. `touch .bash_profile` (if one does not already exist)
1. `nvm install stable` to install node.js and npm
1. `source ~/.bash_profile` to  reload your bash profile
1. `command -v nvm` which should output 'nvm' if the installation was successful.
1. `node -v` to verify install of node
1. `npm -v` to verify install of npm

### Get started with this repo
1. download the .zip of, or `git clone` this project
1. `cd` into the downloaded project folder
1. run `npm install`
1. `node app.js`
1. gogogadget!

### Get started on your own w/o this repo (new node.js project):
1. `mkdir` / make a new project folder
1. `cd` into the new project folder
1. `npm init`
1. Follow the prompts, but change `index.js` to `app.js` for later clarity
1. make an `app.js` file inside the project folder
1. make a `public` folder
1. inside the public folder, make `index.html`, `main.css`, etc.
1. install dependencies (`--save` will automatically add the dependencies in your `package.json` file)
    + `npm --save install socket.io` installs our web socket framework
    + `npm --save install express` installs our web server framework
1. checkout [the socket.io / express.js example](http://socket.io/docs/#using-with-express-3/4) to get started with these files

