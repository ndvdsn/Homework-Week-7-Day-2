const PubSub = require('../helpers/pub_sub')

const DisplayView = function(element){
  this.element = element
}

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-ready', (event) => {
    const family = event.detail
    this.renderFamily(family)
  })
};

DisplayView.prototype.renderFamily = function (family) {
  // this.element.innerHTML = ""
  const header = document.createElement('h1')
  header.textContent = family.name
  header.classList.add('instrument-detail-element')
  this.element.appendChild(header)
  this.createPTag('Name', `${family.name}`)
  this.createPTag('Description', `${family.description}`)
  this.createPTag('Instruments', `${family.instruments}`)
};

DisplayView.prototype.createPTag = function (key, value) {
  const p = document.createElement('p')
  p.textContent = `${key}: ${value}`
  p.classList.add('instrument-detail-element')
  this.element.appendChild(p)
}

module.exports = DisplayView
