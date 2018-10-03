// timeless

const slidesTimeless = [{
    titleTEST: "Herzlich willkommen!",
    titleDE: "Herzlich willkommen!",
    titleEN: "Welcome!",
    top: {
      img: true,
      path: "logo.svg",
      alt: "Logo",
    },
    category: "full",
  },
  {
    titleTEST: "Bleib in Kontakt",
    titleDE: "Bleib in Kontakt",
    titleEN: "Stay in touch",
    textDE: `<p>Nach dem Rollenspieltag ist vor dem Rollenspieltag. Fülle den Feedback-Bogen aus damit wir dich über weitere Events informieren können und trete unserem Chat bei: <em>chat.gildedernacht.ch</em>.</p>`,
    textEN: `<p>Today has not to be the end. If you fill out our feedback form we can inform you in the future about role-play events. We also encourage you to join our chat at <em>chat.gildedernacht.ch</em>.</p>`,
    category: "info",
  }
]

// timed

const slidesTimed = [{
    titleTEST: "Star Wars, 13 Uhr",
    titleDE: "Star Wars",
    textDE: `<p>Regelwerke von Fantasy Flight Games:</p><ul>
      <li>Am Rande des Imperiums</li>
      <li>Zeitalter der Rebellion</li>
      <li>Macht und Schicksal</li></ul>`,
    moderator: "Samuel",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "Star Wars, 17 Uhr",
    titleDE: "Star Wars",
    textDE: `<p>Regelwerke von Fantasy Flight Games:</p><ul>
      <li>Am Rande des Imperiums</li>
      <li>Zeitalter der Rebellion</li>
      <li>Macht und Schicksal</li></ul>`,
    moderator: "Samuel",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 17),
  },
  {
    titleTEST: "Shadowrun, 13 Uhr",
    titleDE: "Shadowrun",
    textDE: `<p>Shadowrun spielt einer dystopischen, nahen Zukunft, auf unserer Erde mit Mega-Corporations, Cyberpunk und Magie.</p>`,
    moderator: "Adrian",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "Shadowrun, 19 Uhr",
    titleDE: "Shadowrun",
    textDE: `<p>Shadowrun spielt einer dystopischen, nahen Zukunft, auf unserer Erde mit Mega-Corporations, Cyberpunk und Magie.</p>`,
    moderator: "Adrian",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "Turbo Fate, 15 Uhr",
    titleDE: "Turbo Fate",
    textDE: `<p>Turbo-Fate ist die gekürzte Version von Fate Core. Fate ist ein «Universal» Rollenspiel.</p><p> «Universal» bedeutet in diesem Zusammenhang das die Regelmechaniken nicht für eine bestimmte Spielwelt entworfen wurden, sondern darauf ausgelegt sind möglichst viele Welten und Hintergründe zu unterstützen.</p><p>Nur für Frauen.</p>`,
    moderator: "Manuela",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 15),
  },
  {
    titleTEST: "Arcane Codex, 19 Uhr",
    titleDE: "Arcane Codex",
    textDE: `<p>Einst forderte ein Sterblicher, Andeimos der Ketzer, die Götter heraus. Sie bannten ihn auf ewig in tiefe Schwärze und Hoffnungslosigkeit. Um die Sterblichen von der Götterherrschaft zu befreien, schloß Andeimos einen Pakt mit dem Abyss und schrieb ein Buch, vor dem selbst die Götter erzitterten: den Arcane Codex. Mit der Macht des Codex erschuf er versiegelte Tore, um die Dämonen als befreiende Flut über Kreijor hereinbrechen zu lassen. Andeimos wurde vernichtet, doch die Macht des Arcane Codex blieb ungebrochen.</p>`,
    moderator: "Manuela",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "D&D 5E, 13 Uhr",
    titleDE: "Dungeons & Dragons",
    textDE: `<p>Dungeon & Dragons 5te Edition: Eines der ersten und damit zugleich ältesten Rollenspiele, in moderner, leicht zugänglicher Fassung.</p>`,
    moderator: "Daniel",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "D&D 5E, 15 Uhr",
    titleDE: "Dungeons & Dragons",
    textDE: `<p>Dungeon & Dragons 5te Edition: Eines der ersten und damit zugleich ältesten Rollenspiele, in moderner, leicht zugänglicher Fassung.</p>`,
    moderator: "Daniel",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 15),
  },
  {
    titleTEST: "D&D 5E, 17 Uhr, EN",
    titleEN: "Dungeons & Dragons",
    textEN: `<p>Dungeon & Dragons 5th Edition</p>`,
    moderator: "Daniel",
    languageDE: false,
    category: "game",
    time: new Date(2018, 9, 6, 17),
  },
  {
    titleTEST: "D&D 5E, 13 Uhr, Frauenrunde",
    titleDE: "Dungeons & Dragons",
    textDE: `<p>Dungeon & Dragons 5te Edition: Eines der ersten und damit zugleich ältesten Rollenspiele, in moderner, leicht zugänglicher Fassung.</p><p>Nur für Frauen.</p>`,
    moderator: "Stefanie",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "Fiasco, 15 Uhr",
    titleDE: "Fiasco",
    textDE: `<p>Fiasco ist ein Spiel, das von Filmen wie Blood Simple oder Fargo inspiriert wurde. Ihr werdet während der Spielsitzung eine haarsträubende Ausgangssituation erschaffen und sie bis an ihr katastrophales Ende durchspielen – zu einer Geschichte, die aus einer komisch-sinistren Kombination aus Gier, Lust und Panik entsteht. Es ist so, als würdet ihr euren eigenen Coen-Brüder-Film drehen – und das Spiel dauert nicht mal viel länger als so ein Film!</p>`,
    moderator: "Richard",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 15),
  },
  {
    titleTEST: "The Quiet Year, 19 Uhr",
    titleDE: "The Quiet Year",
    textDE: `<p>The Quiet Year: For a long time, we were at war with The Jackals. But now, we’ve driven them off, and we have this – a year of relative peace. One quiet year, with which to build our community up and learn once again how to work together. Come Winter, the Frost Shepherds will arrive and we might not survive beyond that. But we don’t know about that yet. What we know is that right now, in this moment, there is an opportunity to build something.</p>`,
    moderator: "Richard",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "Pathfinder, 13 Uhr",
    titleDE: "Pathfinder",
    textDE: `<p>Die jungen Helden der Siedlung Kassen brechen auf zu ihrer Initiationszeremonie, einer alten Tradition, bei welcher es ein Stück der Ewigen Flamme zu bergen gilt, die in der Gruft des Gründers des Ortes brennt. Was sie jedoch vorfinden ist eine Begräbnisstätte voller Leichen von Dorfbewohnern sowie belebten Skeletten. Die Helden müssen den Fallen und Gefahren in der Krypta der Ewigen Flamme entgegentreten, den Ursprung der Verderbtheit finden.</p>`,
    moderator: "Kevin",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "Cthulhu, 19 Uhr",
    titleDE: "Call of Cthulhu",
    textDE: `<p>Call of Cthulhu ist ein auf dem von H. P. Lovecraft geschaffenen Cthulhu-Mythos basierendes Rollenspiel. Es ist der erste erfolgreiche Versuch, nach dem Fantasy-Genre auch Horror in eine für das Rollenspiel geeignete Spielform zu bringen. Mit etwas Glück überlebt euer Charakter auch den Abend, jedoch wird er nie mehr derselbe sein. Kann man da noch von Glück reden.</p>`,
    moderator: "Kevin",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "Workshop Spieler Neulinge, 15 Uhr",
    titleDE: "Workshop",
    additionalDE: "Spieler Neulinge",
    textDE: `<p>Hast du noch nie ein Rollenspiel gespielt und würdest gerne mehr erfahren, bevor du dich ins Abenteuer stürtzt?</p><p>Oder hast du doch schon die eine oder andere Spielrunde hinter dir und möchtest gerne über den Tellerrand blicken, was es sonst noch gibt?</p><p>So oder so lade ich dich herzlich zu einer gemütlichen Plauderrunde ein, in der deine Fragen beantwortet werden. Nimm Platz und erfahre, wie du deine Rollenspiel-Erlebnisse noch angenehmer, unterhaltsamer und dramatischer mitgestalten kannst.</p>`,
    moderator: "Oliver",
    languageDE: true,
    category: "workshop",
    time: new Date(2018, 9, 6, 15),
  },
  {
    titleTEST: "Workshop Spielleiter Neulinge, 17 Uhr",
    titleDE: "Workshop",
    additionalDE: "Spielleiter Neulinge",
    textDE: `<p>Du liebäugelst mit der Idee selber einmal Spielleiter zu sein? Dir gehen dabei Fragen wie folgende durch Kopf:</p><p><ul><li>Was sind meine Aufgaben als Spielleiter?</li><li>Braucht es überhaupt ein Spielleiter?</li><li>Was machen andere Spielleiter für Erfahrungen?</li><li>Was gibt es für Hilfsmittel?</li></ul></p><p>Wir möchten auf diese Fragen beim Workshop gemeinsam antworten finden. Und falls die Zeit dazu vorhanden ist, auch ein Spiel beginnen in welchem wir alle Spielleiter sind.</p>`,
    moderator: "Thomas",
    languageDE: true,
    category: "workshop",
    time: new Date(2018, 9, 6, 17),
  },
  {
    titleTEST: "Apocalypse World, 13 Uhr, EN",
    titleEN: "Apocalypse World",
    textEN: `<p>Apocalypse World => apocalypse-world.com</p>`,
    moderator: "Willem",
    languageDE: false,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
  {
    titleTEST: "Microscope, 19 Uhr, EN",
    titleEN: "Microscope",
    textEN: `<p>You have vast power to create... and to destroy. Build beautiful, tranquil jewels of civilization and then consume them with nuclear fire. Zoom out to watch the majestic tide of history wash across empires, then zoom in and explore the lives of the people who endured it.</p>`,
    moderator: "Willem",
    languageDE: false,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "Ahbaron, 19 Uhr",
    titleDE: "Ahbaron",
    textDE: `<h3>Das antike Griechenland</h3><p>Ahbaron ist eine systemunabhängige Welt für Fantasy Rollenspiele. Ein Setting, das zwar auf der Geschichte unserer Erde beruht, von zahllosen Romanen, Comics und Filmen aus den Sparten Fantasy, SF, Horror, Geschichte und Ethnologie beeinflusst ist, gefiltert und verdreht woraus sich eine eigene neue Kombination ergibt, in dem zwar vieles vertraut genauso vieles aber überraschend sein wird.</p>`,
    moderator: "Andrea Maurizio",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 19),
  },
  {
    titleTEST: "Ahbaron, 21 Uhr",
    titleDE: "Ahbaron",
    textDE: `<h3>Das antike Griechenland</h3><p>Ahbaron ist eine systemunabhängige Welt für Fantasy Rollenspiele. Ein Setting, das zwar auf der Geschichte unserer Erde beruht, von zahllosen Romanen, Comics und Filmen aus den Sparten Fantasy, SF, Horror, Geschichte und Ethnologie beeinflusst ist, gefiltert und verdreht woraus sich eine eigene neue Kombination ergibt, in dem zwar vieles vertraut genauso vieles aber überraschend sein wird.</p>`,
    moderator: "Andrea Maurizio",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 21),
  },
  {
    titleTEST: "How to be a Hero, 17 Uhr",
    titleDE: "How to be a Hero",
    textDE: `<p>Was geschah auf Morriton Manor? London im Jahr 1874 ... Ein alter Freund lädt euch auf sein Landhaus ein, doch schon bei der Ankunft, merkt ihr, dass etwas nicht stimmt. Könnt ihr das Geheimniss lüften? Ein One-Shot-Abenteuer von den Rocked Beans mit dem 'how to be a hero'-system.</p>`,
    moderator: "Jan",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 17),
  },
  {
    titleTEST: "The Island, 13 Uhr",
    titleDE: "The Island",
    textDE: `<h3>Der Koloss im Berg</h3><p>In einer Welt in der Glaube, Religion und die Kirche eine zentrale Stellung einnehmen, jegliche Magie als Teufelswerk gilt und strengstens verboten wurde, geschehen in einem abgelegenen Bergdorf unerklärliche Dinge. Personen verschwinden, die Vegetation verdorrt, Tiere verändern sich und greifen das Dorf an. Als dann die Tochter des Grafes mit Fahrenden über den Berg türmt, ist das Chaos perfekt.</p>`,
    moderator: "Damian",
    languageDE: true,
    category: "game",
    time: new Date(2018, 9, 6, 13),
  },
]