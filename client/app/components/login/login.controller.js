class LoginController {
  constructor($state) {
  	"ngInject";
    this.username = '';
    this.$state = $state;
  }

  login(){
    console.log('login');
  	//I have to redirect to the game
  }
  
  isValidLogin(){
    return this.username.length > 3;
  }
}

export default LoginController;
