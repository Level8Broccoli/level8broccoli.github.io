// AJAX

var xhr = new XMLHttpRequest();
var url = "https://tonyspizzafactory.herokuapp.com/api/auth";
xhr.open("POST", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var json = JSON.parse(xhr.responseText);
    console.log(json);
  }
};
xhr.setRequestHeader("Authorization", "TOKEN");
xhr.send(null);