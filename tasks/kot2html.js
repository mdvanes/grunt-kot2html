/*
 * grunt-kot2html
 * https://github.com/mdvanes/grunt-kot2html
 *
 * Copyright (c) 2015 M.D. van Es
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('kot2html', 'Grunt task to combine Knockout templates into one HTML for the Knockout.js-External-Template-Engine.', function () {
        //var defaultTemplatesContent = grunt.file.read(defaultTemplates);
        //result += defaultTemplatesContent + '\n\n';
        var path = require('path'),
            files = grunt.file.expand(this.data.src),
            destObj = path.parse(this.data.dest),
            result = '',
            deepEqual = require('deep-equal'),
            prefix = this.data.prefix;

        files.forEach(function (file) {
            grunt.verbose.writeln('Processing', file);
            // Prevent reading the output file
            //if (path.basename(file) !== 'custom-templates.html') {
            if (!deepEqual(destObj, path.parse(file))) {
                //strip the extension to determine a template name
                //var dirname = this.data.prefix + path.dirname(file);
                //var name = path.basename(file).replace('.html', '');
                //console.log('path', path, path.dirname(file));
                //name = dirname + '/' + name;

                // Strip the extension to determine the template name
                var templateId = prefix +
                    path.dirname(file) + '/' +
                    path.basename(file).replace('.html', '');
                var content = grunt.file.read(file);

                result += '<script type="text/html" id="' + templateId + '">\n    ' + content + '\n</script>\n\n';
            }
        });

        grunt.file.write(this.data.dest, result);
        grunt.log.writeln('Compilation to ' + this.data.dest + ' completed successfully');
    });

};
