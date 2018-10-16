const PubSub = require('../helpers/pub_sub.js');
// const Data = require('../data/instrument_data.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-instruments-present', this.data);


// InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedInstrument = event.detail;
    // const instrumentFamily = this.find(selectedInstrument)
    this.publishInstrumentInfo(selectedInstrument);
  });
};

InstrumentFamilies.prototype.publishInstrument = function(instrumentFamily){
  const selectedInstrument = this.data(instrumentFamily)
  PubSub.publish('Instruments:selected-instrument-present', selectedInstrument)

};

module.exports = InstrumentFamilies;
