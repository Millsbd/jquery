const movieForm = document.querySelector('#movieForm')
const divContainer = document.querySelector('#divContainer');

// const title = document.createElement('input');
// title.setAttribute('type', 'text');
// title.setAttribute('placeholder', 'Enter Title' )
// movieForm.appendChild(title);

// const rating = document.createElement('input');
// rating.setAttribute('type', 'number');
// rating.setAttribute('placeholder', 'Enter Rating' )
// movieForm.appendChild(rating);

// const subBtn = document.createElement('input');
// subBtn.setAttribute('type', 'submit');
// movieForm.appendChild(subBtn);

// $(title).css('margin','10px');
// $(rating).css('margin', '10px')

// $(movieForm).on('submit', function (){

// })

movieForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    let subRating = document.createElement('span');
    subRating.innerText = ratingInput.value;
    divContainer.appendChild(subRating);

    // **Tried using Vanilla JS but it is appending undefined not the rating put into the input**

})


const ratingInput = $('<input type = "number" placeholder = "Enter Rating">').css('margin', '20px').appendTo('#movieForm');

const titelInput = $('<input type = "text" placeholder = "Enter Title">').css('margin', '20px').appendTo('#movieForm');

const subBtn = $('<input type = "submit">').appendTo('#movieForm');

$(movieForm).on('submit', function(evt){
    evt.preventDefault();
    divContainer.append(ratingInput.value);
})

// **tried creating a submit event listener on the form but having same problem as with vanilla JS 
