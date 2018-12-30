# Feedback zur Pizza Factory

## CSS Datei separat
Ich würde mir wirklich angewöhnen, CSS-Dateien in einen separaten Ordner (./styles/ oder ./css/) zu verschieben und alle HTML-Links dementsprechend anzupassen.

## Viele Klassen und IDs
Du hast viele Klassen hinzugefügt: z.B. `img_pizza`, `img_salad` oder `img_softdrinks` und IDs: `topnav`, `navtop` und `topbar`. Das ist oft sehr verlocken, um möglichst die Kontrolle zu haben, aber macht das Unterhalten des Codes so viel komplexer (vor allem da wir mehrere HTMLs haben und vermutlich Code wiederverwenden können).

Hier würde ich versuchen jedesmal zu fragen, brauchts die Klasse/ID wirklich?

Zwei Beispiele:

- `<nav id="navtop">`: Hier können wir dieses Element im CSS nun mit `#navtop` ansprechen, aber wir können auch das Element mit `header nav` (= alle `nav` innerhalb von einem `header` Element) ansprechen, da wir `<nav>` nur einmal innerhalb von `header` verwenden. Somit kann man die ID weglassen, da `nav` genügend sematisch ist bzw. beschreibt, was das Element für eien Zweck hat.

- `<img […] class="img_salad" […] />` (im CSS: `.img_salad {}`): Ich verstehe die Überlegung, aber hier mal ein paar andere Möglichkeiten:

  - `<img […] class="salad" […]/>` -> im CSS: `ìmg.salad {}`; dass es ein Bild ist, wissen wir also auch ohne das `img_` im Klassen-Namen.

  - `<img […] class="second_element" […] />` -> im CSS: `img.second_element {}`; Ist es wichtig, dass wir wissen, dass es sich hier um Salad handelt? Wenn der Inhalt von Salad zu Dessert wechselt, müssten wir das an ziemlich vielen Orten (HTML & CSS) anpassen.

- Brauchts diese Klassen überhaupt? Du versuchst die einzelnen Bilder separat zu positionieren. Das macht Sinn, wenn du was ganz spezielles erreichen möchtest, aber hier haben wir eine gleichmässige aufteilung in ein 3-Spalten Layout. Nimm die Klassen `img_pizza`, `img_salad` und `img_softdrinks` doch mal weg, was verändert sich und wieso?


## responsive Navigation

Da fehlt sicher noch das Javascript, um das Symbol ein und auszublenden. Sowie auch die sogenannten _`_Media Queries_.
Das ist ja alles in diesem Online-Tutorial auf w3schools. Hast du das verstanden?