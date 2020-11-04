`use strict`;

function getUrlList(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(reponseJson =>
     console.log(reponseJson))
   
}
/**function getUrlList(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(reponseJson =>
     console.log(reponseJson))
   
}
 */

function watchForm(){
$('form').submit(event =>{
event.preventDefault();
console.log('watchForm section');
let numberDogs = $('.enter').val();
     $('.enter').val("");
     console.log(watchForm(numberDogs));

})

}
$(function(){
    console.log('app loaded! Waiting for submit');
    watchForm();

});






