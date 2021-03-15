class Deck {
  constructor() {
    this.cards = [];
    this.suits = ["clubs", "diamonds", "hearts", "spades"];
    this.values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  }

  createCards() {
    for (this.suit of this.suits) {
      for (this.value of this.values) {
        this.cards.push(new Card(this.value, this.suit).formatCard());
      }
    }
    return this.cards;
  }
}
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  formatCard() {
    return this.value + " of " + this.suit;
  }
}
module.exports = {
  Deck: Deck,
};