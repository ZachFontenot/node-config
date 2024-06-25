const vows = require('vows');
const assert = require('assert');
const path = require('path');
const requireUncached = require('./_utils/requireUncached');

vows.describe('Break on too many directories')
.addBatch({
  'Long config names error on load': function () {
    process.env.NODE_CONFIG_DIR =  [
      './test/22-config',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name1',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name2',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name3',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name4',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name5',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name6',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name7',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name8',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name9',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name10',
      __dirname + './test/22-config/here_is_a_long_and_pathological_dir_name11',
    ].join(path.delimiter)

    assert.doesNotThrow(function () {
      const CONFIG = requireUncached(__dirname + '/../lib/config');
    }, 'Long file names errors out');

  }
})
  .export(module);