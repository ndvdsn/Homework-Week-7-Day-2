const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentView = require('./views/instrument_view.js');



document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const instrumentSelector = new SelectView(selectElement);
  instrumentSelector.bindEvents();

  const info = document.querySelector('#instrument-info')
  const instrumentInfoDisplay = new InstrumentView(info);
  instrumentInfoDisplay.bindEvents();
console.log(instrumentInfoDisplay);
console.log(info);

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();

});
