const PubSub = require('../helpers/pub_sub')

const MenuView = function(listItems) {
  this.listItems = listItems
}

MenuView.prototype.bindEvents = function () {
  this.listItems.forEach((item) => {
    item.addEventListener('change', (event) =>{
      const selectedFamily = event.target.id
      PubSub.publish('MenuView:change', selectedFamily)
    })
  })
};

module.exports = MenuView;
