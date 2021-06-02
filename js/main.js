/**
 * This is main file that handles actions for different type of request
 * 
 */
 var d = document;
 const addPostBtn = d.querySelector('#add-post'),
 title = d.querySelector('input[name="title"]'),
 author = d.querySelector('input[name="author"]');
 
 //Actions Here
 addPostBtn.addEventListener('click', function(e){
     e.preventDefault();
 
     let data = { //data for body of http request
         title : title.value,
         author : author.value
     };
     
     addPost('http://localhost:3000/posts', data);
 });
 
 
 