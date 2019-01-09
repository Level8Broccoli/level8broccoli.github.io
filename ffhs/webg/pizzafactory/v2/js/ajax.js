const email = "webg@ffhs.ch";
const password = "WebG_HS2017@FFHS";
let token = "";
let pizzas = {};
let salads = {};
let softdrinks = {};
let feedback = {};
let feedbackId = 0;

let credentials = JSON.stringify({
  "email": email,
  "password": password
});

function postAuth(url, callback) {
  let req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400)
      callback(req.responseText);
    else {
      callback(null, "Entschuldige, es ist ein Fehler aufgetreten. Bitte informiere den Administrator.");
    }
  });
  req.send(credentials);
}

function get(url, callback) {
  let req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.setRequestHeader("Authorization", token);
  req.addEventListener("load", function () {
    if (req.status < 400)
      callback(req.responseText);
    else {
      callback(null, "Entschuldige, es ist ein Fehler aufgetreten. Bitte informiere den Administrator.");
    }
  });
  req.send(null);
}

// get token

postAuth("https://tonyspizzafactory.herokuapp.com/api/auth", function (response, error) {
  if (response != null) {
    token = JSON.parse(response).token;
    requestAll();
  } else {
    message(error);
  }
}, credentials);

function requestAll() {
// Somit werden die Get-Request erst gemacht, wenn der Token von der Authentifizierung zurückgekommen ist (Siehe function postAuth)
// Die Get-Request sind einzelne Funktionen, damit man, falls benötigt, die einzelnen Request nochmals einzeln ansprechen kann (wird hier bei getFeedback no verwendet)

  getPizzas();
  getSalads();
  getSoftdrinks();
  getFeedback();
}

function getPizzas() {
  get("https://tonyspizzafactory.herokuapp.com/api/pizzas", function (response, error) {
    if (response != null) {
      pizzas = JSON.parse(response);

      let pizzaOutput = document.getElementById("pizzas");
      if (pizzaOutput != null) {
        pizzas.forEach(pizza => {

          // Lösung #1

          /*
          let liElement = document.createElement("li");

          let imgElement = document.createElement("img");
              imgElement.src = pizza.imageUrl;
              imgElement.alt = pizza.name;
              imgElement.width = "300";

          let divElement = document.createElement("div");

          let h2Element = document.createElement("h2");
          let h2TextElement = document.createTextNode(pizza.name);
              h2Element.appendChild(h2TextElement);

          let prizeElement = document.createElement("p");
              prizeElement.classList.add("price");
          let prizeTextElement = document.createTextNode(pizza.prize);
              prizeElement.appendChild(prizeTextElement);

          let cartLinkElement = document.createElement("a");
              cartLinkElement.href = "#";

          let cartImgElement = document.createElement("img");
              cartImgElement.src = "img/trolley.svg";
              cartImgElement.alt = "Cart";
              cartImgElement.width = "50";

          cartLinkElement.appendChild(cartImgElement);

          let ingredientsElement = document.createElement("small");
          let ingredients = pizza.ingredients.join(", ");
          let ingredientsTextElement = document.createTextNode(ingredients)
              ingredientsElement.appendChild(ingredientsTextElement);

          divElement.appendChild(h2Element);
          divElement.appendChild(prizeElement);
          divElement.appendChild(cartLinkElement);

          liElement.appendChild(imgElement);
          liElement.appendChild(divElement);
          liElement.appendChild(ingredientsElement);

          pizzaOutput.appendChild(liElement);
          */

          // Lösung #2

          pizzaOutput.innerHTML += `
            <li>
              <img src="${pizza.imageUrl}" alt="${pizza.name}" width="300">
              <div>
                <h2>${pizza.name}</h2>
                <p class="price">${pizza.prize}</p>
                <a href="#" onclick="order(${pizza.id}, 'pizza', '${pizza.name}')"><img src="img/trolley.svg" alt="Cart" width="50"></a>
              </div>
              <small>${pizza.ingredients.join(", ")}</small>
            </li>`;

        });
      }
    } else {
      message(error);
    }
  });
}

