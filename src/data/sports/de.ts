import type { SportsLocale } from './types'

export const de: SportsLocale = {
  ui: {
    breadcrumbHome: 'Klikkr',
    ctaOrder: 'Klikkr bestellen',
    appFree:
      'Die App ist gratis. Sie zählt auch ohne Armband, per Wischen auf dem Handy.',
    sourceLabel: 'Grundlage:',
    rulesAsOf: 'Stand der Regeln: November 2026.',
    rulesScreenshotAlt:
      'Klikkr App: Sportart wählen und Regeln einstellen, zum Beispiel Sätze, Spiele pro Satz und Einstand',
    faqTitle: 'Häufige Fragen',
    otherSportsTitle: 'Klikkr zählt auch diese Sportarten',
    ctaBandTitle: 'Zählen, ohne das Spiel zu unterbrechen',
    ctaBandText:
      'Ein Klick am Handgelenk, und der Punkt steht. Die App kennt die Regeln, zeigt den Aufschlag und speichert jedes Match in der Statistik.',
    sportsNav: 'Sportarten',
  },

  sports: {
    padel: {
      name: 'Padel',
      seoTitle: 'Padel Punktezähler & Padel-Regeln: so zählst du richtig',
      seoDescription:
        'Padel-Regeln einfach erklärt: Zählweise, Golden Point, Star Point, Tiebreak und Aufschlag. Mit Klikkr zählst du per Klick am Handgelenk.',
      h1: 'Padel-Punktezähler: Klikkr zählt dein Match',
      lead: 'Beim Padel spielst du zu viert, und nach drei langen Ballwechseln weiss niemand mehr, ob es 30:40 oder Einstand steht. Mit Klikkr klickst du nach jedem Punkt auf das Armband. Die App zählt nach den Padel-Regeln weiter und zeigt den Stand gross auf dem Handy.',
      klikkrTitle: 'So zählt Klikkr beim Padel',
      klikkrIntro:
        'Klikkr kennt die Padel-Zählweise mit Spielen, Sätzen und Tiebreak. Du wählst vor dem Match, wie der Einstand gespielt wird: mit Vorteil, mit Golden Point oder mit Star Point. Die App zeigt in jedem Spiel, wer aufschlägt, auch im Doppel.',
      klikkrPoints: [
        {
          title: 'Ein Armband pro Team',
          text: 'Wer den Punkt gewinnt, klickt einmal. Zwei Klicks nehmen einen Punkt zurück. Du musst den Schläger nicht weglegen.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Kein Armband zur Hand? Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben.',
        },
        {
          title: 'Anzeigetafel an der Glaswand',
          text: 'Ein zweites Handy zeigt den Spielstand gross an, zum Beispiel an der Glaswand. Die Verbindung läuft per Bluetooth, ohne Internet.',
        },
      ],
      rulesTitle: 'Padel-Regeln: so wird gezählt',
      rulesIntro:
        'Padel zählt fast wie Tennis. Der wichtigste Unterschied ist der Einstand: Hier gibt es drei Varianten. Die Regeln unten folgen dem Regelwerk des Weltverbands FIP.',
      rules: [
        {
          title: 'Punkte im Spiel',
          paragraphs: [
            'Ein Spiel zählt 0, 15, 30, 40 und Spiel. Wer bei 40 den nächsten Punkt macht, gewinnt das Spiel.',
            'Steht es 40:40, heisst das Einstand. Was dann passiert, hängt von der gewählten Variante ab.',
          ],
        },
        {
          title: 'Einstand: Vorteil, Golden Point oder Star Point',
          bullets: [
            'Vorteil: Wie im Tennis. Wer nach dem Einstand zwei Punkte hintereinander gewinnt, gewinnt das Spiel.',
            'Golden Point: Bei 40:40 entscheidet ein einziger Punkt. Das empfangende Team wählt, ob es den Aufschlag rechts oder links annimmt. Im Mixed nimmt der Spieler an, der das gleiche Geschlecht hat wie der Aufschläger. Im Hobby- und Vereinsspiel ist das die häufigste Regel.',
            'Star Point: Bei 40:40 wird zuerst mit Vorteil gespielt. Kommt es zum dritten Mal zum Einstand, entscheidet ein einziger Punkt, der Star Point. Seit der Saison 2026 ist das der Standard auf den grossen Profi-Turnieren der FIP.',
          ],
        },
        {
          title: 'Satz und Tiebreak',
          paragraphs: [
            'Einen Satz gewinnt, wer zuerst 6 Spiele hat, mit 2 Spielen Vorsprung. Bei 6:6 folgt ein Tiebreak.',
            'Im Tiebreak zählst du 1, 2, 3 und so weiter. Es gewinnt, wer zuerst 7 Punkte hat, mit 2 Punkten Vorsprung. Nach jeweils 6 Punkten wechseln die Teams die Seite.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Ein Match geht über drei Sätze. Wer zwei Sätze gewinnt, gewinnt das Match.',
          ],
        },
        {
          title: 'Aufschlag',
          bullets: [
            'Der Aufschlag ist von unten. Du lässt den Ball hinter der Aufschlaglinie aufprallen und triffst ihn höchstens auf Höhe der Taille.',
            'Der Ball muss diagonal im Aufschlagfeld des Gegners landen. Du hast zwei Versuche.',
            'Der erste Aufschlag eines Spiels ist von rechts. Danach wechselt die Seite nach jedem Punkt.',
            'Berührt der Ball das Netz und landet im richtigen Feld, wird der Aufschlag wiederholt.',
            'Prallt der Ball nach dem Aufprall im Aufschlagfeld an das Gitter, ist der Aufschlag ein Fehler. Prallt er an die Glaswand, ist er gültig.',
          ],
        },
        {
          title: 'Aufschlag im Doppel',
          paragraphs: [
            'Ein Spieler schlägt ein ganzes Spiel lang auf. Im nächsten Spiel schlägt das andere Team auf. Ist dein Team wieder an der Reihe, schlägt dein Partner auf. So schlagen alle vier Spieler reihum auf.',
            'Vor jedem Satz legt jedes Team fest, wer zuerst aufschlägt. Diese Reihenfolge gilt bis zum Satzende.',
            'Im Tiebreak schlägt der nächste Spieler einen Punkt auf. Danach schlägt jeder Spieler reihum zwei Punkte auf.',
          ],
        },
        {
          title: 'Wände und Gitter',
          bullets: [
            'Nach deinem Schlag muss der Ball über das Netz fliegen und zuerst im Feld des Gegners aufprallen. Trifft er vorher Wand oder Gitter auf der Seite des Gegners, verlierst du den Punkt. Gegen die Glaswand auf deiner eigenen Seite darfst du den Ball spielen.',
            'Nach dem Aufprall darf der Ball von der Glaswand und vom Gitter abprallen. Der Gegner darf ihn danach spielen, solange er nicht ein zweites Mal den Boden berührt.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'Nicht jedes Match ist ein Turnier. Diese Varianten sind im Hobby-Padel üblich. Du stellst sie in der App vor dem Match ein.',
      variants: [
        {
          title: 'Golden Point statt Vorteil',
          text: 'Die meisten Vereine spielen mit Golden Point. Spiele werden so kürzer, und jeder Einstand ist spannend.',
        },
        {
          title: 'Ein Satz statt drei',
          text: 'Für eine Platzstunde reicht oft ein Satz. In Klikkr wählst du einen oder drei Sätze.',
        },
        {
          title: 'Kurze Sätze auf 4 Spiele',
          text: 'Mit Sätzen auf 4 Spiele passen mehrere Matches in eine Stunde. Klikkr zählt auch Sätze auf 2, 4 oder 6 Spiele.',
        },
        {
          title: 'Turnier mit Freunden',
          text: 'Mit drei oder mehr Spielern erstellt Klikkr einen Spielplan, zum Beispiel jeder gegen jeden. Zwischen den Matches siehst du die Tabelle.',
        },
      ],
      faq: [
        {
          q: 'Wie zählt man beim Padel?',
          a: 'Wie beim Tennis: 0, 15, 30, 40, Spiel. Ein Satz geht auf 6 Spiele mit 2 Spielen Vorsprung, bei 6:6 gibt es einen Tiebreak auf 7 Punkte. Wer zwei Sätze gewinnt, gewinnt das Match.',
        },
        {
          q: 'Was ist der Golden Point beim Padel?',
          a: 'Bei 40:40 entscheidet ein einziger Punkt über das Spiel. Das empfangende Team wählt die Seite, auf der es den Aufschlag annimmt. Im Mixed nimmt der Spieler an, der das gleiche Geschlecht hat wie der Aufschläger.',
        },
        {
          q: 'Was ist der Star Point beim Padel?',
          a: 'Eine Einstand-Regel, die seit der Saison 2026 auf den grossen Profi-Turnieren gilt. Es wird zuerst mit Vorteil gespielt. Kommt es zum dritten Mal zum Einstand, entscheidet ein einziger Punkt.',
        },
        {
          q: 'Darf der Aufschlag beim Padel ans Gitter?',
          a: 'Nein. Prallt der Aufschlag nach dem Aufprall im Feld an das Gitter, ist er ein Fehler. An die Glaswand darf er prallen.',
        },
        {
          q: 'Gibt es einen digitalen Padel-Zähler für das Handgelenk?',
          a: 'Ja. Das Klikkr-Armband ist ein Punktezähler für das Handgelenk. Ein Klick zählt einen Punkt, die App auf dem Handy rechnet Spiele, Sätze und Tiebreak.',
        },
        {
          q: 'Brauche ich ein Armband, um die App zu nutzen?',
          a: 'Nein. Die Klikkr App ist gratis und zählt auch per Wischen auf dem Handy. Mit dem Armband musst du das Handy während des Spiels nicht berühren.',
        },
      ],
      source: {
        label: 'FIP, Rules of Padel',
        url: 'https://www.padelfip.com/',
      },
    },

    tennis: {
      name: 'Tennis',
      seoTitle: 'Tennis Punktezähler & Tennis-Zählweise einfach erklärt',
      seoDescription:
        'Tennis-Zählweise einfach erklärt: 15, 30, 40, Einstand, Tiebreak und Match-Tiebreak. Mit Klikkr zählst du per Klick am Handgelenk.',
      h1: 'Tennis-Punktezähler: Klikkr zählt dein Match',
      lead: 'Tennis hat die verwirrendste Zählweise im Racketsport: 15, 30, 40, Einstand, Vorteil, Tiebreak. Mit Klikkr klickst du nach jedem gewonnenen Punkt auf das Armband. Die App rechnet Spiele und Sätze und zeigt, wer aufschlägt.',
      klikkrTitle: 'So zählt Klikkr beim Tennis',
      klikkrIntro:
        'Klikkr kennt die Tennis-Zählweise mit Spielen, Sätzen und Tiebreak. Du wählst vor dem Match die Anzahl Sätze, die Spiele pro Satz und ob der Einstand mit Vorteil oder ohne gespielt wird. Die App zeigt nach jedem Spiel, wer aufschlägt.',
      klikkrPoints: [
        {
          title: 'Armband am Handgelenk',
          text: 'Nach dem gewonnenen Punkt klickst du einmal. Zwei Klicks nehmen einen Punkt zurück. Das Armband stört den Schlag nicht.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben, um einen Punkt zu zählen.',
        },
        {
          title: 'Statistik nach dem Match',
          text: 'Klikkr speichert jedes Match mit Satzergebnissen, Dauer und Verlauf. Du siehst deine Bilanz gegen jeden Gegner.',
        },
      ],
      rulesTitle: 'Tennis-Zählweise: so wird gezählt',
      rulesIntro:
        'Die Regeln unten folgen den Rules of Tennis des Weltverbands ITF. Der Verband heisst seit 2026 World Tennis.',
      rules: [
        {
          title: 'Punkte im Spiel',
          paragraphs: [
            'Ein Spiel zählt 0, 15, 30, 40 und Spiel. Der Stand des Aufschlägers wird zuerst genannt.',
            'Steht es 40:40, heisst das Einstand. Wer den nächsten Punkt gewinnt, hat Vorteil. Gewinnt er auch den folgenden Punkt, gewinnt er das Spiel. Verliert er ihn, steht es wieder Einstand.',
          ],
        },
        {
          title: 'Satz',
          paragraphs: [
            'Einen Satz gewinnt, wer zuerst 6 Spiele hat, mit 2 Spielen Vorsprung. Bei 6:6 folgt meistens ein Tiebreak.',
          ],
        },
        {
          title: 'Tiebreak',
          bullets: [
            'Im Tiebreak zählst du 1, 2, 3 und so weiter. Es gewinnt, wer zuerst 7 Punkte hat, mit 2 Punkten Vorsprung.',
            'Der erste Spieler schlägt einen Punkt auf. Danach schlägt jeder Spieler abwechselnd zwei Punkte auf.',
            'Nach jeweils 6 Punkten wechseln die Spieler die Seite.',
            'Wer im Tiebreak zuerst aufgeschlagen hat, ist im ersten Spiel des nächsten Satzes Rückschläger.',
          ],
        },
        {
          title: 'Match und Match-Tiebreak',
          paragraphs: [
            'Ein Match geht meistens über drei Sätze. Wer zwei Sätze gewinnt, gewinnt das Match. Bei den Grand-Slam-Turnieren spielen die Männer über fünf Sätze.',
            'Statt eines dritten Satzes spielen viele einen Match-Tiebreak. Er geht auf 10 Punkte, mit 2 Punkten Vorsprung. Seit 2022 entscheidet bei allen vier Grand-Slam-Turnieren ein Tiebreak auf 10 Punkte den letzten Satz, wenn es dort 6:6 steht.',
          ],
        },
        {
          title: 'Aufschlag',
          bullets: [
            'Ein Spieler schlägt ein ganzes Spiel lang auf. Im nächsten Spiel schlägt der Gegner auf.',
            'Der erste Punkt eines Spiels wird von rechts aufgeschlagen, danach wechselt die Seite nach jedem Punkt.',
            'Du hast zwei Versuche. Berührt der Ball das Netz und landet im richtigen Feld, wird der Aufschlag wiederholt.',
          ],
        },
        {
          title: 'Seitenwechsel',
          paragraphs: [
            'Die Spieler wechseln die Seite nach dem ersten, dritten, fünften und jedem weiteren ungeraden Spiel eines Satzes.',
          ],
        },
        {
          title: 'Doppel',
          paragraphs: [
            'Im Doppel schlagen alle vier Spieler reihum je ein Spiel auf. Vor jedem Satz legt jedes Team fest, wer zuerst aufschlägt.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'Auf dem Vereinsplatz ist die Zeit oft knapp. Diese Varianten sind im Hobby-Tennis üblich, und Klikkr zählt sie alle.',
      variants: [
        {
          title: 'Ohne Vorteil (No-Ad)',
          text: 'Bei 40:40 entscheidet ein einziger Punkt. Der Rückschläger wählt die Seite. Im Mixed-Doppel nimmt der Spieler an, der das gleiche Geschlecht hat wie der Aufschläger. Spiele werden so kürzer.',
        },
        {
          title: 'Ein Satz',
          text: 'Für eine Platzstunde reicht oft ein Satz. In Klikkr wählst du einen, drei oder fünf Sätze.',
        },
        {
          title: 'Kurze Sätze auf 4 Spiele',
          text: 'Der Satz geht auf 4 Spiele. Das ITF-Regelwerk kennt diese Variante, bei 4:4 folgt ein Tiebreak.',
        },
        {
          title: 'Match-Tiebreak statt drittem Satz',
          text: 'Steht es 1:1 in Sätzen, entscheidet ein Tiebreak auf 10 Punkte. Das ist im Doppel und in vielen Interclub-Ligen üblich.',
        },
      ],
      faq: [
        {
          q: 'Warum zählt man im Tennis 15, 30, 40?',
          a: 'Die Herkunft ist nicht sicher belegt. Eine verbreitete Erklärung ist eine Uhr mit Viertelstunden: 15, 30, 45 und 60 für das Spiel. Aus 45 wurde mit der Zeit 40.',
        },
        {
          q: 'Wie geht ein Tiebreak im Tennis?',
          a: 'Bei 6:6 im Satz zählst du 1, 2, 3 und so weiter. Wer zuerst 7 Punkte mit 2 Punkten Vorsprung hat, gewinnt den Satz 7:6. Der erste Spieler schlägt einen Punkt auf, danach jeder Spieler abwechselnd zwei.',
        },
        {
          q: 'Was ist ein Match-Tiebreak?',
          a: 'Ein Tiebreak auf 10 Punkte statt eines dritten Satzes. Es gewinnt, wer zuerst 10 Punkte mit 2 Punkten Vorsprung hat.',
        },
        {
          q: 'Was bedeutet Einstand im Tennis?',
          a: 'Einstand heisst, es steht 40:40. Wer danach zwei Punkte hintereinander gewinnt, gewinnt das Spiel.',
        },
        {
          q: 'Gibt es einen Tennis-Punktezähler für das Handgelenk?',
          a: 'Ja. Das Klikkr-Armband zählt per Klick, die App auf dem Handy rechnet Spiele, Sätze und Tiebreak. Alternativ dient eine Smartwatch als Klikkr.',
        },
      ],
      source: {
        label: 'World Tennis (ITF), Rules of Tennis',
        url: 'https://www.world.tennis/en/about-us/governance/rules-and-regulations/',
      },
    },

    squash: {
      name: 'Squash',
      seoTitle: 'Squash Punktezähler & Squash-Regeln: PAR-11 erklärt',
      seoDescription:
        'Squash-Regeln einfach erklärt: PAR-11, Aufschlag, Let und Stroke, English Scoring. Mit Klikkr zählst du per Klick am Handgelenk.',
      h1: 'Squash-Punktezähler: Klikkr zählt dein Match',
      lead: 'Beim Squash geht es schnell, und nach einem langen Ballwechsel ist der Spielstand schnell vergessen. Mit Klikkr klickst du nach jedem Punkt auf das Armband. Die App zählt nach PAR-11 oder nach der alten Zählweise und zeigt den Stand gross an der Scheibe.',
      klikkrTitle: 'So zählt Klikkr beim Squash',
      klikkrIntro:
        'Klikkr kennt die Squash-Zählweisen PAR-11, PAR-15 und English Scoring auf 9 Punkte. Du wählst die Zählweise und die Anzahl Sätze vor dem Match. Die App zeigt, wer aufschlägt.',
      klikkrPoints: [
        {
          title: 'Armband am Handgelenk',
          text: 'Wer den Ballwechsel gewinnt, klickt einmal. Zwei Klicks nehmen einen Punkt zurück. So bleibt der Schläger in der Hand.',
        },
        {
          title: 'Handy an der Scheibe',
          text: 'Mit dem Klikkr Glass Mount hängt das Handy an der Glasscheibe des Courts. So siehst du den Spielstand während des Spiels.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben.',
        },
      ],
      rulesTitle: 'Squash-Regeln: so wird gezählt',
      rulesIntro:
        'Die Regeln unten folgen den Rules of Singles Squash des Weltverbands World Squash.',
      rules: [
        {
          title: 'PAR-11: jeder Ballwechsel zählt',
          paragraphs: [
            'Der Gewinner jedes Ballwechsels bekommt einen Punkt, egal wer aufgeschlagen hat. Ein Spiel geht auf 11 Punkte.',
            'Steht es 10:10, geht das Spiel weiter, bis ein Spieler 2 Punkte Vorsprung hat.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Ein Match geht meistens über fünf Spiele. Wer drei Spiele gewinnt, gewinnt das Match. Im Verein wird oft auf zwei gewonnene Spiele gespielt.',
          ],
        },
        {
          title: 'Aufschlag',
          bullets: [
            'Wer den Ballwechsel gewinnt, schlägt als Nächstes auf.',
            'Wer den Aufschlag neu bekommt, wählt die Seite. Gewinnt er den Punkt, wechselt er die Seite für den nächsten Aufschlag.',
            'Du hast nur einen Versuch. Einen zweiten Aufschlag gibt es im Squash nicht.',
            'Der Ball muss die Stirnwand zwischen Aufschlaglinie und Auslinie treffen. Danach muss er im hinteren Viertel auf der anderen Seite landen, ausser der Gegner spielt ihn direkt.',
            'Beim Aufschlag berührt mindestens ein Teil eines Fusses den Boden im Aufschlagfeld. Der Fuss darf die Linie nicht berühren.',
            'Im ersten Spiel entscheidet das Drehen des Schlägers, wer aufschlägt. In jedem weiteren Spiel schlägt der Gewinner des vorherigen Spiels zuerst auf.',
          ],
        },
        {
          title: 'Let und Stroke',
          paragraphs: [
            'Behindert dich der Gegner beim Schlag, kannst du einen Let verlangen. Bei einem Let wird der Ballwechsel wiederholt. Einen Let gibt es nur, wenn du den Ball hättest zurückspielen können.',
            'Hättest du ohne Behinderung einen Gewinnschlag machen können, gibt es einen Stroke. Einen Stroke gibt es auch, wenn du den Ball hättest zurückspielen können und der Gegner nicht versucht hat, Platz zu machen. Bei einem Stroke bekommst du den Punkt.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'Im Verein wird nicht immer nach PAR-11 gespielt. Diese Varianten sind verbreitet. Du stellst sie in der App vor dem Match ein.',
      variants: [
        {
          title: 'English Scoring auf 9',
          text: 'Nur der Aufschläger kann punkten. Gewinnt der Rückschläger den Ballwechsel, bekommt er nur den Aufschlag. Ein Spiel geht auf 9 Punkte. Bei 8:8 wählt der Rückschläger, ob bis 9 oder 10 gespielt wird.',
        },
        {
          title: 'PAR-15',
          text: 'Wie PAR-11, aber auf 15 Punkte. Die Variante ist älter und wird heute selten gespielt.',
        },
        {
          title: 'Best-of-3',
          text: 'Wer zwei Spiele gewinnt, gewinnt das Match. Das passt in eine kurze Platzbuchung.',
        },
        {
          title: 'Zwei Aufschläge als Hausregel',
          text: 'Manche Hobby-Spieler erlauben einen zweiten Aufschlag. Das ist keine offizielle Regel, Klikkr kann es trotzdem zählen.',
        },
      ],
      faq: [
        {
          q: 'Wie zählt man beim Squash?',
          a: 'Heute meistens nach PAR-11: Jeder Ballwechsel gibt einen Punkt. Ein Spiel geht auf 11, bei 10:10 braucht es 2 Punkte Vorsprung. Wer drei Spiele gewinnt, gewinnt das Match.',
        },
        {
          q: 'Gibt es beim Squash einen zweiten Aufschlag?',
          a: 'Nein. Im Squash hast du nur einen Versuch. Ist der Aufschlag ein Fehler, geht der Punkt an den Gegner.',
        },
        {
          q: 'Was ist der Unterschied zwischen Let und Stroke?',
          a: 'Bei einem Let wird der Ballwechsel wiederholt. Bei einem Stroke bekommt der behinderte Spieler den Punkt.',
        },
        {
          q: 'Was ist English Scoring im Squash?',
          a: 'Eine ältere Zählweise. Nur der Aufschläger kann punkten, und ein Spiel geht auf 9 Punkte. Klikkr kann auch so zählen.',
        },
        {
          q: 'Wie sehe ich den Spielstand beim Squash?',
          a: 'Mit dem Klikkr Glass Mount hängt dein Handy an der Glasscheibe. Die App zeigt den Spielstand in grossen Zahlen, und du zählst per Klick am Handgelenk.',
        },
      ],
      source: {
        label: 'World Squash, Rules of Singles Squash',
        url: 'https://www.worldsquash.sport/',
      },
    },

    badminton: {
      name: 'Badminton',
      seoTitle: 'Badminton Punktezähler & Badminton-Regeln erklärt',
      seoDescription:
        'Badminton-Regeln einfach erklärt: Zählweise bis 21, Aufschlag, Doppel und das neue 15-Punkte-System ab 2027. Klikkr zählt per Klick.',
      h1: 'Badminton-Punktezähler: Klikkr zählt dein Match',
      lead: 'Beim Badminton zählt jeder Ballwechsel, und die Aufschlagseite hängt vom Spielstand ab. Mit Klikkr klickst du nach jedem Punkt auf das Armband. Die App zählt den Satz und zeigt, wer von welcher Seite aufschlägt.',
      klikkrTitle: 'So zählt Klikkr beim Badminton',
      klikkrIntro:
        'Klikkr zählt Badminton auf 21, 15 oder 11 Punkte, mit 2 Punkten Vorsprung und auf Wunsch mit einer Obergrenze bei 30. Jeder Ballwechsel gibt einen Punkt, und wer ihn gewinnt, schlägt als Nächstes auf.',
      klikkrPoints: [
        {
          title: 'Armband am Handgelenk',
          text: 'Nach dem gewonnenen Ballwechsel klickst du einmal. Zwei Klicks nehmen einen Punkt zurück. Das Armband ist leicht und stört den Schlag nicht.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben.',
        },
        {
          title: 'Turnier in der Halle',
          text: 'Mit drei oder mehr Spielern erstellt Klikkr einen Spielplan. Zwischen den Matches siehst du die Tabelle.',
        },
      ],
      rulesTitle: 'Badminton-Regeln: so wird gezählt',
      rulesIntro:
        'Die Regeln unten folgen den Laws of Badminton des Weltverbands BWF.',
      rules: [
        {
          title: 'Punkte und Satz',
          bullets: [
            'Jeder Ballwechsel gibt einen Punkt, egal wer aufgeschlagen hat.',
            'Ein Satz geht auf 21 Punkte. Steht es 20:20, braucht es 2 Punkte Vorsprung.',
            'Steht es 29:29, entscheidet der nächste Punkt. Wer 30 Punkte hat, gewinnt den Satz.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Ein Match geht über drei Sätze. Wer zwei Sätze gewinnt, gewinnt das Match.',
          ],
        },
        {
          title: 'Aufschlag',
          bullets: [
            'Wer den Ballwechsel gewinnt, schlägt als Nächstes auf.',
            'Bei gerader eigener Punktzahl schlägst du vom rechten Aufschlagfeld auf, bei ungerader vom linken.',
            'Der Aufschlag geht diagonal ins gegenüberliegende Aufschlagfeld. Du hast einen Versuch.',
          ],
        },
        {
          title: 'Aufschlag im Doppel',
          paragraphs: [
            'Die Partner tauschen ihr Aufschlagfeld nur, wenn ihr Team einen Punkt beim eigenen Aufschlag gewinnt. Verliert das aufschlagende Team den Ballwechsel, geht der Aufschlag an die Gegner, und niemand wechselt das Feld.',
          ],
        },
        {
          title: 'Pausen und Seitenwechsel',
          bullets: [
            'Hat ein Spieler oder Team 11 Punkte, gibt es eine Pause von höchstens 60 Sekunden.',
            'Zwischen den Sätzen gibt es eine Pause von höchstens 2 Minuten.',
            'Die Spieler wechseln nach jedem Satz die Seite. Im dritten Satz wechseln sie auch, sobald ein Spieler oder Team 11 Punkte hat.',
          ],
        },
        {
          title: 'Neu ab 2027: drei Sätze auf 15 Punkte',
          paragraphs: [
            'Die BWF hat im April 2026 ein neues Zählsystem beschlossen. Ab dem 4. Januar 2027 geht ein Satz auf 15 Punkte statt auf 21. Bei 14:14 braucht es 2 Punkte Vorsprung, bei 20:20 entscheidet der nächste Punkt. Die Pause ist dann in jedem Satz bei 8 Punkten. Im dritten Satz wechseln die Spieler bei 8 Punkten auch die Seite.',
            'Bis dahin gilt das System mit 21 Punkten. Klikkr zählt Sätze auf 21 und auf 15 Punkte.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'In der Halle ist die Zeit oft knapp. Diese Varianten sind im Hobby-Badminton verbreitet. Du stellst sie in der App vor dem Match ein.',
      variants: [
        {
          title: 'Sätze auf 15 oder 11 Punkte',
          text: 'Kürzere Sätze passen besser in eine Hallenstunde. Klikkr zählt auf 21, 15 oder 11 Punkte.',
        },
        {
          title: 'Ein Satz',
          text: 'Für schnelle Wechsel in der Halle spielt ihr nur einen Satz.',
        },
        {
          title: 'Ohne 2 Punkte Vorsprung',
          text: 'Der Satz endet genau bei der Zielpunktzahl, zum Beispiel bei 21:20. Das spart Zeit, wenn viele Spieler auf den Platz warten.',
        },
        {
          title: 'Ohne Obergrenze',
          text: 'Manche Gruppen spielen bei 20:20 so lange weiter, bis ein Spieler 2 Punkte Vorsprung hat. In Klikkr schaltest du die Obergrenze bei 30 aus.',
        },
      ],
      faq: [
        {
          q: 'Bis wie viele Punkte spielt man im Badminton?',
          a: 'Ein Satz geht auf 21 Punkte mit 2 Punkten Vorsprung, höchstens bis 30. Ab dem 4. Januar 2027 gilt offiziell ein neues System mit Sätzen auf 15 Punkte.',
        },
        {
          q: 'Von welcher Seite schlägt man im Badminton auf?',
          a: 'Bei gerader eigener Punktzahl von rechts, bei ungerader von links. Der Aufschlag geht diagonal ins gegenüberliegende Feld.',
        },
        {
          q: 'Kann man im Badminton auch ohne Aufschlag punkten?',
          a: 'Ja. Seit 2006 gibt jeder Ballwechsel einen Punkt, egal wer aufgeschlagen hat. Vorher konnte nur der Aufschläger punkten.',
        },
        {
          q: 'Was ändert sich 2027 im Badminton?',
          a: 'Ab dem 4. Januar 2027 gehen die Sätze auf 15 statt auf 21 Punkte. Bei 14:14 braucht es 2 Punkte Vorsprung, höchstens bis 21.',
        },
        {
          q: 'Gibt es einen Badminton-Zähler für das Handgelenk?',
          a: 'Ja. Das Klikkr-Armband zählt per Klick, die App auf dem Handy rechnet den Satz und zeigt den Aufschlag.',
        },
      ],
      source: {
        label: 'BWF, Laws of Badminton',
        url: 'https://corporate.bwfbadminton.com/statutes/',
      },
    },

    tableTennis: {
      name: 'Tischtennis',
      seoTitle: 'Tischtennis Punktezähler & Tischtennis-Regeln erklärt',
      seoDescription:
        'Tischtennis-Regeln einfach erklärt: Satz bis 11, Aufschlagwechsel, Doppel und alte 21-Punkte-Regel. Mit Klikkr zählst du per Klick.',
      h1: 'Tischtennis-Punktezähler: Klikkr zählt dein Match',
      lead: 'Beim Tischtennis wechselt der Aufschlag alle zwei Punkte, und ab 10:10 nach jedem Punkt. Mit Klikkr klickst du nach jedem Punkt auf das Armband. Die App zählt die Sätze und zeigt, wer aufschlägt.',
      klikkrTitle: 'So zählt Klikkr beim Tischtennis',
      klikkrIntro:
        'Klikkr zählt Tischtennis auf 11 oder 21 Punkte und über einen, drei oder fünf Sätze. Die App wechselt den Aufschlag nach der gewählten Regel. Ab 10:10 wechselt er nach jedem Punkt.',
      klikkrPoints: [
        {
          title: 'Armband am Handgelenk',
          text: 'Nach dem gewonnenen Punkt klickst du einmal. Zwei Klicks nehmen einen Punkt zurück. Das Armband ist leicht und stört den Schlag nicht.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben.',
        },
        {
          title: 'Statistik nach dem Match',
          text: 'Klikkr speichert jedes Match mit Satzergebnissen und Dauer. Du siehst deine Bilanz gegen jeden Gegner.',
        },
      ],
      rulesTitle: 'Tischtennis-Regeln: so wird gezählt',
      rulesIntro:
        'Die Regeln unten folgen den Laws of Table Tennis des Weltverbands ITTF.',
      rules: [
        {
          title: 'Punkte und Satz',
          bullets: [
            'Jeder Ballwechsel gibt einen Punkt.',
            'Einen Satz gewinnt, wer zuerst 11 Punkte hat.',
            'Steht es 10:10, geht der Satz weiter, bis ein Spieler 2 Punkte Vorsprung hat.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Ein Match geht über eine ungerade Zahl von Sätzen, meistens fünf oder sieben. Wer zuerst drei beziehungsweise vier Sätze gewinnt, gewinnt das Match. Im Hobby wird oft auf zwei gewonnene Sätze gespielt.',
          ],
        },
        {
          title: 'Aufschlagwechsel',
          bullets: [
            'Jeder Spieler schlägt zweimal hintereinander auf, dann wechselt der Aufschlag.',
            'Ab 10:10 wechselt der Aufschlag nach jedem Punkt.',
            'Wer in einem Satz zuerst aufgeschlagen hat, nimmt im nächsten Satz zuerst den Aufschlag an.',
          ],
        },
        {
          title: 'So geht der Aufschlag',
          bullets: [
            'Der Ball liegt auf der offenen, flachen Hand. Du wirfst ihn mindestens 16 Zentimeter senkrecht hoch.',
            'Du triffst den Ball hinter der Grundlinie und über der Tischhöhe.',
            'Der Ball prallt zuerst auf deiner Seite auf und dann auf der Seite des Gegners.',
            'Berührt der Ball beim Aufschlag das Netz und landet richtig, wird der Aufschlag wiederholt.',
          ],
        },
        {
          title: 'Doppel',
          paragraphs: [
            'Im Doppel geht der Aufschlag von der rechten Hälfte diagonal in die rechte Hälfte des Gegners. Die Partner schlagen den Ball abwechselnd.',
            'Bei jedem Aufschlagwechsel wird der bisherige Rückschläger zum Aufschläger. So schlagen alle vier Spieler reihum auf.',
          ],
        },
        {
          title: 'Seitenwechsel',
          paragraphs: [
            'Die Spieler wechseln nach jedem Satz die Seite. Im letzten möglichen Satz wechseln sie auch, sobald ein Spieler 5 Punkte hat.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'Am Tisch im Keller oder im Verein gelten oft eigene Regeln. Diese Varianten sind verbreitet. Du stellst sie in der App vor dem Match ein.',
      variants: [
        {
          title: 'Alte Regel: 21 Punkte',
          text: 'Bis 2001 ging ein Satz auf 21 Punkte, und jeder Spieler schlug fünfmal hintereinander auf. Viele Hobby-Runden spielen noch so.',
        },
        {
          title: 'Ein oder drei Sätze',
          text: 'Für schnelle Wechsel spielt ihr nur einen Satz oder auf zwei gewonnene Sätze.',
        },
        {
          title: 'Turnier am Vereinsabend',
          text: 'Mit drei oder mehr Spielern erstellt Klikkr einen Spielplan, zum Beispiel jeder gegen jeden. Zwischen den Matches siehst du die Tabelle.',
        },
        {
          title: 'Eigene Aufschlag-Regel',
          text: 'In Klikkr stellst du ein, wie viele Aufschläge jeder Spieler hat, zum Beispiel zwei oder fünf.',
        },
      ],
      faq: [
        {
          q: 'Bis wie viele Punkte spielt man im Tischtennis?',
          a: 'Ein Satz geht auf 11 Punkte. Steht es 10:10, braucht es 2 Punkte Vorsprung. Bis 2001 ging ein Satz auf 21 Punkte.',
        },
        {
          q: 'Wie oft schlägt man im Tischtennis auf?',
          a: 'Jeder Spieler schlägt zweimal hintereinander auf. Ab 10:10 wechselt der Aufschlag nach jedem Punkt.',
        },
        {
          q: 'Muss der Aufschlag im Tischtennis diagonal sein?',
          a: 'Nur im Doppel. Dort geht der Aufschlag von der rechten Hälfte in die rechte Hälfte des Gegners. Im Einzel darf der Ball überall auf der Seite des Gegners aufprallen.',
        },
        {
          q: 'Was passiert, wenn der Aufschlag das Netz berührt?',
          a: 'Landet der Ball danach richtig auf der Seite des Gegners, wird der Aufschlag wiederholt. Es gibt keinen Punkt.',
        },
        {
          q: 'Gibt es einen Tischtennis-Zähler, der den Aufschlag anzeigt?',
          a: 'Ja. Die Klikkr App zeigt nach jedem Punkt, wer aufschlägt. Du zählst per Klick am Handgelenk oder per Wischen auf dem Handy.',
        },
      ],
      source: {
        label: 'ITTF, Laws of Table Tennis',
        url: 'https://documents.ittf.sport/',
      },
    },

    pickleball: {
      name: 'Pickleball',
      seoTitle: 'Pickleball Punktezähler & Pickleball-Regeln erklärt',
      seoDescription:
        'Pickleball-Regeln einfach erklärt: Side-out-Zählweise, 0-0-2, Aufschlag, Kitchen und Rally Scoring. Mit Klikkr zählst du per Klick.',
      h1: 'Pickleball-Punktezähler: Klikkr zählt dein Match',
      lead: 'Im Pickleball-Doppel sagt der Aufschläger vor jedem Aufschlag drei Zahlen an, zum Beispiel «4-2-1». Wer neu spielt, verliert dabei schnell den Faden. Mit Klikkr klickst du nach jedem Ballwechsel auf das Armband. Die App zählt nach Side-out, mit Server 1 und Server 2.',
      klikkrTitle: 'So zählt Klikkr beim Pickleball',
      klikkrIntro:
        'Klikkr kennt die Side-out-Zählweise mit Server 1 und Server 2, inklusive dem Start bei 0-0-2. Du wählst vor dem Match, ob ihr nach Side-out oder mit Rally Scoring spielt, und auf wie viele Punkte.',
      klikkrPoints: [
        {
          title: 'Armband am Handgelenk',
          text: 'Wer den Ballwechsel gewinnt, klickt einmal. Klikkr entscheidet, ob es einen Punkt oder einen Aufschlagwechsel gibt.',
        },
        {
          title: 'Smartwatch oder Handy',
          text: 'Die Apple Watch oder eine Wear-OS-Uhr wird zum Klikkr. Ohne Uhr wischst du auf dem Handy nach oben.',
        },
        {
          title: 'Anzeigetafel',
          text: 'Ein zweites Handy zeigt den Spielstand gross an. Die Verbindung läuft per Bluetooth, ohne Internet.',
        },
      ],
      rulesTitle: 'Pickleball-Regeln: so wird gezählt',
      rulesIntro:
        'Die Regeln unten folgen dem Official Rulebook von USA Pickleball.',
      rules: [
        {
          title: 'Side-out-Zählweise',
          paragraphs: [
            'Nur das aufschlagende Team kann punkten. Gewinnt das empfangende Team den Ballwechsel, bekommt es keinen Punkt, sondern den Aufschlag. Das heisst Side-out.',
            'Ein Spiel geht auf 11 Punkte, mit 2 Punkten Vorsprung. In Turnieren gibt es auch Spiele auf 15 oder 21 Punkte.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'In Turnieren gewinnt meistens, wer zuerst zwei Spiele auf 11 Punkte gewinnt.',
          ],
        },
        {
          title: 'Die Ansage im Doppel: drei Zahlen',
          bullets: [
            'Vor jedem Aufschlag sagt der Aufschläger den Stand an: zuerst die Punkte des eigenen Teams, dann die Punkte der Gegner, dann die Server-Nummer 1 oder 2.',
            'Im Doppel schlagen beide Partner auf, bevor der Aufschlag an die Gegner geht. Zuerst Server 1, nach einem verlorenen Ballwechsel Server 2.',
            'Ausnahme zu Spielbeginn: Das erste aufschlagende Team hat nur einen Server. Deshalb beginnt jedes Spiel mit der Ansage «0-0-2».',
          ],
        },
        {
          title: 'Aufschlag',
          bullets: [
            'Der Aufschlag geht diagonal ins gegenüberliegende Aufschlagfeld.',
            'Schlägst du den Ball direkt aus der Luft auf, schlägst du von unten und triffst den Ball unter der Taille. Beim Drop Serve lässt du den Ball zuerst aufprallen. Dann gilt diese Einschränkung nicht.',
            'Im Doppel beginnt der Aufschlag nach einem Side-out immer im rechten Feld. Im Einzel schlägst du bei gerader eigener Punktzahl von rechts auf, bei ungerader von links.',
            'Du hast einen Versuch. Berührt der Ball das Netz und landet im richtigen Feld, ist er gültig und wird weitergespielt.',
          ],
        },
        {
          title: 'Zwei-Aufprall-Regel',
          paragraphs: [
            'Der Rückschläger muss den Aufschlag nach dem Aufprall spielen. Danach muss auch das aufschlagende Team den Ball einmal aufprallen lassen. Erst ab dem dritten Schlag darf der Ball direkt aus der Luft gespielt werden.',
          ],
        },
        {
          title: 'Kitchen: die Zone am Netz',
          paragraphs: [
            'Die Zone direkt am Netz heisst Non-Volley Zone oder Kitchen. Sie reicht 7 Fuss, etwa 2,13 Meter, vom Netz. Wer in der Kitchen steht oder ihre Linie berührt, darf den Ball nicht direkt aus der Luft spielen. Trägt dich der Schwung nach einem Volley in die Kitchen, ist das ebenfalls ein Fehler.',
          ],
        },
      ],
      variantsTitle: 'Varianten für Hobby und Verein',
      variantsIntro:
        'Im Hobby-Pickleball wird nicht immer nach Side-out gezählt. Diese Varianten sind verbreitet. Du stellst sie in der App vor dem Match ein.',
      variants: [
        {
          title: 'Rally Scoring',
          text: 'Jeder Ballwechsel gibt einen Punkt, egal wer aufschlägt. USA Pickleball lässt diese Zählweise provisorisch zu, im Einzel seit Mai 2024 und im Doppel seit 2025. Oft wird dann auf 15 oder 21 Punkte gespielt.',
        },
        {
          title: 'Ein Spiel statt zwei aus drei',
          text: 'Für kurze Hallenzeiten spielt ihr nur ein Spiel auf 11 Punkte.',
        },
        {
          title: 'Spiele auf 15 oder 21',
          text: 'Längere Spiele sind auch mit Side-out möglich. Klikkr zählt auf 11, 15, 21 oder eine eigene Zahl.',
        },
        {
          title: 'Einzel',
          text: 'Im Einzel gibt es nur einen Server pro Seite. Verliert der Aufschläger den Ballwechsel, folgt sofort ein Side-out.',
        },
      ],
      faq: [
        {
          q: 'Wie zählt man beim Pickleball?',
          a: 'Nur das aufschlagende Team kann punkten. Ein Spiel geht auf 11 Punkte mit 2 Punkten Vorsprung. Im Doppel sagt der Aufschläger drei Zahlen an: eigene Punkte, Punkte der Gegner und die Server-Nummer.',
        },
        {
          q: 'Warum beginnt Pickleball mit 0-0-2?',
          a: 'Das erste aufschlagende Team hat zu Spielbeginn nur einen Server. Die Ansage «2» zeigt, dass nach dem ersten verlorenen Ballwechsel der Aufschlag an die Gegner geht.',
        },
        {
          q: 'Was ist die Kitchen beim Pickleball?',
          a: 'Die Zone direkt am Netz, etwa 2,13 Meter tief. Wer darin steht oder die Linie berührt, darf den Ball nicht direkt aus der Luft spielen.',
        },
        {
          q: 'Was ist Rally Scoring beim Pickleball?',
          a: 'Jeder Ballwechsel gibt einen Punkt, egal wer aufschlägt. USA Pickleball lässt das provisorisch zu, im Einzel seit 2024 und im Doppel seit 2025. In vielen offiziellen Turnieren gilt aber weiter Side-out.',
        },
        {
          q: 'Gibt es einen Pickleball-Zähler für das Handgelenk?',
          a: 'Ja. Das Klikkr-Armband zählt per Klick. Die App entscheidet, ob es einen Punkt, einen Server-Wechsel oder einen Side-out gibt.',
        },
      ],
      source: {
        label: 'USA Pickleball, Official Rulebook',
        url: 'https://usapickleball.org/rules/',
      },
    },
  },
}
