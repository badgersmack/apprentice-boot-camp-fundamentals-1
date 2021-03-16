class PlayingCard {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }

    formatCard() {
      return this.value + " of " + this.suit;
    }


    snap(otherCard) {
        return (otherCard) && this.value === otherCard.value;
    }

    toString() {
        return this.value.toString();
    }

  }
  module.exports = {
    PlayingCard: PlayingCard,
  };