let programmQueue = [];
let counter = -1;
let slideCurrent;

let gridFromHTML = document.querySelector('.grid');
let outputHTML;
const footerLogo = document.querySelector('footer');

let tl = new TimelineMax({
  onComplete: executiveFunction
});

// für alle kommenden Runden der nächsten 2 Stunden zum Präsentation hinzu
function getUpcomingEvents() {

  const timeNow = new Date();

  for (let index = 0; index < slidesTimed.length; index++) {
    let game = slidesTimed[index];

    if (game.time.getHours() === timeNow.getHours() + 1 ||
      game.time.getHours() === timeNow.getHours() + 2) {

      if (game.full !== true) {
        programmQueue.push(game);
      }

    }
  }
}

// Zufällige Wiedergabe der Slides
function shuffleEvents(eventArray) {
  eventArray.sort(() => 0.5 - Math.random());
}

// Ein- und Ausblenden der Slides
function slideTransition() {
  tl.to(gridFromHTML, 2, {
    opacity: 1
  });

  tl.to(gridFromHTML, 2, {
    opacity: 0
  }, "+=200");

}

// Starte Präsentation
function startShow() {

  slideCurrent = buildSlide(programmQueue[counter]);

  if (slideCurrent === false) {
    console.error("Nicht definierter Slide-Typ!");
  }

  gridFromHTML.innerHTML = slideCurrent.output;
  slideTransition();
  counter--;
}

function executiveFunction() {

  if (counter < 0) {

    // Reset der Slides
    programmQueue = slidesTimeless.slice();
    getUpcomingEvents();
    shuffleEvents(programmQueue);
    counter = programmQueue.length - 1;
  }

  startShow();
}

window.onload = executiveFunction();