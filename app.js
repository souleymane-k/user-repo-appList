`use strict`

function getUserInfo(inputName) {
    fetch("https://api.github.com/users/"+ inputName)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));     
    
  }
  
  function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').empty()
    //replace the existing image with the new one
    $('.results').replaceWith( `
    <ul>
    <div>${responseJson.name}</div>
    <div>${responseJson.html_url}</div>
    </ul>
    `
    )
  
    //display the results section
    $('.results').removeClass('hidden');
  
  }

/********************************** */

function watchForm(){
$('form').submit(event =>{
event.preventDefault();
console.log('watchForm section');
let userInput = $('.enter').val();
     $('.enter').val(" ");
     let inputName = userInput.split(' ').join('')
     getUserInfo(inputName);    

})

}

$(function(){
    console.log('app loaded! Waiting for submit');
    watchForm();

});






