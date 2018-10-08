// Aufbau des Slides
function buildSlide(slideObject) {
  switch (slideObject.category) {
    case "full":
      outputHTML = `<div class="grid-item grid-item--bigbottom"><h1>${slideObject.titleDE} <span>${slideObject.titleEN}</span></h1></div>`;

      if (slideObject.top.img === true) {
        outputHTML += `<div class="grid-item grid-item--bigtop"><img src="img/${slideObject.top.path}" alt="${slideObject.top.alt}" width="100%" /></div>`
      }

      return {
        output: outputHTML,
        footer: false,
      };

    case "info":
      outputHTML = `<div class="grid-item grid-item--header"><h1>${slideObject.titleDE} <span>${slideObject.titleEN}</span></h1></div>`;

      outputHTML += `
        <div class="grid-item grid-item--smalltop">${slideObject.textDE}</div>
        <div class="grid-item grid-item--smallbottom english">${slideObject.textEN}</div>
      `

      return {
        output: outputHTML,
        footer: true,
      };

    case "game":
      outputHTML = `<div class="grid-item grid-item--header"><h1>`;

      if (slideObject.languageDE === true) {
        outputHTML += `Demnächst <span>${slideObject.titleDE}</span>`;
      } else {
        outputHTML += `Starting soon <span>${slideObject.titleEN}</span>`;
      }

      outputHTML += `
        </h1></div>
        <div class="grid-item grid-item--smallall">
      `;

      if (slideObject.languageDE === true) {
        outputHTML += slideObject.textDE;
      } else {
        outputHTML += slideObject.textEN;
      }

      outputHTML += `
      </div>
      <div class="grid-item grid-item--info">
      `
      if (slideObject.languageDE === true) {
        outputHTML += `<p>Spielrunde startet um ${slideObject.time.getHours()} Uhr.</p><p> Spielsprache: Deutsch.</p><p> Mit ${slideObject.moderator}.</p>`;
      } else {
        outputHTML += `<p>Game round starts from ${slideObject.time.getHours()} Uhr.</p><p> Game Language: English. </p><p>With ${slideObject.moderator}.</p>`;
      }

      return {
        output: outputHTML,
        footer: true,
      };

    case "workshop":
      outputHTML = `<div class="grid-item grid-item--header"><h1>${slideObject.titleDE}<span>${slideObject.additionalDE}</span></h1></div>`;

      outputHTML += `
        </div>
        <div class="grid-item grid-item--smallall">${slideObject.textDE}</div>
      `;

      outputHTML += `
        <div class="grid-item grid-item--info">
        <p>Workshop startet um ${slideObject.time.getHours()} Uhr.</p><p> Mit ${slideObject.moderator}.</p>
        </div>
       `;

      return {
        output: outputHTML,
        footer: true,
      };


    default:
      return false;
  }
}