/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
 const myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {

    // Defines a Mocha unit test
    test("Test if No Occurence of notEmpty Original Text is retained", function(){
        var originalString =  "This is my test string with no notmpty scenario";
        var resultString = myExtension.replaceNe(originalString);
        assert.equal(resultString,originalString);
    });
    test("Test if notEmpty in Original Text without () Original Text is retained", function(){
        var originalString =  "This is my test string with notEmpty scenario";
        var resultString = myExtension.replaceNe(originalString);
        assert.equal(resultString,originalString);
    });
});