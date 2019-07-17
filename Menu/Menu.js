/* This is the data we will be using, study it but don't change anything, yet. */

<<<<<<< HEAD
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
=======
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

/*
class Button{
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', () => { this.toggleMenu() });
  }
}
*/

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu')[0];
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton[0].addEventListener('click', (element) => { toggleMenu() });

>>>>>>> f0f50d0bbc1e810040672067096138dd0223ab90
