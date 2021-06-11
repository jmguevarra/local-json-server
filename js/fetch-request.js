/**
 * Using fetch I tried to make a request in json server I made locally
 * This is a practice project of doing CRUD with different xmlhttprequest
 */

const addPost = function(url = '', data = {}){
   fetch(url, {
       method : 'POST',
       body : JSON.stringify(data),
       headers : {
           'Content-Type' : 'application/json'
       }
    }).then(function(response){
        return response.text();
    }).then(function(data){
        console.log(data);
    });
};

const viewPost = function(url = ''){
    fetch(url).then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
};




