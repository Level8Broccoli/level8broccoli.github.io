// AJAX

var req = new XMLHttpRequest();
req.open("GET", "https://tonyspizzafactory.herokuapp.com/swagger#/auth/Authorize", false);
req.send(null);
console.log(req.responseText);