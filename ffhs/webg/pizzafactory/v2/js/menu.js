// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

function menuOnAndOff() {
  var x = document.getElementById('topnav');
  if (x.className === 'responsive') {
    x.classList.remove('responsive');
  } else {
    x.className = 'responsive';
  }
}