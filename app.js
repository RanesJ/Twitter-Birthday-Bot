var TwitterPackage = require('twitter');
var secret = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
};
var Twitter = new TwitterPackage(secret);

var favoriteTweet = function(){
  var params = {
      q: '#Birthday, #birthday',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED ....Success!!!');
        }
      });
    }
  });
}
favoriteTweet();
setInterval(favoriteTweet, 600000);

function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};