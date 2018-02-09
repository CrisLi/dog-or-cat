
class VoteService {

  constructor() {
    this.dogs = 0;
    this.cats = 0;
  }

  vote(to) {
    switch (to) {
      case 'dogs':
        this.dogs = this.dogs + 1;
        break;
      case 'cats':
        this.cats = this.cats + 1;
        break;
      default:
        console.log('Unknow vote selection');
        break;
    }
    return this.votes;
  }

  get votes() {
    return {
      dogs: this.dogs,
      cats: this.cats
    };
  }

}

module.exports = new VoteService();
