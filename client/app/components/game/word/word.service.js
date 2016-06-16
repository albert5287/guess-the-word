class WordService {
    constructor($http) {
        'ngInject'
        this.$http = $http;
    }

    getWords() {
        return this.$http.get('https://guess-the-word-7a728.firebaseio.com/data/words.json').then(response => this.shuffleWords(response.data));
    }

    shuffleWords (array) {
        let i = 0
            , j = 0
            , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array;
    }

    mangleWord(word){
        var a = word.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
}


export default WordService;