class LocalStorage {
    constructor($window) {
        "ngInject"
        this.$window = $window;
    }
    setData(key, value) {
        return this.$window.sessionStorage && this.$window.sessionStorage.setItem(key, value);
        //return this.$http.get('/api/todos').then(response => response.data);
    }
    getData(key){
        return this.$window.sessionStorage && this.$window.sessionStorage.getItem(key);
    }
}


export default LocalStorage;