# generator-framework7-phonegap [![Build Status](https://secure.travis-ci.org/arvindr21/generator-framework7-phonegap.png?branch=master)](https://travis-ci.org/arvindr21/generator-framework7-phonegap)

[![NPM](https://nodei.co/npm/generator-framework7-phonegap.png?downloads=true)](https://nodei.co/npm/generator-framework7-phonegap/)

> A Yeoman Generator to Scaffold a [Framework7 v2.2.1](http://framework7.io/) [PhongeGap/Cordova v7.x](http://cordova.apache.org/) app

## Getting Started


To install `generator-framework7-phonegap`, run:

```bash
$ npm install -g yo generator-framework7-phonegap
```

Finally, initiate the generator:

```bash
$ yo framework7-phonegap
```

## Development

Once the scaffolding is completed, your project structure would be like 

```bash
.
├── README.md
├── framework7
│   ├── BACKERS.md
│   ├── CHANGELOG.md
│   ├── CONTRIBUTING.md
│   ├── LICENSE
│   ├── README.md
│   ├── dist
│   ├── gulpfile.js
│   ├── kitchen-sink
│   ├── package-lock.json
│   ├── package.json
│   ├── scripts
│   └── src
├── hooks
│   └── README.md
├── package-lock.json
├── package.json
├── plugins
│   ├── cordova-plugin-whitelist
│   └── fetch.json
├── res
│   ├── README.md
│   ├── icon
│   └── screen
└── www
    ├── config.xml
    ├── css
    ├── fonts
    ├── img
    ├── index.html
    ├── js
    ├── lib
    └── pages
```

### App Dev
Like you would any corodova app


### Run in browser
First add the browser platform, if not already done so

```bash
$ cordova platform ls
$ cordova platform add browser
```
Run the app in browser
```bash
$ cordova run browser -- --port=8001
```

### Framework7 Customization
If you would like to customize Framework7, you can do so inside the `/framework7` folder. Once the development is completed and you have build the final distrubtion from inside the `/framework7` folder, you need to copy the contents of `/framework7/dist` folder to `www/lib`. _Contents not the complete `dist` folder._


## License

MIT