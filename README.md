# generator-framework7-phonegap [![Build Status](https://secure.travis-ci.org/arvindr21/generator-framework7-phonegap.png?branch=master)](https://travis-ci.org/arvindr21/generator-framework7-phonegap)

> [Yeoman](http://yeoman.io) generator

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-framework7-phonegap from npm, run:

```bash
$ npm install -g generator-framework7-phonegap
```

Finally, initiate the generator:

```bash
$ yo framework7-phonegap
```

### Development

Once the scaffolding is completed, your project structure would be like 

```bash
├── framework7
│   ├── apps
│   │   ├── todo7
│   │   └── weather7
│   ├── build
│   ├── dist
│   ├── examples
│   │   ├── split-view
│   │   ├── split-view-panel
│   │   └── tab-bar
│   ├── kitchen-sink
│   └── src
├── hooks
├── merges
├── platforms
├── plugins
└── www
```

You will find 2 Gruntfiles - 

1. Inside the framework7 folder - This is used to manage Framework7 dev
2. At the root of the project - This is used to manage PhoneGap dev

#### Development Process

- Step 1 : To start developing, `cd` into the framework7 folder and begin development. Refer [Getting Started With Framework7](http://www.idangero.us/framework7/get-started). 
- Step 2 : Once you are done, run 
```bash
$ grunt dist
```
This is to build your Framework7 dev to a distributable format. _make sure you are running `grunt dist` from inside the framework7 folder_
- Step 3 - finally `cd` back to the root folder and run 
```bash
$ grunt copy
```
to copy all the contents of the _framework7/dist_ folder to _www_.

** Note : All your developemt should happen inside the _framework7_ folder and then run `grunt dist`. Next `cd` back to the root folder and run `grunt copy` to copy the contents of _framework7/dist_ to _www_ folder** 

From the root folder, run
```bash
$ grunt
```
to spin off a server. You can see the contents of _www_ folder in your browser at `http://localhost:1881`.

__ * you will find cordova.js as a 404 resource during Framework7 dev as well as PhoneGap dev. This will be resolved during PhoneGap Build__

### Run on an Emulator

I have written a few blog posts on how to setup PhoneGap/Cordova, integrate with Framework7 and issue a Phonegap Build to create a native installer. You can start link diving from : [Framework7 & PhoneGap – Getting Started](http://thejackalofjavascript.com/framework7-phonegap-getting-started/)

### TODO
* [ ] Grunt task - lint js/css
* [ ] Grunt task - push the code to Github 
* [ ] Grunt task - build generation

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT