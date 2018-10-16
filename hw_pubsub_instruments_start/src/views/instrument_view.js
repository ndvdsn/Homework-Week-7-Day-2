const PubSub = require('../helpers/pub_sub.js');

const InstrumentView = function(container){
  this.container = container;
};

InstrumentView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-present', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = event.target.value;
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentView
