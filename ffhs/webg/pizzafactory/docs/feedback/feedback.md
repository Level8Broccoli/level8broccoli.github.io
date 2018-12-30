# Feedback

Hey Chantale!
Hast ja recht Gas gegeben. Ich hab mir das angeguckt und gedacht, ich nutze gleich das Repo, um dir Feedback zu geben.

Ich versuche möglichst ausführlich zu sein, in der Hoffnung, dass es möglichst verständlich ist. Aber ich kann mir gut vorstellen, dass nicht alle meiner Erklärungen sofort einläuchtend sind, deshalb einfach ungeniert nachfragen.

Bitte lass dich nicht entmutigen, nur weil ich hier versucht habe einen Roman zu schreiben. In HTML gibt es 500 Wege, wie man etwas lösen kann und 400 davon sind nicht empfehlenswert. Ich zeige dir hier, wie ich es machen würde.

## Generelles über Tabellen-Layouts

Du hast ja im Mail erwähnt, dass du nicht ganz sicher warst wegen dem Layout und die Anordnung mit Tabellen erstellt hast. Da hatte dein Bauchgefühl recht, es ist nicht ganz die optimalste Weise, dies umzusetzen.

Ich finde aber auch, dass der Aufgabenbeschrieb da nicht ganz klar war. Es steht da einfach «Entwickeln Sie das HTML Grundgerüst ohne CSS anhand der Wireframes.» Was damit gemeint ist, dass wir später noch CSS dazuschreiben werden und CSS ist verantwortlich für Layout, Anordnung, Positionierung etc.

Kurze Ausschweifung: Tabellen-Layouts wie von dir umgesetzt waren früher sehr verbreitet, da CSS noch nicht vorhanden oder noch nicht so mächtig war – war also eigentlich gar nicht so falsch. Das Problem mit Tabellen-Layouts ist unter anderen, dass der Unterhalt des Codes schnell unübersichtlich wirde und dass das ganze Konstrukt sehr starr ist.

Weiter ist es immer wichtiger, dass eine Webseite _responsive_ ist. Dass heisst, dass die Webseite sich an das Ausgabegerät anpasst. Das wird mit Tabellen sehr anstrengend bis fast nicht möglich sein.

#### Fazit

HTML ist dazu da, damit man die Struktur beschreibt. Das wird dann noch nicht so aussehen, wie auf dem Wireframe, aber das muss es auch noch nicht. Ich bin ziemlich sicher, dass dies nach der PVA 2 der Auftrag sein wird.

## Spaghetti-Code

Unser Endprodukt am Ende des ersten Semesters wird aus HTML (Struktur), CSS (Aussehen) und vermutlich JS (Interaktion) bestehen. Wenn man ganz sauber arbeiten möchte, versucht man die Einzelteile so gut wie möglich zu trennen, damit es Durcheinander gibt. Man sagt dem eben auch *Spaghetti-Code*.

Beispiel aus der index.html
```HTML
<body style="font-family:Comic Sans MS;">
```

Mit dem `style`-Attribut hast du sogenannten Inline-Style (a.k.a. Spaghetti-Code) verwendet: Dies sind CSS-Definitionen und sollen wenn möglich in einer externen CSS-Datei definiert werden, statt direkt im HTML-Tag.

Da CSS wie oben erwähnt erst im nächsten Schritt kommt, würde ich empfehlen, dass wir einfach konsequent alle Styles fürs erste weglassen.

## Öffnende, schliessende und leere Tags

Es gibt in HTML zwei Arten von Tags:

Die meisten Tags haben ein **öffnendes und schliessendes** Tag. Zum Beispiel Paragraphen-Tags oder Div-Tags:

```HTML
<p>Links steht das öffenende Tag, rechts folgt das schliessende Tag</p>

<div Attribut="Wert">Ein Div ist ein Block-Element, das oft verwendet wird, um Inhalt zu strukturieren</div>
```

Einige Tags sind sogenannte **leere** Tags. Zum Beispiel der weiche Umbruch:

```HTML
<p>Dieser Text verläuft<br/>
über 2 Zeilen</p>
```

So, entschuldige, falls das für dich schon klar war.
Auf was ich hinaus will: Siehst du oben beim `br`-Tag, dass ich nach dem `br` noch ein `/` eingefügt habe? Das ist keine Pflicht und der Code funktioniert auch einwandfrei ohne diese `/`. Diese werden aber bei leeren Tags empfohlen, um die Lesbarkeit für Menschen zu verbessern.

Ob wir nun mit oder ohne `/` arbeiten, richte ich mich gerne an dir. Wichtig ist einfach, dass man dies innerhalb eines Projektes gleich handhabt.

