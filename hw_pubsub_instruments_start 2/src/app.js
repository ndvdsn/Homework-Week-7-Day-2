const InstrumentData = require('./data/instrument_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const MenuView = require('./views/menu_view');
const DisplayView = require('./views/display_view');


document.addEventListener('DOMContentLoaded', () => {

  const instrumentDataModel = new InstrumentFamilies(InstrumentData);
  instrumentDataModel.bindEvents()

  const menu = document.querySelectorAll('#instrument-families')
  const menuView = new MenuView(menu)
  menuView.bindEvents()

  const instrumentDiv = document.querySelector('instrument-info')
  const displayView = new DisplayView(instrumentDiv)
  displayView.bindEvents()


});
