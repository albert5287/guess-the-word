class GameController {
  constructor(LocalStorage, WordService, ScoreService, $state) {
    "ngInject";
    this.ScoreService = ScoreService;
    this.$state = $state;
  	this.username = LocalStorage.getData('user');
    this.input = '';
    this.previousInput = '';
    this.globalScore = 0;
    this.deletedLetters = 0;
    this.pos = 0;
    this.timer = 40;
    this.currentWord = this.words[this.pos];


    this.mangleWord = WordService.mangleWord(this.currentWord);

    this.updateGloblalScore = () => {
      let score = Math.floor(1.95**(this.currentWord.length/3)) - this.deletedLetters; //get the total score for the word
      //if score is bigger than 0, 
      //the global score is incremented
      if(score > 0){
        this.globalScore += score;
      }
      this.changeCurrentWord();
    }

    this.changeCurrentWord = () =>{
      this.pos++;
      this.input = '';
      this.previousInput = '';
      this.deletedLetters = 0;
      this.currentWord = this.words[this.pos];
      this.mangleWord = WordService.mangleWord(this.currentWord);
    }

  }

  validate(keyEvent){
    if(this.input === this.currentWord){
      this.updateGloblalScore();
    }
    //console.log(this.input.length, this.previousInput.length);
    //console.log(keyEvent.which === 8 && (this.input.length < this.previousInput.length));
    if ((keyEvent.which === 8 || keyEvent.which === 46) && (this.input.length < this.previousInput.length)){
      this.deletedLetters++;
    }
    this.previousInput = this.input;
  }

  updateTimer(timer){
    this.timer = timer;
    
    if(this.timer === 0){
      this.ScoreService.saveScore(this.username, this.globalScore).then(response => this.$state.go('highscores'));

    }
  }
}

export default GameController;
