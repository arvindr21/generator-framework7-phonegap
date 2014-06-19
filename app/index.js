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
                this.installDependencies();
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
        this.mkdir('hooks');
        this.mkdir('merges');
        this.mkdir('platforms');
        this.mkdir('plugins');
        this.mkdir('www');

        this.copy('phonegap/hooks/README.md', 'hooks/README.md');
        this.directory('phonegap/www/res', 'www/res');
        this.copy('phonegap/www/icon.png', 'www/icon.png');
        this.copy('phonegap/www/_config.xml', 'www/config.xml');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');

        this.mkdir('framework7');
        this.directory('framework7/', 'framework7/');
    },

    projectfiles: function() {
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('jshintrc2', 'framework7/.jshintrc');
    }
});

module.exports = Framework7PhonegapGenerator;
