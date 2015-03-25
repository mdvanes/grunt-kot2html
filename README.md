# grunt-kot2html

> Grunt task to combine Knockout templates into one HTML for the Knockout.js-External-Template-Engine.

Based on https://blog.safaribooksonline.com/2014/01/31/using-external-templates-knockout-js/ and https://github.com/rniemeyer/SamplePresentation/blob/master/js/stringTemplateEngine.js

See also [grunt-kot2js](https://github.com/mdvanes/grunt-kot2js).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kot2html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kot2html');
```

Although I recommend using [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)

## The "kot2html" task

### Overview
In your project's Gruntfile, add a section named `kot2html` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    kot2html: {
        dist: {
            prefix: '/theme/',
            src: 'templates/**/*.html',
            dest: 'custom-templates.html'
        }
    }
});
```

Example output:

```html
<script type="text/html" id="/theme/templates/TemplateA">
    <span class="a" data-bind="text: foo"></span>
</script>
<script type="text/html" id="/theme/templates/TemplateB">
    <span class="a" data-bind="text: bar"></span>
</script>
```

### Options

#### prefix
Type: `String`
Default value: `',  '`

Not an option, but directly in the task. Prefix that is prepended to the template id along with the path. E.g. if the prefix is `/theme/` and the path of a template is `templates/bar.html`, the templateId will be `/theme/template/bar` (without .html).

#### src
Type: `String`
Default value: `',  '`

Not an option, but directly in the task. Input path. Location of the HTML Knockout Templates. Expects template files to have the .html extension

#### dest
Type: `String`
Default value: `',  '`

Not an option, but directly in the task. Output path. Location of the combined HTML file.

### Usage Examples

#### Default Options
In this example, the sources are files with the .html extension in the `templates` dir and the generated file is `custom-templates.html` in the root dir.

```js
grunt.initConfig({
    kot2html: {
        dist: {
            prefix: '/theme/',
            src: 'templates/**/*.html',
            dest: 'custom-templates.html'
        }
    }
});
```

## Contributing
Follow the jshintrc settings for the code style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2015-03-25    v0.1.0     initial release

## To Do

* add minification of generated HTML (at least remove all spaces)