function getSalads() {

  get("https://tonyspizzafactory.herokuapp.com/api/salads", function (response, error) {
    if (response != null) {
      salads = JSON.parse(response);

      // Lösung #1

      let saladOutput = document.getElementById("salads");
      if (saladOutput != null) {
        salads.forEach(salad => {

     /*     let liElement = document.createElement("li");

          let imgElement = document.createElement("img");
          imgElement.src = salad.imageUrl;
          imgElement.alt = salad.name;
          imgElement.width = "300";

          let h2Element = document.createElement("h2")
          let h2TextElement = document.createTextNode(salad.name);
          h2Element.appendChild(h2TextElement);

          let ingredientsElement = document.createElement("small");
          let ingredients = salad.ingredients.join(", ");
          let ingredientsTextElement = document.createTextNode(ingredients);
          ingredientsElement.appendChild(ingredientsTextElement);

          let divElement = document.createElement("div");

          let selectElement = document.createElement("select");
          selectElement.name = "dressing";
          let optionElement = document.createElement("option");
          optionElement.value = "Italian dressing";
          let optionTextElement = document.createTextNode("Italian dressing");
          optionElement.appendChild(optionTextElement);
          selectElement.appendChild(optionElement);

          let prizeElement = document.createElement("p");
          prizeElement.classList.add("price");
          let prizeTextElement = document.createTextNode(salad.prize);
          prizeElement.appendChild(prizeTextElement);
          let cartLinkElement = document.createElement("a");
          cartLinkElement.href = "#";
          cartLinkElement.onclick = function () {
            order(salad.id, 'salad', salad.name)
          };

          let cartImgElement = document.createElement("img");
          cartImgElement.src = "img/trolley.svg";
          cartImgElement.alt = "Cart";
          cartImgElement.width = "50";
          cartLinkElement.appendChild(cartImgElement);

          divElement.appendChild(selectElement);
          selectElement.appendChild(optionElement)
          divElement.appendChild(prizeElement);
          divElement.appendChild(cartLinkElement);

          liElement.appendChild(imgElement);
          liElement.appendChild(h2Element);
          liElement.appendChild(ingredientsElement);
          liElement.appendChild(divElement)

          saladOutput.appendChild(liElement);
*/
          // Lösung #2

          saladOutput.innerHTML += `
             <li>
                 <img src="${salad.imageUrl}" alt="${salad.name}" width="300">
                    <h2>${salad.name}</h2>
                    <small>${salad.ingredients.join(", ")}</small>
                    <div>
                        <select name="dressing">
                            <option value="Italian dressing">Italian dressing</option>
                        </select>
                        <p class="price">${salad.prize}</p>
                        <a href="#" onclick="order(${salad.id}, 'salad', '${salad.name}')"><img src="img/trolley.svg" alt="Cart" width="50" ></a>
                    </div>
              </li>`;

        });
      }
    } else {
      message(error);
    }
  });
}

function getSoftdrinks() {

  get("https://tonyspizzafactory.herokuapp.com/api/softdrinks", function (response, error) {
    if (response != null) {
      softdrinks = JSON.parse(response);

      let softdrinkOutput = document.getElementById("softdrinks");
      if (softdrinkOutput != null) {
        softdrinks.forEach(softdrink => {

          // Lösung #1

          /*
                  let liElement = document.createElement("li");

                  let imgElement = document.createElement("img");
                  imgElement.src = softdrink.imageUrl;
                  imgElement.alt = softdrink.name;
                  imgElement.width = "300";

                  let h2Element = document.createElement("h2");
                  let h2TextElement = document.createTextNode(softdrink.name);
                  h2Element.appendChild(h2TextElement);

                  let divElement = document.createElement("div");

                  let selectElement = document.createElement("select");
                  let optionElement = document.createElement("option")
                  optionElement.value = softdrink.volume;
                  let optionTextElement = document.createTextNode(softdrink.volume);
                  optionElement.appendChild(optionTextElement);
                  selectElement.appendChild(optionElement);

                  let prizeElement = document.createElement("p");
                  prizeElement.classList.add("price");
                  let prizeTextElement = document.createTextNode(softdrink.prize);
                  prizeElement.appendChild(prizeTextElement);
                  let cartLinkElement = document.createElement("a");
                  cartLinkElement.href = "#";
                  cartLinkElement.onclick = function() {order(softdrink.id, 'softdrink', softdrink.name)};

                  let cartImgElement = document.createElement("img");
                  cartImgElement.src = "img/trolley.svg";
                  cartImgElement.alt = "Cart";
                  cartImgElement.width = "50";
                  cartLinkElement.appendChild(cartImgElement);

                  divElement.appendChild(selectElement);
                  selectElement.appendChild(optionElement);
                  divElement.appendChild(prizeElement);
                  divElement.appendChild(cartLinkElement);

                  liElement.appendChild(imgElement);
                  liElement.appendChild(h2Element);
                  liElement.appendChild(divElement);

                  softdrinkOutput.appendChild(liElement);
          */

          // Lösung #2

          softdrinkOutput.innerHTML += `
            <li>

                <img src="${softdrink.imageUrl}" alt="${softdrink.name}" width="300">
                    <h2>${softdrink.name}</h2>
                    <div>
                        <select name=${softdrink.volume}>
                            <option value=${softdrink.volume}>${softdrink.volume}</option>
                        </select>
                        <p class="price">${softdrink.prize}</p>
                        <a href="#" onclick="order(${softdrink.id}, 'softdrink', '${softdrink.name}')"><img src="img/trolley.svg" alt="Cart" width="50" /></a>
                    </div>
              </li>`;
        });
      }
    } else {
      message(error);
    }
  });
}

function getFeedback(callback) {
  get("https://tonyspizzafactory.herokuapp.com/api/feedback", function (response, error) {
    if (response != null) {
      feedback = JSON.parse(response);
      feedback.forEach(feedback => {
        if (feedback.id > feedbackId) {
          feedbackId = feedback.id;
        }
      });

      if (callback) {
        callback();
      }
    } else {
      message(error);
    }
  });
}

