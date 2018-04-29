'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var Framework7PhonegapGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../package.json');

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies({
          bower: false
        });
      }
    });
  },

  askFor: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Framework7Phonegap generator!'));

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'What is the name of your app?',
      default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function(props) {
      this.appname = props.appname;

      done();
    }.bind(this));
  },

  app: function() {

    this.mkdir('framework7');
    this.directory('framework7/', 'framework7/');

    this.mkdir('hooks');
    this.directory('hooks/', 'hooks/');

    this.mkdir('plugins');
    this.directory('plugins/', 'plugins/');

    this.mkdir('res');
    this.directory('res/', 'res/');

    this.mkdir('www');
    this.directory('www/', 'www/');

    this.copy('.npmignore', '.npmignore');
    this.copy('_package.json', 'package.json');
    this.copy('README.md', 'README.md');
  },

  projectfiles: function() {
    
  }
});

module.exports = Framework7PhonegapGenerator;
