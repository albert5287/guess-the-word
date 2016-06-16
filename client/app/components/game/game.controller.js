class GameController {
  constructor() {
  	this.username = 'Albert';
    this.words = ['pizza', 'test', 'food', 'party'];
    this.input = '';
    this.previousInput = '';
    this.globalScore = 0;
    this.deletedLetters = 0;
    this.pos = 0;
    this.currentWord = this.words[this.pos];

    this.getMangledWord = (word) =>{
      var a = word.split(""),
          n = a.length;

      for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join("");
    };

    this.mangleWord = this.getMangledWord(this.currentWord);

    this.updateGloblalScore = () => {
      let score = Math.floor(1.95**(this.currentWord.length/3)) - this.deletedLetters; //get the total score for the word
      //if score is bigger than 0, 
      //the global score is incremented
      if(score > 0){
        this.globalScore += score;
      }
      this.changeCurrentWord();
      console.log('score', this.globalScore);
    }

    this.changeCurrentWord = () =>{
      this.pos++;
      this.input = '';
      this.previousInput = '';
      this.deletedLetters = 0;
      this.currentWord = this.words[this.pos];
      this.mangleWord = this.getMangledWord(this.currentWord);
    }

  }

  validate(keyEvent){
    console.log(this.input.length);
    if(this.input === this.currentWord){
      this.updateGloblalScore();
    }
    //console.log(this.input.length, this.previousInput.length);
    //console.log(keyEvent.which === 8 && (this.input.length < this.previousInput.length));
    if ((keyEvent.which === 8 || keyEvent.which === 46) && (this.input.length < this.previousInput.length)){
      console.log('I have delete a letter');
      this.deletedLetters++;
    }
    this.previousInput = this.input;
  }
}

export default GameController;
