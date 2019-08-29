let gridFromHTML2 = document.querySelector('.grid');
let bodyHTML = document.querySelector('body');
let headerElement = document.createElement("header");
let options;
bodyHTML.insertBefore(headerElement, gridFromHTML2);

// reset animation
gridFromHTML2.style.opacity = 1;
footerLogo.style.opacity = 1;
tl.kill();

headerElement.innerHTML = `
  <nav style="background: black; color: white; padding: 20px; border-top: 2px solid darkred; border-right: 2px solid darkred; position: absolute; bottom: 0;">Jump to Slide: <select style="display: block;margin-top: 5px;"></select>
  </nav>
`;

let selectHTML = document.querySelector('select');
let allSlides = [];
allSlides.push(...slidesTimeless, ...slidesTimed);

for (let index = 0; index < allSlides.length; index++) {
  options += `
    <option value="${index}">${allSlides[index].titleTEST}</option>
  `
}

selectHTML.innerHTML = options;
let currentOption = 0;
let output;

selectHTML.addEventListener('change', function() {
  currentOption = selectHTML[selectHTML.selectedIndex].value;
  getSlide(currentOption);
});

function getSlide(index) {
  if (index === 0) {
    footerLogo.style.opacity = 0;
  }
  output = buildSlide(allSlides[index]);
  gridFromHTML2.innerHTML = output.output;
}

// window.onload = getSlide();