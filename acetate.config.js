var rev = require('acetate-asset-revisions');

module.exports = function (acetate) {
  acetate.load('**/*.+(md|html)');

  acetate.use(rev('build/asset-manifest.json'));
};
