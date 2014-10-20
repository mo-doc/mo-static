'use strict';

var app_mo_static = require('../index');

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
var assert = require('assert');

describe("description", function(){
  it("should has a method `my_method`", function(){
    assert.ok('my_method' in app_mo_static);
  });
});