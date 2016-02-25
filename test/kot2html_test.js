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
    dist: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/all-templates.html');
        var expected = grunt.file.read('test/expected/dist');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },
    distWithSrcRoot: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/all-templates2.html');
        var expected = grunt.file.read('test/expected/dist2');
        test.equal(actual, expected, 'should skip the srcRoot part of the path.');

        test.done();
    }
};
