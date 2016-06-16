class TimerController {
  constructor($timeout) {
  	"ngInject";
    this.progress = 100;
    this.maxTime = this.timer;
    this.countdown = () => {
      if (this.timer > 0) {
        this.timer--;
        this.progress = this.progress - (100/this.maxTime); //update progress bar
        this.onChange({
          timer : this.timer
        });
        $timeout(this.countdown,1000);
      }
      else{
        //alert("time's up!!!")
      }
    };

    $timeout(this.countdown,1000);
  }
}

export default TimerController;
