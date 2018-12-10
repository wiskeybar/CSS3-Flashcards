// the script is a simple procedural JS file, if you intend to use it I suggest sanitizing it.

// variables

const cards = document.querySelectorAll('.card');
const flashFrontHead = document.querySelector('.flashcard-answer-head');
const flashBackHead = document.querySelector('.flashcard-question-head');
const flashBackText = document.querySelector('.flashcard-answer');
const btnNext = document.querySelector('.flashcard-next');
const btnPrev = document.querySelector('.flashcard-back');
const resetBtn = document.querySelector('.flashcard-reset ') ;
const ownQuestion = document.querySelector('.own-question');
const ownAnswer = document.querySelector('.own-answer');
const ownAdder = document.querySelector('.input-own');
let answerNumber = -1;
let questionValue = "";
let answerValue = "";
// object containing questions. You might want to switch the object for an array, but in my opinion objects give you a clearer way of seeing all that's been written. Take note - if you plan on adding more questions I suggest using backticks ` for multiline answers.
const questions = {
    '1. How do you apply CSS styles to a web page?': `1.Using a <style> block in the <head> section, 
    2. Using the inline style,
    3.Loading an external CSS file `,
    '2. What are CSS media queries?': 'CSS media queries adjust content style based on device characteristics like width, height, orientation, resolution, and display type and thus they make responsive web design (RWD) possible',
    '3. What is a CSS preprocessor? ': 'Preprocessors extend the functionality of CSS by offering powerful features like variables, inheritable “classes” called extends, and “function-like” mixins. The most popular are SASS, LESS and Stylus',
    '4. List the basic layout components of the CSS box model': `border: The border surrounding the padding.
    content: Any text or images within the box.
    margin: The transparent area surrounding borders.
    padding: The transparent area surrounding content.`,
    '5. Common CSS units of length are: cm, em, in, mm, pc, pt, rem and px. what do these abbreviations mean?': `cm: centimeters. | em: a relative unit of measurement based on the size of a font. | in: inches. mm: millimeters. | pc: pica, a unit of length equivalent to 12 points, or 1/6 of an inch. | pt: 1/72 of an inch. | rem: similar to em, but refers to the :root element. | px: a device-specific relative measurement equivalent to a certain number of pixels on a display.`,
    '6. What does “Cascading” in CSS mean?': '“Cascading” refers to the cascading order in HTML document. This will sort the declared CSS in an order to avoid the conflicts.',
    '7. Explain type selector in CSS?':'Type selector matches the element of specific type, i.e. input[type="text"]',
    '8. Explain universal selector in CSS': 'The universal selector * is used to match any element types.',
    '9. Which property will be used for changing the face of font in CSS?': '“font family” property can be used for changing the face of font.',
    '10. What is the use of z-index in CSS?' : 'Z-Index is used to avoid the overlapping of the elements. Default value of z-index is 0 and it will take positive and negative values as well.',
    '11. What is the difference between inline and block elements in CSS?' : `Block elements will leave a space before and after the element and it uses full width available. Eg: <div>, <h1>
    Inline elements will take only the required width. Eg: <span>, <a>`,
    '12 What is the difference between “display:none” and “visibility:hidden” in CSS?' : `“Display:none” – This will just hide the element and does not take any space of the element.
    “visibility:hidden” – This also hides the element and will take space for the element and this will affect the entire layout of the document.`,
    '13. List out the possible values for attribute – “Position” in CSS?': `Below are the list of possible values for attribute – “Position” -
    Static
    Inherit
    Fixed
    Absolute
    Relative`,
    '14. How to add comments in CSS?': 'To add simple comments use the /* and */ symbols.',
    '15. How we can create text shadow and box shadow in CSS3?': `Box shadow can be created like this –
    box-shadow: 5px 5px 2px #fffff;

    Text shadow can be created like this –
    text-shadow: 5px 5px 2px #fffff;`,
    '16. List out the properties of transition in CSS3?': `To work with transitions you can use:
    Transition-delay
    transition-property
    transition-duration
    transition-timing-function`,
    '17. What would be the difference between “width:auto” and “width:100%” in CSS?' : '“width:auto” reaches to the full width and it will subtract borders, paddings, margins etc. from the available space where as “width:100%” will force the element to be as wide as its parent element and will add additional spacing.',
    '18. What are the differences between CSS Grid and Flexbox?' : `Flexbox is a very useful layout tool, especially for smaller areas within the site. Its main features are to align items in horizontal or vertical axes.
    CSS Grid is more of a layout tool for the entire page with both horizontal and vertical axes.`,
    '19. What are variables in CSS used for?' : 'Variables are super useful for things like colors, fonts, font sizes, and certain dimensions, as you can be sure you’re always using the same ones, not 4 different versions of roughly the same color.',
    '20. What is CSS3 hsla() Function?' : ' The hsla() function define colors using the Hue-saturation-lightness-alpha model (HSLA). HSLA color values are an extension of HSL color values with an alpha channel – which specifies the opacity of the color.',
    

};

// adding an event listener for both cards (front/back) and giving both of them a toggle of the 'hidden' class. Do not use 'this' unless you change the arrow function to a es5 function.
cards.forEach(card => {
    card.addEventListener('click', () => 
    {cards.forEach(side => {
    side.classList.toggle('hidden')}) }   
    );
    });

btnNext.addEventListener('click',(e) => {
    e.preventDefault();
// this flips the card if your on the answer side and want to go to the next question  
     if (document.querySelector('.front').classList.length > 2){ 
    cards.forEach(side => {
    side.classList.toggle('hidden')}) }  
// changes the text if there is a next card
     if (answerNumber < Object.keys(questions).length  ) { 
    answerNumber++;
    textChanger () ;
    btnNext.textContent = "Next";}
// adds the 'reset' button and high-fives the user.
    if (answerNumber  == Object.keys(questions).length){

        resetBtn.classList.add('show');
        flashBackText.innerText = "That's it!";
        flashBackHead.innerText = "That's it!";
        flashFrontHead.innerText = "I'm out of questions!"
    }
// removes the 'reset' button
    else {
        resetBtn.classList.remove('show');
    }
})
// works as long as there is a previous card
btnPrev.addEventListener('click',(e) => {
if (answerNumber>1) { 
    e.preventDefault();
    answerNumber--;
    textChanger () ;
    resetBtn.classList.remove('show');
}})
// adds specific text. You might want to use Math.random if you want to randomize questions. If so - you might want to remove the numbers AND the counter string fron the 'ownAdder' element. 
 const textChanger = function (){
    flashBackText.innerText = Object.values(questions)[answerNumber];
    flashBackHead.innerText = Object.keys(questions)[answerNumber];
    flashFrontHead.innerText = Object.keys(questions)[answerNumber];
  }  ;
  
//   simple reset
resetBtn.addEventListener('click', (e) => {e.preventDefault();answerNumber = 0; textChanger();resetBtn.classList.remove('show')});


// if you choose to stay with the 'add your own question' part 

ownQuestion.addEventListener('input', (e) => questionValue = e.target.value);

ownAnswer.addEventListener('input',(e) => answerValue = e.target.value);
// button connected with both inputs, works only if both are true. I suggest leaving the 'toString' method for safety purposes.

ownAdder.addEventListener('click', () => {
    if(questionValue  && answerValue ) { 
    questions[`${(Object.keys(questions).length +1).toString()}. ${questionValue.toString()}`] = `${answerValue.toString()}` ;
    ownAnswer.value = "";
    ownQuestion.value = "";
}
else { alert("Hey, it seems you left one of the textareas blank!")}
})