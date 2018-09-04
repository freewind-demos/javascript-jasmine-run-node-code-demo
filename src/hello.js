const core = require('./core');

module.exports = function () {
  core();
  let h = "Hello,";
  let w = "world!";
  console.log("=========== hello =========");
  return h + w;
};