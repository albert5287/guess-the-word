class ScoreService {
    constructor($http) {
        'ngInject'
        this.$http = $http;
        this.scores = [
            {
                'username' : 'user 1',
                'score': '10'
            },
            {
                'username' : 'user 2',
                'score': '5'
            },
            {
                'username' : 'user 3',
                'score': '8'
            }
        ]
    }

    getScores() {
        return this.scores;
        //return this.$http.get('/api/todos').then(response => response.data);
    }
    
    saveScore(user, score){
        let newScore = {
            'username': user,
            'score': score,
        }
        this.scores.push(newScore);
    }
}


export default ScoreService;