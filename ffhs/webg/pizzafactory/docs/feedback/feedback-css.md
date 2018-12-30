# Feedback

Hallöchen Chantale,

Hier ein paar Feedbacks zu CSS:

## Datenablage

Ich würde empfehlen, das CSS-Dokument in einem separaten Ordner abzulegen (z.B: "css/" oder "styles/"). Bei grossen Projekten hast du mehrere CSS und willst die ein bisschen separat haben von all den HTML-Dokumenten.

## Saubere Syntax

Versuche die Syntax wie folgt zu halten:

```CSS
Selektor {
  Attribut: Wert;
}
```
Vor den Attributen auch den Einzug nicht vergessen. So ist der ganze Block einfacher lesbarer und du siehst schneller, wenn ein Semikolon (;) vergessen geht.

## Selektoren

Wenn du den Selektor `.img.pizza` verwendest, beziehst du dich auf ein Element, welches die Klassen beinhaltet, also: `class="img pizza"`. Mit dem Punkt (.) beziehst du dich immer auf die Klasse.

Ich finde es nun schwierig, zum genau verstehen, welches Element du ansprechen wolltest, den es gibt keine Elemente, die weder die Klasse, noch die ID "pizza", "pizzeria" oder "softdrinks" verwenden.

So wie die jetzt sind, greifen die auf gar keine Elemente.

## Floats

Sind verführerische Werkzeuge und vielleicht würden wir es sogar hinbekommen mit denen, damit unser Layout nebeneinander platziert wird.

Es gibt aber heutzutage ein paar einfacher zu handhabende Möglichkeiten, allen voran *CSS Flexbox* und *CSS Grids*.

Mit Floats hast du auch oft das Problem, dass dann Elemente übereinander fliessen, was meistens ungewollt ist. (Und übrigens: `float: center` gibt es nicht ;-) )

Da kann ich dir auch die folgenden Webseiten empfehlen. Dienen mir immer wieder als Nachschlagewerk:

* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://css-tricks.com/snippets/css/complete-guide-grid/

Ich hab mal den Footer mit einem Grid umgesetzt:
```CSS
footer {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}
```
Kannst du versuchen mit dem oben genannten Link rauszufinden, was da genau passiert?

## Cascading

Ein wichtiges Merkmal von CSS ist, dass die meisten Werte vererbt werden (Cascade). Beim Footer willst du die Schriftgrösse von `10px`. Dann musst du es nicht für jedes Element (`#opening-hours`, `#address`, `#quote`) separat definieren.

Sondern du kannst es sogleich auf der Ebene des Elternelement (`<footer>`) definieren.

Habs auskommentiert und auf Footer-Ebene definiert.

## Navigation

Hast du das Tutorial angeschaut, dass im Aufgabenbeschrieben wurde?

* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

## Definition: `height: auto`

Das kannst du weglassen. Vertikal nimmt sich jedes Element grundsätzlich sowieso so viel Platz, wie es benötigt.

## Box-Sizing

`box-sizing: border-box` hab ich persönlich bis jetzt nicht gross verwendet, da ich mich an den alten Standard gewöhnt bin.

In 98% der Fälle kannst du auch mit dem alten Box-Modell eine Lösung finden und ich würde dir empfehlen entweder genau nachzuschauen, was die Unterschiede sind, oder sonst vorerst beim alten Modell bleiben (also alle `box-sizing` Definitionen wegzulassen).