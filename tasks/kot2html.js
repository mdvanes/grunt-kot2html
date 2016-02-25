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

        var path = require('path'),
            srcRoot = this.data.srcRoot,
            files = grunt.file.expand(this.data.src),
            destObj = path.parse(this.data.dest),
            result = '',
            deepEqual = require('deep-equal'),
            prefix = this.data.prefix;

        var originalWorkingDir = process.cwd();
        if(srcRoot) {
            // If srcRoot is set, read files relative to srcRoot and change the reading dir to srcRoot
            files = grunt.file.expand({cwd: srcRoot}, this.data.src);
            process.chdir(this.data.srcRoot);
        }

        files.forEach(function (file) {
            grunt.verbose.writeln('Processing', file);

            // Prevent reading the output file
            if (!deepEqual(destObj, path.parse(file))) {

                // Strip the extension to determine the template name
                var templateId = prefix +
                    path.dirname(file) + '/' +
                    path.basename(file).replace('.html', '');
                var content = grunt.file.read(file);

                result += '<script type="text/html" id="' + templateId + '">\n    ' + content + '\n</script>\n\n';
            }
        });

        if(srcRoot) {
            // Change back to originalWorkingDir before writing the result
            process.chdir(originalWorkingDir);
        }

        grunt.file.write(this.data.dest, result);
        grunt.log.writeln('Compilation to ' + this.data.dest + ' completed successfully');
    });

};
