'use strict';

var test = require('tape');
var example = require('./index');

test('example should return true', function(t){
  t.equal(example(), true, "should be true");
  t.end();
});

