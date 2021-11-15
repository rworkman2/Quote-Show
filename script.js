
/* Data to Show*/
const data = [
  {
   quote: `“Free run”`, 
   emoji: '👟', 
   image: `url(assets/shoes5.jpg)`,
  shoe: `Wave Runner`
  }, 
  {
   quote: `“Spend that money”`, 
   emoji: '👞 ', 
   image: `url(assets/shoes3.jpg)`,
   shoe: `NMD`
  },  
  {
   quote: `“Run away”`, 
   emoji: '🧦' , 
   image: `url(assets/shoes4.jpg)`,
    shoe: `EQT`
  },
  {
    quote: `“Comfy shoes”`, 
    emoji: '🥾', 
    image: `url(assets/shoes2.jpg)`,
    shoe: `Yeezys`
  },
  
    {
    quote: `“Be bold”`, 
    emoji: '👣', 
    image: `url(assets/shoes1.jpg)`,
    shoe: `Yeezys`
  }
];

/* Quote and Emoji */

// blockquote
const quote = document.querySelector('blockquote');

// emoji
const emoji = document.querySelector('p');

// background
const bgImage = document.querySelector('body');

const shoe = document.querySelector('div');
// Check-Check: change text
quote.innerHTML = "Life is to short not to be happy";
shoe.innerHTML = 'Yeezys';
// Check-Check: change emoji text
emoji.innerHTML = "👟";

// Check-Check: background image
bgImage.style.backgroundImage= 'url(assets/shoes1.jpg)';

/*  Navigate to Items with Event Listeners Track Number of Items */

// initialize item number
let itemNumber = 0;

// get next button
const nextButton = document.querySelector("img.next");

// get previous button
const prevButton = document.querySelector("img.prev");

// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {

// update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
// if at LAST item
  if ( itemNumber > data.length -1 ) {
    
// reset counting to first item
    itemNumber = 0;
  }

// display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  shoe.innerHTML = data[itemNumber].shoe;
});
  

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  
// update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
// if at FIRST item
  if ( itemNumber < 0 ) {
    
// reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function(){
  
// generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
// display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
   shoe.innerHTML = data[itemNumber].shoe;
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  if ( event.keyCode === 39 ) {
   
// update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
// if at LAST item
  if ( itemNumber > data.length -1 ) {
    
// reset counting to first item
    itemNumber = 0;
  }

// display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  shoe.innerHTML = data[itemNumber].shoe; 
  }
  
  if ( event.keyCode === 37 ) {
  
// update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
// if at FIRST item
  if ( itemNumber < 0 ) {
   
// reset counting to last item
    itemNumber = data.length -1;
  }  
  
// display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
     shoe.innerHTML = data[itemNumber].shoe;
  }
  
});

document.addEventListener('keypress', function(){
  if ( event.keyCode === 32 ) {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  shoe.innerHTML = data[itemNumber].shoe; 
  }
});


