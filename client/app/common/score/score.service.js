class ScoreService {
    constructor($http) {
        'ngInject'
        this.$http = $http;
    }

    getScores() {
        return this.$http.get('https://guess-the-word-7a728.firebaseio.com/data/scores.json').then(response => response.data);
    }
    
    saveScore(user, score){
        let newScore = {
            'username': user,
            'score': score,
        }
        return this.$http.post('https://guess-the-word-7a728.firebaseio.com/data/scores.json', newScore);
        //this.scores.push(newScore);
    }
}


export default ScoreService;