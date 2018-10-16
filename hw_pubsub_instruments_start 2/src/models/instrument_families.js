const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:change', (event) => {
    const selectedFamily = event.detail
    const family = this.find(selectedFamily)
    PubSub.publish('InstrumentFamilies:selected-ready', family)
  })
};

InstrumentFamilies.prototype.find = function (family) {
  const foundFamily = this.data.find((currentFamily) => {
    return currentFamily.name === family
  });
  return foundFamily;
}

module.exports = InstrumentFamilies;
