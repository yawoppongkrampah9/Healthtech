

// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");

let count = 3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here


     // const name = document.getElementById("name").value;
     // const hometown = document.getElementById("hometown").value;

     const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;


    const signaturesSection = document.querySelector(".signatures");
    signaturesSection.appendChild(newSignature);


   count++;
    const counter = document.getElementById("counter");
    counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  // Call toggleModal function to show the modal
  toggleModal(person); // This line calls the toggleModal function with the person argument

}

// Add a click event listener to the sign now button here
signNowButton.addEventListener("click", addSignature);


// TODO: Remove the click event listener that calls addSignature()
signNowButton.removeEventListener('click', addSignature);

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[1].value,
      email: petitionInputs[2].value
  };
  // TODO: Loop through all inputs
   for (let i = 0; i < petitionInputs.length; i++) {
     if (person.hometown.length < 2) {
     petitionInputs[i].classList.add('error');
     containsErrors = true;
   }
     else {
         petitionInputs[i].classList.remove('error');
       }
     }

  const email = document.getElementById('email');

     if (!email.value.includes('.com')) {
       email.classList.add('error');
       containsErrors = true;
     } else {
       email.classList.remove('error');
     }
  // TODO: Validate the value of each input

   if (!containsErrors) {
       addSignature(person);
       for (let i = 0; i < petitionInputs.length; i++) {
         petitionInputs[i].value = "";
         containsErrors = false;
       }
     }
   }

  // TODO: Call addSignature() and clear fields if no errors



signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};


const revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

reveal();

window.addEventListener('scroll', reveal);




// Function to reduce motion
const reduceMotion = () => {
  // Update animation object properties to reduce motion
  animation.transitionDuration = '0s'; // Set transition duration to 0 to remove animation
  animation.transitionTimingFunction = 'ease'; // Set transition timing function to ease

  // Loop through revealableContainers
  for (let i = 0; i < revealableContainers.length; i++) {
    // Update style of each revealableContainer
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
}

// Add event listener to the Reduce Motion button
const reduceMotionButton = document.getElementById("reduceMotionButton");
reduceMotionButton.addEventListener("click", reduceMotion);


// Function to toggle modal and display a thank you message
const toggleModal = (person) => {
    // Get modal and modal content elements
    const modal = document.querySelector('.modal');
    const modalContent = document.getElementById('thanks-modal-content');

    // Set modal display to flex
    modal.style.display = 'flex';

    // Display thank you message with person's name
    modalContent.textContent = `Thank you so much ${person.name}! We appreciate your support.`;


  modalContent.style.fontSize = '24px'; // Adjust font size
  modalContent.style.fontWeight = 'bold'; // Make the text bold
  modalContent.style.color = '#333'; // Set text color

// Animate the image
    let scaleFactor = 1;
    const modalImage = document.getElementById('modal-image');
    const scaleImage = () => {
        scaleFactor = scaleFactor === 1 ? 0.8 : 1;
        modalImage.style.transform = `scale(${scaleFactor})`;
    };
    const intervalId = setInterval(scaleImage, 500);




    // Hide modal after 3 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        modal.style.display = 'none';
    }, 3000);
};

// Function to close the modal
const closeModal = () => {
    const modal = document.getElementById('thanks-modal');
    modal.style.display = 'none';
};

// Add click event listener to the close button
const closeButton = document.getElementById('close-modal-button');
closeButton.addEventListener('click', closeModal);

function displayVideo() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "block";
}
