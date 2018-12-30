// AJAX

var xhr = new XMLHttpRequest();
var url = "https://tonyspizzafactory.herokuapp.com/api/pizzas";
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var json = JSON.parse(xhr.responseText);
    console.log(json);
  }
};
xhr.setRequestHeader("Authorization", "TOKEN");
xhr.send(null);