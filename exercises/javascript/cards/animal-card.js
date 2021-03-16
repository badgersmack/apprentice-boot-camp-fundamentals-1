let AnimalCard = class AnimalCard {
  constructor(animal) {
    this.value = animal;
  }
};

AnimalCard.prototype.snap = function (otherCard) {
  return (otherCard) && this.animal === otherCard.animal;
};

AnimalCard.prototype.toString = function () {
  return this.animal;
};

module.exports = {
  AnimalCard: AnimalCard
};