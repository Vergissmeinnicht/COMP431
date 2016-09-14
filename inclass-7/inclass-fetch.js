// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {

    'use strict'

    function countWords(url) {
        return fetch(url)
          .then(
            function(response){
              //Examine the text in the response
              return response.json().then(
                function(data){
                  var pair = {};
                  var data_articles = data.articles;
                  for(var obj in data_articles){
                    pair[data_articles[obj]._id] = data_articles[obj].text.split(" ").length;
                  }
                  return pair;
                }
              );
            }
          );
    }

    function countWordsSafe(url) {
        return fetch(url)
          .then(
            function(response){
              if(response.status !== 200){
                console.log('Problem! Status code: ' + response.status);
                return {};
              }
              //Examine the text in the response
              return response.json().then(
                function(data){
                  var pair = {};
                  var data_articles = data.articles;
                  for(var obj in data_articles){
                    pair[data_articles[obj]._id] = data_articles[obj].text.split(" ").length;
                  }
                  return pair;
                }
              ).catch(function(error){
                console.log('Request Failed', error);
                return {};
              });
            }
          );
    }

    function getLargest(url) {
        var map = function countWordsSafe(url) {
            return fetch(url)
              .then(
                function(response){
                  if(response.status !== 200){
                    console.log('Problem! Status code: ' + response.status);
                    return {};
                  }
                  //Examine the text in the response
                  return response.json().then(
                    function(data){
                      var pair = {};
                      var data_articles = data.articles;
                      for(var obj in data_articles){
                        pair[data_articles[obj]._id] = data_articles[obj].text.split(" ").length;
                      }
                      return pair;
                    }
                  ).catch(function(error){
                    console.log('Request Failed', error);
                    return {};
                  });
                }
              );
        };
        if(map == null){
          return "Bad url";
        }
        var maxlen = -1;
        var maxid = "";
        for(var id in map){
          if(map[id] > maxlen){
            maxlen = map[id];
            maxid = id;
          }
        }
        console.log(map);
        console.log(maxlen);
        console.log(maxid);
        return maxid;
    }

    exports.inclass = {
        author: "Jinghao Lin",
        countWords, countWordsSafe, getLargest
    }

})(this);
