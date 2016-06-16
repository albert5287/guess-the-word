class LoginController {
  constructor($state, LocalStorage) {
  	"ngInject";
    this.username = "";
    this.$state = $state;
    this.LS = LocalStorage;
  }

  login(){
    this.LS.setData('user',this.username);
    this.$state.go("home");
  }
  
  isValidLogin(){
    return this.username.length > 3;
  }
}

export default LoginController;