// messages
function message(messageText) {
  let messageOutput = document.getElementById("message");
  messageOutput.innerHTML = messageText;

  setTimeout(function () {
    messageOutput.innerHTML = "";
  }, 5000);
}

// post orders
function post(url, callback, body) {
  let req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader("Authorization", token);
  req.addEventListener("load", function () {
    if (req.status < 400)
      callback(req.responseText);
    else {
      callback(null, "Entschuldige, es ist ein Fehler aufgetreten. Bitte informiere den Administrator.");
    }
  });
  req.send(body);
}

function order(id, type, name) {
  let orderObject = JSON.stringify({
    "id": id,
    "type": type,
    "name": name
  });

  post("https://tonyspizzafactory.herokuapp.com/api/orders", function (response, error) {
    if (response != null) {
      message(`Vielen Dank für die Bestellung <strong>${name}</strong>.`);
    } else {
      message(error);
    }
  }, orderObject)
};

function postFeedback() {

  // JavaScript speichert die höchste, bestehende ID (siehe Funktion getFeedback). Hier nehmen wir einfach die nächst-höhere
  let id = feedbackId++;

  let pizzaRating = "";
  if (document.querySelector("#choiceawesome").checked) {
    pizzaRating = "awesome";
  } else if (document.querySelector("#choicegood").checked) {
    pizzaRating = "good";
  } else if (document.querySelector("#choiceokay1").checked) {
    pizzaRating = "okay";
  } else if (document.querySelector("#choicepoor").checked) {
    pizzaRating = "poor";
  }

  let prizeRating = "";
  if (document.querySelector("#choicefair").checked) {
    prizeRating = "fair";
  } else if (document.querySelector("#choiceokay2").checked) {
    prizeRating = "okay";
  } else if (document.querySelector("#choiceexpensive").checked) {
    prizeRating = "expensive";
  }

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let feedback = document.querySelector("#feedback").value;

  let feedbackObject = JSON.stringify({
    "id": id,
    "pizzaRating": pizzaRating,
    "prizeRating": prizeRating,
    "name": name,
    "email": email,
    "feedback": feedback
  });

  post("https://tonyspizzafactory.herokuapp.com/api/feedback", function (response, error) {
    if (response != null) {
      message("Vielen Dank für Ihr Feedback.");
      getFeedback(printStatistic);
    } else {
      message(error);
    }
  }, feedbackObject);
}

const submitButton = document.querySelector("#submit");
if (submitButton != null) {
  submitButton.addEventListener("click", function (event) {

    event.preventDefault();
    postFeedback();
  })
}

// separate Ausgabe der Statistik. Somit können wir die Feedbacks zwar schon früher abholen, aber wir wollen sie erst ausgeben, wenn der User sein Feedback eingegeben hat

function printStatistic() {
  let statisticOuput = document.getElementById("statistic");
  if (statisticOuput != null) {

    // Ausserhalb des Loops Counter einrichten
    let likeAwesome = 0;
    let likeGood = 0;
    let likeOkay = 0;
    let likePoor = 0;
    let prizeFair = 0;
    let prizeOkay = 0;
    let prizeExpensive = 0;

    feedback.forEach(feedback => {
      // Mit Switch-Case durch jedes Feedback gehen und die Optionen abfragen und zählen

      switch (feedback.pizzaRating) {
        case "awesome":
          likeAwesome++;
          break;
        case "good":
          likeGood++;
          break;
        case "okay":
          likeOkay++;
          break;
        case "poor":
          likePoor++;
          break;
        default:
          console.log("Fehler in Feedback " + feedback.id + ". Like-Feedback: " + feedback.pizzaRating);
          break;
      }

      switch (feedback.prizeRating) {
        case "fair":
          prizeFair++;
          break;
        case "okay":
          prizeOkay++;
          break;
        case "expensive":
          prizeExpensive++;
          break;
        default:
          console.log("Fehler in Feedback" + feedback.id + ". Preis-Feedback: " + feedback.prizeRating);
          break;
      }
    });

    // Ausgabe als 2 Tabellen

    statisticOuput.innerHTML = `
    <table id="statistic-like">
    <tr>
      <th>Statistic of Likes</th>
      <th>Number of Feedbacks</th>
    </tr>
    <tr>
      <td>Awesome</td>
      <td>${likeAwesome}</td>
    </tr>
    <tr>
      <td>Good</td>
      <td>${likeGood}</td>
    </tr>
    <tr>
      <td>Okay</td>
      <td>${likeOkay}</td>
    </tr>
    <tr>
      <td>Poor</td>
      <td>${likePoor}</td>
    </tr>
  </table>

  <table id="statistic-prize">
    <tr>
      <th>Statistic of Prize</th>
      <th>Number of Feedbacks</th>
    </tr>
    <tr>
      <td>Fair</td>
      <td>${prizeFair}</td>
    </tr>
    <tr>
      <td>Okay</td>
      <td>${prizeOkay}</td>
    </tr>
    <tr>
      <td>Expensive</td>
      <td>${prizeExpensive}</td>
    </tr>
  </table>
    `;
  }
}