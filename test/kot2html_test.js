'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.kot2html = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    dist1: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/all-templates.html');
        var expected = grunt.file.read('test/expected/result1.html');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },
    dist2: function (test) {
        // with srcRoot and prefix
        test.expect(1);

        var actual = grunt.file.read('tmp/all-templates2.html');
        var expected = grunt.file.read('test/expected/result2.html');
        test.equal(actual, expected, 'should skip the srcRoot part of the path.');

        test.done();
    },
    dist3: function (test) {
        // with srcRoot and without prefix
        test.expect(1);

        var actual = grunt.file.read('tmp/all-templates3.html');
        var expected = grunt.file.read('test/expected/result3.html');
        test.equal(actual, expected, 'should skip the srcRoot part of the path.');

        test.done();
    }
};
