// Code here
import fetch from 'node-fetch';


fetch('http://localhost:3000/beers/1')
.then (firstBeer => firstBeer.json())
.then(response => console.log(response));
// //Above is the block of code to get the index1 beer information
// //from the local directory


function listOfBeers(){
    const array = fetch('http://localhost:3000/beers')
    .then (listBeer => listBeer.json())
    .then(res => console.log(res));
   
}
listOfBeers()
//Above is the block of code to get the list of beers information
//from the local directory

function beerReview(review){
    
    this.review = review;
}

const newdescription = document.getElementById( form('review-form'))
newdescription.addEventListener('review',function(evt){

    const form = evt.target;
    reviews = form.review.value;
})


const button = document.querySelector( 'submit' );
    button.addEventListener('click', function(){
        console.log('clicked)');
        return;
    }

function reviewed(reviews){


    fetch('http://localhost:3000/beers'),{
        method : 'POST',
        headers:reviews}
        body: JSON.stringify
.then(result => result.json())
.then(reviewbeers=> console.log(reviewbeers))
}

  


