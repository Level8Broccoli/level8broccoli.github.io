// serch for upcoming events
let slidesNow = slidesTimeless;

function getUpcomingEvents() {
  // check time
  const timeNow = new Date();

  for (let index = 0; index < slidesTimed.length; index++) {
    if (slidesTimed[index].time.getHours() === timeNow.getHours() + 1 ||
          slidesTimed[index].time.getHours() === timeNow.getHours() + 2) {
      slidesNow.push(slidesTimed[index]);
    }
  }
}