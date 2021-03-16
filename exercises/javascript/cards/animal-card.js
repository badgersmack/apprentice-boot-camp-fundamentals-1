const {Card} = require('./card.js');

class AnimalCard extends Card {
  constructor(value) {
    super(value);
  }

snap(otherCard) {
  return (otherCard) && this.value === otherCard.value;
};

toString() {
  return this.value.toString();
};

};

module.exports = {
  AnimalCard: AnimalCard
};