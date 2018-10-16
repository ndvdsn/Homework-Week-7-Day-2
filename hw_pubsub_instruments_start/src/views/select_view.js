const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-present', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
    console.log(allInstruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.family;
    option.value = index;
    this.element.appendChild(option);

  })
}




module.exports = SelectView;