Wie möchtest du das gerne durchsetzen?

## Bilder vs. Links

Bilder und (Hyper-)Links sind zwei verschiedene Elemente, die auf unterschiedliche Weise geschrieben werden. Aufgrund des Codes habe ich das Gefühl, dass da bei dir noch eine gewisse Unsicherheit besteht.

### Bilder: &#60;img&#62;

* Bilder werden über einen `img`-Tag eingebunden. (meistens; gibt noch andere Möglichkeiten)
* Bilder sind insichselber-abschliessende, leere (siehe oben) Tags
* Bilder werden geladen über das Attribut `src`
* Bilder sollten einen alternativen Text haben, definiert über das Attribut `alt` (nicht `art` ;-) )
* Ich hab mal gehört, dass man eigentlich bei Bildern auch angeben soll, wie gross diese sind (in Pixel). Aber ich bin mir da nicht ganz sicher, wie strikt man das umsetzen soll, schliesslich sollen die Bilder ja oft eher relativ zur Bildschirmgrösse sein (auf Handys kleiner als auf dem Desktop)

Beispiel:
```HTML
<img src="img/bild.png" alt="Alternatier Text, falls das Bild nicht geladen wird" height="300" width="550" />
```

Du hast die Bilder nun jeweils als relativen Pfad definiert. Dass heisst aber, dass die Bilder im selben Ordner sein müssten, wie die HTMLs.

Ich würde vorschlagen, wir erstellen einen Bilder-Ordner (z.B. _img/_) und laden dort ein paar Beispiel-Bilder von https://www.photosforclass.com/ rein, wie vorgeschlagen im Aufgabenbeschreib.

### Links: &#60;a&#62;

* Links zeigen über ein `a`-Tag (a steht für _Anker_) auf ein Ziel (das kann eine externe Seite sein, kann aber auch ein Bereich innerhalb derselben Seite sein)
* Links haben ein öffnendes und ein schliessendes Tag und _umarmen_ den Bereich, der als Link geklickt werden kann (können Text, Bilder oder vieles mehr sein)
* Links zeigen ihr Ziel über das Attribut `href`

Beispiel:
```HTML
<a href="salad.html">Klick mich!</a>
```

#### Fazit

Ich glaub beim folgenden Code wolltest du ein Bild als Link verwenden?

```HTML
<a href="Pizza.html" src="Pizza.gif" art="">
```

Das würdest du so lösen, dass dein Link (`a`) dein Bild (`img`) _umarmt_:

```HTML
<a href="pizza.html">
	<img src="pizza.gif" alt="Pizza" />
</a>
```

## Dateinamen im Internet

Um möglichst Problemen vorzugreifen, würde ich Dateien (HTML, Bilder, Ordner etc.) ohne Grossbuchstaben, ohne Umlaute und ohne Leerzeichen anschreiben.

* Pizza.html => pizza.html
* SoftDrinks.html => softdrinks.html oder soft-drinks.html

## Formulare

Alle Formular-Felder, die zusammengehören, sollten innerhalb des `form`-Tags stehen:

Zum Beispiel:
```HTML
<form action="zielseite" method="methode">
	<label>Label
		<input type="text" name="name">
	</label>
		// und so weiter und so fort
	<input type="submit" value="Send">
</form>
```

### Radio-Buttons

Damit diese funktionieren, musst du noch anzeigen, welche Radio-Buttons zusammen gehören über das Attribut `name`.

Zum Beispiel:
```HTML
<input type="radio" name="quality" value="good" id="choicegood">
	<label for="choicegood">Good</label>

<input type="radio" name="quality" value="poor" id="choicepoor">
	<label for="choicepoor">Poor</label>
```

## Rückfragen

Bei _Pizza.html_, _Salad.html_ und _SoftDrinks.html_ hast du Bootstrap und JQuery eingebunden. Schlussendlich machen wir unsere eigenes Layout, oder?

Hast du diese einfach für die Einkaufswagen-Symbole verwendet? Wenn du möchtest, kann ich dir zeigen, wie wir das selber machen können.

## Flüchtigkeitsfehler

### Feedbacks.html

Im `input`-Tag hast du zweimal das `style`-Attribut verwendet und dort _"Text"_ als Wert eingegeben. Ich gehe davon aus, dass du statt `style` dort `type` verwenden wolltest?

## Beispiel

Ich habe mal die index.html umgeschrieben und mit möglichst vielen Kommentaren versehen, um zu erklären was und weshalb ich das gecodet habe.

Mir ist sehr wichtig, dass du verstehst was ich gemacht habe, also schick mir ungeniert 100 Fragen zu meinem Vorschlag, wenn dir das hilft.