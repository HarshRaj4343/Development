// // Syntax:-

// // <event target>.addEventListener('<event-type>', function() {
// //     // Event handler code here
// // });


// function changeText(event) {
//     console.log(event); // This will log the event object to the console, which contains information about the event that occurred.
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "This is the first paragraph.";

// }

// let fpara = document.getElementById('fpara');

// // Adding an event listener to the first paragraph
// fpara.addEventListener('click', changeText);

// // fpara.removeEventListener('click', changeText); // This line removes the event listener from the first paragraph
// // changetext should be the same function name as well as the same fxn object that we used in the addEventListener method. If we use a different function name, it will not remove the event listener.

// // Phase of an event:-

// // Capturing Phase: The event starts from the root element and goes down to the target element. In this phase, the event is captured by the ancestors of the target element before reaching the target itself.

// // Target Phase: The event reaches the target element, and the event handler associated with the target element is executed.

// // Bubbling Phase: After the event has been handled by the target element, it bubbles up through the ancestors of the target element, allowing them to handle the event as well. This phase allows for event delegation and handling events on parent elements.
// // Add event listener is executed in the bubbling phase by default. If we want to execute it in the capturing phase, we can pass a third argument as true in the addEventListener method.


// // Event object - pass event object as a parameter in the event handler function. The event object contains information about the event that occurred, such as the type of event, the target element, and other properties related to the event.


// // Default Actions

// // anchor tag -> link to another page



// let anchorelement = document.getElementById('fanchor');

// anchorelement.addEventListener('click', function(event){
//     event.preventDefault(); // This line prevents the default action of the anchor tag, which is to navigate to another page.
//     anchorelement.textContent = "You clicked the link, but the default action was prevented."; // This line changes the text content of the anchor tag to indicate that the default action was prevented.
//     console.log("Default action prevented. The link will not navigate to another page.");
// });


// Avoiding too many listeners:-
// (using duplicate eventlisteners)

// let paras = document.querySelectorAll('p');

function alertPara(event) {
    if (event.target.nodeName === 'P') // Check if the clicked element is a paragraph
        alert("You clicked on paragraph " + (event.target.textContent) + ".");
    else
        alert("You mistakenly clicked on " + event.target.nodeName + ".");
}


// for (let i = 0; i < paras.length; i++) {
//     paras[i].addEventListener('click', alertPara);
// }


// Better method


// let paras = document.querySelectorAll('p');

// function alertPara(event,a) {
//     alert("You clicked on paragraph " + (a + 1) + ".");
// }


// for (let i = 0; i < paras.length; i++) {
//     paras[i].addEventListener('click', function(event) {
//         alertPara(event, i);
//     });
// }


// Another Method

let myDiv = document.getElementById('container');

myDiv.addEventListener('click', alertPara);


// wherever you click, the event.target will be the element that was clicked, and the event will bubble up to the container div, which has the event listener attached. This way, we can handle clicks on all paragraphs without adding individual event listeners to each one. 

// How to use DOMContentloaded event to dynamically add script:-

// document.addEventListener("DOMContentLoaded", function () {

//     // Create a new <script> element
//     const script = document.createElement("script");

//     // Specify the JavaScript file to load
//     script.src = "events-listeners.js";

//     // Add it to the document
//     document.body.appendChild(script);

// });

// written in html file as well as in js file. If we write it in js file, then the script will be loaded after the DOM is fully loaded. If we write it in html file, then the script will be loaded before the DOM is fully loaded. So, it is better to write it in js file.