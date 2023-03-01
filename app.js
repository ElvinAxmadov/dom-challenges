// Vanilla JavaScript DOM Challenges //

// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const tempDiv = document.createElement("div");
// 2. Add a class of "boxy" to that div.
tempDiv.classList.add("boxy");
tempDiv.id = "tempDivInDom";
// 3. Add two paragraphs of text to that div with the text of your choosing.
const ppgs = `
<p>This is first paragraph</p>
<p>This is second paragraph</p>
`;
tempDiv.innerHTML = ppgs;
// 4. Insert the div into the DOM just after the h1.
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", tempDiv);
// 5. Add a third paragraph to the div after it’s in the DOM.
const tempDivInDom = document.querySelector("#tempDivInDom");
tempDivInDom.insertAdjacentHTML(
  "beforeend",
  `
<p>This is a third paragraph</p>
`
);

// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const listItems = document.querySelectorAll(".list-item");
listItems[listItems.length - 1].insertAdjacentHTML(
  "beforeend",
  `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`
);

// 2. Add a paragraph after the list of items with a class of "glow."
const list = document.querySelector(".list");
const tempP = document.createElement("p");
tempP.classList.add("glow");
tempP.textContent = "Some text has been added";
list.insertAdjacentElement("afterend", tempP);
// 3. Remove a card when its button is clicked.
// * Delete card, but doesnt work when cardBtnsGlowToggle is active
//  const cardBtns = document.querySelectorAll(".card__btn");
// cardBtns.forEach((btn) => btn.addEventListener("click", () => btn.parentElement.remove()));
// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.

// navItem.forEach((elem) => {
//     elem.addEventListener("click", function () {
//         navItem.forEach(elm=>elm.classList.remove("active"));
//         this.classList.add("active");
//     });
// })

/*
 *The code adds a click event listener to each button element with class "card__btn".
 *When a button is clicked, it removes the "glow" class from the image elements of all button's parent,
 *and then adds the "glow" class to the image element that is a child of the clicked button's parent.
 *The forEach iterations are used to apply the same action to all elements in the "allBtns" array.
 */
// const allBtns = document.querySelectorAll(".card__btn");
// // *Iterates each button element
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // *Add a click event listener to clicked button element
//     // *For each button element, remove the "glow" class from its parent's image element
//     allBtns.forEach((btn) =>
//       btn.parentElement.querySelector("img").classList.remove("glow")
//     );
//     // *Add the "glow" class to the image element that is a child of the clicked button's parent element
//     this.parentElement.querySelector("img").classList.add("glow");
//   });
// });

// Replace "parent-element" with the ID or class of the parent element that will always exist

// Set up a click event listener on the parent element
document
  .querySelector(".card-container")
  .addEventListener("click", function (event) {

    this.querySelectorAll("img").forEach((image) => {
      if (image.classList.contains("glow")) {
        image.classList.remove("glow");
      }
    });
    if (event.target.classList.contains("card__btn")) {
      event.target.parentElement.querySelector("img").classList.add("glow");
    }

  });



// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
const cardBtns = document.querySelectorAll(".card__btn");

const cards = document.querySelectorAll(".card");
function handleBtnClick(e) {
  const cardId = e.target.parentElement.id;
  cards.forEach((card) => {
    if (card.id !== cardId) {
      return (card.querySelector(".card__heading").textContent =
        "Zahra Sharifova");
    }
    card.querySelector(".card__heading").textContent = "Elvin Akhmadov";
  });
}

cardBtns.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick);
});

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContainer = document.querySelector(".card-container");
const tempBtn = document.createElement("button");
tempBtn.classList.add("btn");
tempBtn.id = "moreCardsBtn";
tempBtn.textContent = "Add more cards";
cardContainer.insertAdjacentElement("afterend", tempBtn);

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).
function generateCard() {
  const currentNumberOfCards = cardContainer.children.length;
  const newCard = `<div class="card" id="card-${currentNumberOfCards + 1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${
          currentNumberOfCards + 1
        }"
          alt="Lorem Ipsum Picture">
        <h2 class="card__heading">Lorem Ipsum Title ${
          currentNumberOfCards + 1
        }</h2>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam,
          provident omnis? Corrupti illum earum enim, dolorem quas fugiat iste.</p>
        <button class="btn card__btn">Learn More</button>
      </div>`;
  cardContainer.insertAdjacentHTML("beforeend", newCard);
}

const moreCardsBtn = document.querySelector("#moreCardsBtn");
moreCardsBtn.addEventListener("click", generateCard);

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)

function generateCardFromJavaScript({ title, desc }) {
  const currentNumberOfCards = cardContainer.children.length;
  const newCard = `<div class="card" id="card-${currentNumberOfCards + 1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${
          currentNumberOfCards + 1
        }" alt="Lorem Ipsum Picture">
        <h2 class="card__heading">${title} ${currentNumberOfCards + 1}</h2>
        <p class="card__description">${desc}</p>
        <button class="btn card__btn">Learn More</button>
  </div>`;
  cardContainer.insertAdjacentHTML("beforeend", newCard);
}

generateCardFromJavaScript({
  title: "Another Title",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam, provident omnis? Corrupti illum earum enim, dolorem quas fugiat iste.",
});
generateCardFromJavaScript({
  title: "Another Title",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam, provident omnis? Corrupti illum earum enim, dolorem quas fugiat iste.",
});
generateCardFromJavaScript({
  title: "Another Title",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam, provident omnis? Corrupti illum earum enim, dolorem quas fugiat iste.",
});

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)
function handleImgClicked(e) {
  if (!e.target.classList.contains("card__image")) return;
  e.target.closest(".card").remove();
}

cardContainer.addEventListener("click", handleImgClicked);
// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.

cardContainer.insertAdjacentHTML(
  "beforebegin",
  `<button class="btn" id="changeColorBtn">Change Color Scheme</button>`
);
const colorBtn = document.querySelector("#changeColorBtn");

function getRandomColor() {
  return Math.floor(Math.random() * 360);
}

colorBtn.addEventListener("click", () => {
  const randColor = getRandomColor();
  document.documentElement.style.setProperty("--_hue", randColor);
});
