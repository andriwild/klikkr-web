import type { SportsLocale } from './types'

export const it: SportsLocale = {
  ui: {
    breadcrumbHome: 'Klikkr',
    ctaOrder: 'Ordina Klikkr',
    appFree:
      "L'app è gratuita. Conta anche senza braccialetto, con uno swipe sul telefono.",
    sourceLabel: 'Fonte:',
    rulesAsOf: 'Regole aggiornate a novembre 2026.',
    rulesScreenshotAlt:
      'App Klikkr: scegliere lo sport e impostare le regole, per esempio set, game per set e parità',
    faqTitle: 'Domande frequenti',
    otherSportsTitle: 'Klikkr conta anche questi sport',
    ctaBandTitle: 'Conta i punti senza interrompere il gioco',
    ctaBandText:
      "Un clic al polso e il punto è segnato. L'app conosce le regole, mostra chi serve e salva ogni partita nelle statistiche.",
    sportsNav: 'Sport',
  },

  sports: {
    padel: {
      name: 'Padel',
      seoTitle: 'Contapunti padel e regole del padel: come si contano i punti',
      seoDescription:
        'Regole del padel in parole semplici: punteggio, golden point, star point, tie-break e battuta. Con Klikkr conti i punti con un clic al polso.',
      h1: 'Segnapunti padel: Klikkr conta la tua partita',
      lead: "A padel giochi in quattro. Dopo tre scambi lunghi nessuno sa più se siete sul 30-40 o in parità. Con Klikkr fai clic sul braccialetto dopo ogni punto. L'app continua a contare secondo le regole del padel e mostra il punteggio in grande sul telefono.",
      klikkrTitle: 'Come conta Klikkr nel padel',
      klikkrIntro:
        "Klikkr conosce il punteggio del padel con game, set e tie-break. Prima della partita scegli come si gioca la parità: con i vantaggi, con il golden point o con lo star point. In ogni game l'app mostra chi serve, anche in doppio.",
      klikkrPoints: [
        {
          title: 'Un braccialetto per coppia',
          text: 'Chi vince il punto fa clic una volta. Due clic annullano un punto. Non devi posare la racchetta.',
        },
        {
          title: 'Smartwatch o telefono',
          text: "Niente braccialetto a portata di mano? L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono.",
        },
        {
          title: 'Tabellone sulla parete di vetro',
          text: 'Un secondo telefono mostra il punteggio in grande, per esempio sulla parete di vetro. Il collegamento passa via Bluetooth, senza internet.',
        },
      ],
      rulesTitle: 'Regole del padel: come si contano i punti',
      rulesIntro:
        'Il padel si conta quasi come il tennis. La differenza principale è la parità: qui ci sono tre varianti. Le regole qui sotto seguono il regolamento della FIP, la federazione mondiale.',
      rules: [
        {
          title: 'I punti in un game',
          paragraphs: [
            'Un game si conta 0, 15, 30, 40 e game. Chi è a 40 e fa il punto successivo vince il game.',
            'Sul 40-40 si dice parità. Cosa succede dopo dipende dalla variante scelta.',
          ],
        },
        {
          title: 'Parità: vantaggi, golden point o star point',
          bullets: [
            'Vantaggi: come nel tennis. Chi dopo la parità vince due punti di fila vince il game.',
            "Golden point (punto d'oro): sul 40-40 decide un solo punto. La coppia in risposta sceglie se ricevere il servizio a destra o a sinistra. Nel misto riceve il giocatore dello stesso sesso di chi serve. Nel gioco amatoriale e nei circoli è la regola più diffusa.",
            'Star point: sul 40-40 si gioca prima con i vantaggi. Se si arriva alla parità per la terza volta, decide un solo punto: lo star point. Dalla stagione 2026 è la regola standard nei grandi tornei professionistici della FIP.',
          ],
        },
        {
          title: 'Set e tie-break',
          paragraphs: [
            'Vince il set chi arriva per primo a 6 game, con 2 game di scarto. Sul 6-6 si gioca il tie-break.',
            'Nel tie-break conti 1, 2, 3 e così via. Vince chi arriva per primo a 7 punti, con 2 punti di scarto. Ogni 6 punti le coppie cambiano campo.',
          ],
        },
        {
          title: 'Partita',
          paragraphs: [
            'Una partita si gioca al meglio dei tre set. Chi vince due set vince la partita.',
          ],
        },
        {
          title: 'Regole della battuta nel padel',
          bullets: [
            "La battuta si fa dal basso. Fai rimbalzare la palla dietro la linea di servizio e la colpisci al massimo all'altezza della vita.",
            'La palla deve cadere in diagonale nel rettangolo di servizio avversario. Hai due tentativi.',
            'Il primo servizio di ogni game si batte da destra. Poi si cambia lato a ogni punto.',
            'Se la palla tocca la rete e cade nel rettangolo giusto, il servizio si ripete.',
            'Se dopo il rimbalzo nel rettangolo di servizio la palla colpisce la rete metallica, il servizio è fallo. Se colpisce la parete di vetro, è valido.',
          ],
        },
        {
          title: 'Il servizio nel doppio',
          paragraphs: [
            "Un giocatore serve per tutto un game. Nel game successivo serve l'altra coppia. Quando tocca di nuovo alla tua coppia, serve il tuo compagno. Così tutti e quattro i giocatori servono a turno.",
            'Prima di ogni set ogni coppia decide chi serve per primo. Questo ordine vale fino alla fine del set.',
            'Nel tie-break il giocatore successivo serve un punto. Poi ogni giocatore serve a turno due punti.',
          ],
        },
        {
          title: 'Pareti e rete metallica',
          bullets: [
            "Dopo il tuo colpo la palla deve passare sopra la rete e rimbalzare prima nel campo avversario. Se prima tocca la parete o la rete metallica dalla parte dell'avversario, perdi il punto. Puoi invece giocare la palla contro la parete di vetro dalla tua parte.",
            "Dopo il rimbalzo la palla può colpire la parete di vetro e la rete metallica. L'avversario può giocarla, finché non tocca terra una seconda volta.",
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        "Non tutte le partite sono un torneo. Queste varianti sono comuni nel padel amatoriale. Le imposti nell'app prima della partita.",
      variants: [
        {
          title: 'Golden point invece dei vantaggi',
          text: 'La maggior parte dei circoli gioca con il golden point. Così i game sono più corti, e ogni parità è emozionante.',
        },
        {
          title: 'Un set invece di tre',
          text: "Per un'ora di campo spesso basta un set. In Klikkr scegli uno o tre set.",
        },
        {
          title: 'Set corti a 4 game',
          text: "Con set a 4 game più partite stanno in un'ora. Klikkr conta anche set a 2, 4 o 6 game.",
        },
        {
          title: 'Torneo tra amici',
          text: "Con tre o più giocatori Klikkr crea un calendario, per esempio tutti contro tutti. Tra una partita e l'altra vedi la classifica.",
        },
      ],
      faq: [
        {
          q: 'Come si contano i punti nel padel?',
          a: "Come nel tennis: 0, 15, 30, 40, game. Un set si gioca a 6 game con 2 game di scarto, sul 6-6 c'è un tie-break a 7 punti. Chi vince due set vince la partita.",
        },
        {
          q: "Cos'è il golden point nel padel?",
          a: 'Sul 40-40 un solo punto decide il game. La coppia in risposta sceglie il lato da cui ricevere il servizio. Nel misto riceve il giocatore dello stesso sesso di chi serve.',
        },
        {
          q: "Cos'è lo star point nel padel?",
          a: 'È una regola per la parità, in vigore dalla stagione 2026 nei grandi tornei professionistici. Si gioca prima con i vantaggi. Se si arriva alla parità per la terza volta, decide un solo punto.',
        },
        {
          q: 'Nel padel la battuta può colpire la rete metallica?',
          a: 'No. Se dopo il rimbalzo nel campo la battuta colpisce la rete metallica, è fallo. La parete di vetro invece la può colpire.',
        },
        {
          q: 'Esiste un contapunti digitale da polso per il padel?',
          a: "Sì. Il braccialetto Klikkr è un contapunti da polso. Un clic conta un punto, l'app sul telefono calcola game, set e tie-break.",
        },
        {
          q: "Mi serve un braccialetto per usare l'app?",
          a: "No. L'app Klikkr è gratuita e conta anche con uno swipe sul telefono. Con il braccialetto non devi toccare il telefono durante il gioco.",
        },
      ],
      source: {
        label: 'FIP, Rules of Padel',
        url: 'https://www.padelfip.com/',
      },
    },

    tennis: {
      name: 'Tennis',
      seoTitle: 'Contapunti tennis: come si contano i punti nel tennis',
      seoDescription:
        'Come si contano i punti nel tennis: 15, 30, 40, parità, tie-break e super tie-break in parole semplici. Con Klikkr conti con un clic al polso.',
      h1: 'Conta punti tennis: Klikkr tiene il punteggio della tua partita',
      lead: "Il tennis ha il punteggio più complicato tra gli sport di racchetta: 15, 30, 40, parità, vantaggio, tie-break. Con Klikkr fai clic sul braccialetto dopo ogni punto vinto. L'app calcola game e set e mostra chi serve.",
      klikkrTitle: 'Come conta Klikkr nel tennis',
      klikkrIntro:
        "Klikkr conosce il punteggio del tennis con game, set e tie-break. Prima della partita scegli il numero di set, i game per set e se la parità si gioca con o senza vantaggi. Dopo ogni game l'app mostra chi serve.",
      klikkrPoints: [
        {
          title: 'Braccialetto al polso',
          text: 'Dopo il punto vinto fai clic una volta. Due clic annullano un punto. Il braccialetto non disturba il colpo.',
        },
        {
          title: 'Smartwatch o telefono',
          text: "L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono per contare un punto.",
        },
        {
          title: 'Statistiche dopo la partita',
          text: "Klikkr salva ogni partita con i punteggi dei set, la durata e l'andamento. Vedi il tuo bilancio contro ogni avversario.",
        },
      ],
      rulesTitle: 'Come si contano i punti nel tennis',
      rulesIntro:
        "Le regole qui sotto seguono le Rules of Tennis dell'ITF, la federazione mondiale. Dal 2026 la federazione si chiama World Tennis.",
      rules: [
        {
          title: 'I punti in un game',
          paragraphs: [
            'Un game si conta 0, 15, 30, 40 e game. Il punteggio di chi serve si dice per primo.',
            'Sul 40-40 si dice parità. Chi vince il punto successivo ha il vantaggio. Se vince anche il punto dopo, vince il game. Se lo perde, si torna in parità.',
          ],
        },
        {
          title: 'Set',
          paragraphs: [
            'Vince il set chi arriva per primo a 6 game, con 2 game di scarto. Sul 6-6 di solito si gioca il tie-break.',
          ],
        },
        {
          title: 'Tie-break',
          bullets: [
            'Nel tie-break conti 1, 2, 3 e così via. Vince chi arriva per primo a 7 punti, con 2 punti di scarto.',
            'Il primo giocatore serve un punto. Poi ogni giocatore serve a turno due punti.',
            'Ogni 6 punti i giocatori cambiano campo.',
            'Chi ha servito per primo nel tie-break risponde nel primo game del set successivo.',
          ],
        },
        {
          title: 'Partita e super tie-break',
          paragraphs: [
            'Una partita si gioca di solito al meglio dei tre set. Chi vince due set vince la partita. Nei tornei del Grande Slam gli uomini giocano al meglio dei cinque set.',
            "Al posto del terzo set molti giocano un super tie-break, detto anche match tie-break. Si gioca a 10 punti, con 2 punti di scarto. Dal 2022 in tutti e quattro i tornei del Grande Slam un tie-break a 10 punti decide l'ultimo set, se si arriva sul 6-6.",
          ],
        },
        {
          title: 'Servizio',
          bullets: [
            "Un giocatore serve per tutto un game. Nel game successivo serve l'avversario.",
            'Il primo punto di ogni game si serve da destra. Poi si cambia lato a ogni punto.',
            'Hai due tentativi. Se la palla tocca la rete e cade nel rettangolo giusto, il servizio si ripete.',
          ],
        },
        {
          title: 'Cambio di campo',
          paragraphs: [
            'I giocatori cambiano campo dopo il primo, il terzo e il quinto game del set, e poi dopo ogni game dispari.',
          ],
        },
        {
          title: 'Doppio',
          paragraphs: [
            'Nel doppio tutti e quattro i giocatori servono a turno un game ciascuno. Prima di ogni set ogni coppia decide chi serve per primo.',
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        'Al circolo il tempo di campo è spesso poco. Queste varianti sono comuni nel tennis amatoriale, e Klikkr le conta tutte.',
      variants: [
        {
          title: 'Senza vantaggi (no-ad o killer point)',
          text: 'Sul 40-40 decide un solo punto. Chi risponde sceglie il lato. Nel doppio misto risponde il giocatore dello stesso sesso di chi serve. Così i game sono più corti.',
        },
        {
          title: 'Un set',
          text: "Per un'ora di campo spesso basta un set. In Klikkr scegli uno, tre o cinque set.",
        },
        {
          title: 'Set corti a 4 game',
          text: 'Il set si gioca a 4 game. Il regolamento ITF prevede questa variante: sul 4-4 si gioca il tie-break.',
        },
        {
          title: 'Super tie-break al posto del terzo set',
          text: "Se si è a un set pari, decide un tie-break a 10 punti. È comune nel doppio e in molti campionati a squadre, come l'Interclub.",
        },
      ],
      faq: [
        {
          q: 'Perché nel tennis si conta 15, 30, 40?',
          a: "L'origine non è documentata con certezza. Una spiegazione diffusa è un orologio diviso in quarti d'ora: 15, 30, 45 e 60 per il game. Col tempo il 45 è diventato 40.",
        },
        {
          q: 'Come funziona il tie-break nel tennis?',
          a: 'Sul 6-6 nel set conti 1, 2, 3 e così via. Chi arriva per primo a 7 punti con 2 punti di scarto vince il set 7-6. Il primo giocatore serve un punto, poi ogni giocatore serve a turno due punti.',
        },
        {
          q: "Cos'è il super tie-break nel tennis?",
          a: 'È un tie-break a 10 punti al posto del terzo set. Vince chi arriva per primo a 10 punti con 2 punti di scarto.',
        },
        {
          q: 'Cosa vuol dire parità nel tennis?',
          a: 'Parità vuol dire che il punteggio è 40-40. Chi poi vince due punti di fila vince il game.',
        },
        {
          q: 'Esiste un conta punti da polso per il tennis?',
          a: "Sì. Il braccialetto Klikkr conta con un clic, l'app sul telefono calcola game, set e tie-break. In alternativa uno smartwatch fa da Klikkr.",
        },
      ],
      source: {
        label: 'World Tennis (ITF), Rules of Tennis',
        url: 'https://www.world.tennis/en/about-us/governance/rules-and-regulations/',
      },
    },

    squash: {
      name: 'Squash',
      seoTitle: 'Contapunti squash e regole dello squash: PAR 11 spiegato',
      seoDescription:
        'Regole dello squash in parole semplici: PAR 11, servizio, let e stroke, English scoring. Con Klikkr conti i punti con un clic al polso.',
      h1: 'Contapunti squash: Klikkr conta la tua partita',
      lead: "Lo squash è veloce, e dopo uno scambio lungo il punteggio si dimentica in fretta. Con Klikkr fai clic sul braccialetto dopo ogni punto. L'app conta con il PAR 11 o con il vecchio sistema e mostra il punteggio in grande sul vetro.",
      klikkrTitle: 'Come conta Klikkr nello squash',
      klikkrIntro:
        "Klikkr conosce i sistemi di punteggio dello squash: PAR 11, PAR 15 e English scoring (il punteggio all'inglese) a 9 punti. Prima della partita scegli il sistema e il numero di game. L'app mostra chi serve.",
      klikkrPoints: [
        {
          title: 'Braccialetto al polso',
          text: 'Chi vince lo scambio fa clic una volta. Due clic annullano un punto. Così la racchetta resta in mano.',
        },
        {
          title: 'Telefono sul vetro',
          text: 'Con il Klikkr Glass Mount il telefono si fissa alla parete di vetro del campo. Così vedi il punteggio durante il gioco.',
        },
        {
          title: 'Smartwatch o telefono',
          text: "L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono.",
        },
      ],
      rulesTitle: 'Regole dello squash: come si contano i punti',
      rulesIntro:
        'Le regole qui sotto seguono le Rules of Singles Squash di World Squash, la federazione mondiale.',
      rules: [
        {
          title: 'PAR 11: ogni scambio vale un punto',
          paragraphs: [
            'Chi vince uno scambio prende un punto, non importa chi ha servito. Un game si gioca a 11 punti.',
            'Sul 10-10 il game continua finché un giocatore ha 2 punti di scarto.',
          ],
        },
        {
          title: 'Partita',
          paragraphs: [
            'Una partita si gioca di solito al meglio dei cinque game. Chi vince tre game vince la partita. Nei club si gioca spesso fino a due game vinti.',
          ],
        },
        {
          title: 'Servizio',
          bullets: [
            'Chi vince lo scambio serve il punto successivo.',
            'Chi ottiene il servizio sceglie il lato. Se vince il punto, cambia lato per il servizio successivo.',
            'Hai un solo tentativo. Nello squash la seconda battuta non esiste.',
            "La palla deve colpire la parete frontale tra la linea di servizio e la linea di out. Poi deve cadere nel quarto posteriore dall'altra parte, a meno che l'avversario non la giochi al volo.",
            'Al servizio almeno una parte di un piede tocca il pavimento dentro il box di servizio. Il piede non deve toccare la linea.',
            'Nel primo game si fa girare la racchetta per decidere chi serve. In ogni altro game serve per primo chi ha vinto il game precedente.',
          ],
        },
        {
          title: 'Let e stroke',
          paragraphs: [
            "Se l'avversario ti ostacola nel colpo, puoi chiedere un let. Con un let lo scambio si ripete. C'è un let solo se avresti potuto ribattere la palla.",
            "Se senza ostacolo avresti fatto un colpo vincente, c'è uno stroke. C'è uno stroke anche se avresti potuto ribattere la palla e l'avversario non ha cercato di farti spazio. Con uno stroke il punto è tuo.",
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        "Nei club non si gioca sempre con il PAR 11. Queste varianti sono diffuse. Le imposti nell'app prima della partita.",
      variants: [
        {
          title: 'English scoring a 9',
          text: "Solo chi serve può fare punto. Se chi risponde vince lo scambio, prende solo il servizio. Un game si gioca a 9 punti. Sull'8-8 chi risponde sceglie se si gioca fino a 9 o fino a 10.",
        },
        {
          title: 'PAR 15',
          text: 'Come il PAR 11, ma a 15 punti. È una variante più vecchia e oggi si gioca di rado.',
        },
        {
          title: 'Al meglio dei tre game',
          text: 'Chi vince due game vince la partita. Ci sta in una prenotazione breve del campo.',
        },
        {
          title: 'Due servizi come regola della casa',
          text: 'Alcuni amatori permettono un secondo servizio. Non è una regola ufficiale, ma Klikkr può contarlo lo stesso.',
        },
      ],
      faq: [
        {
          q: 'Come si contano i punti nello squash?',
          a: 'Oggi di solito con il PAR 11: ogni scambio vale un punto. Un game si gioca a 11, sul 10-10 servono 2 punti di scarto. Chi vince tre game vince la partita.',
        },
        {
          q: "Nello squash c'è la seconda battuta?",
          a: "No. Nello squash hai un solo tentativo. Se il servizio è fallo, il punto va all'avversario.",
        },
        {
          q: "Che differenza c'è tra let e stroke?",
          a: 'Con un let lo scambio si ripete. Con uno stroke il giocatore ostacolato prende il punto.',
        },
        {
          q: "Cos'è l'English scoring nello squash?",
          a: 'È un sistema di punteggio più vecchio. Solo chi serve può fare punto, e un game si gioca a 9 punti. Klikkr può contare anche così.',
        },
        {
          q: 'Come vedo il punteggio durante una partita di squash?',
          a: "Con il Klikkr Glass Mount il tuo telefono si fissa alla parete di vetro. L'app mostra il punteggio con numeri grandi, e tu conti con un clic al polso.",
        },
      ],
      source: {
        label: 'World Squash, Rules of Singles Squash',
        url: 'https://www.worldsquash.sport/',
      },
    },

    badminton: {
      name: 'Badminton',
      seoTitle: 'Contapunti badminton: regole del badminton e come si conta',
      seoDescription:
        'Regole del badminton in parole semplici: punteggio a 21, servizio, doppio e il nuovo sistema a 15 punti dal 2027. Klikkr conta con un clic.',
      h1: 'Contapunti badminton: Klikkr conta la tua partita',
      lead: "Nel badminton ogni scambio vale un punto, e il lato del servizio dipende dal punteggio. Con Klikkr fai clic sul braccialetto dopo ogni punto. L'app conta il set e mostra chi serve e da quale lato.",
      klikkrTitle: 'Come conta Klikkr nel badminton',
      klikkrIntro:
        'Klikkr conta il badminton a 21, 15 o 11 punti, con 2 punti di scarto e, se vuoi, con un limite massimo a 30. Ogni scambio vale un punto, e chi lo vince serve il punto successivo.',
      klikkrPoints: [
        {
          title: 'Braccialetto al polso',
          text: 'Dopo lo scambio vinto fai clic una volta. Due clic annullano un punto. Il braccialetto è leggero e non disturba il colpo.',
        },
        {
          title: 'Smartwatch o telefono',
          text: "L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono.",
        },
        {
          title: 'Torneo in palestra',
          text: "Con tre o più giocatori Klikkr crea un calendario. Tra una partita e l'altra vedi la classifica.",
        },
      ],
      rulesTitle: 'Regole del badminton: come si conta',
      rulesIntro:
        'Le regole qui sotto seguono le Laws of Badminton della BWF, la federazione mondiale.',
      rules: [
        {
          title: 'Punti e set',
          bullets: [
            'Ogni scambio vale un punto, non importa chi ha servito.',
            'Un set si gioca a 21 punti. Sul 20-20 servono 2 punti di scarto.',
            'Sul 29-29 decide il punto successivo. Chi arriva a 30 punti vince il set.',
          ],
        },
        {
          title: 'Partita',
          paragraphs: [
            'Una partita si gioca al meglio dei tre set. Chi vince due set vince la partita.',
          ],
        },
        {
          title: 'Servizio',
          bullets: [
            'Chi vince lo scambio serve il punto successivo.',
            "Se il tuo punteggio è pari, servi dall'area di servizio destra. Se è dispari, servi da quella sinistra.",
            "Il servizio va in diagonale nell'area di servizio opposta. Hai un solo tentativo.",
          ],
        },
        {
          title: 'Servizio nel doppio',
          paragraphs: [
            "I compagni si scambiano l'area di servizio solo quando la loro coppia vince un punto sul proprio servizio. Se la coppia al servizio perde lo scambio, il servizio passa agli avversari, e nessuno cambia area.",
          ],
        },
        {
          title: 'Pause e cambio di campo',
          bullets: [
            "Quando un giocatore o una coppia arriva a 11 punti, c'è una pausa di massimo 60 secondi.",
            "Tra un set e l'altro c'è una pausa di massimo 2 minuti.",
            'I giocatori cambiano campo dopo ogni set. Nel terzo set cambiano anche quando un giocatore o una coppia arriva a 11 punti.',
          ],
        },
        {
          title: 'Novità dal 2027: tre set a 15 punti',
          paragraphs: [
            'Ad aprile 2026 la BWF ha approvato un nuovo sistema di punteggio. Dal 4 gennaio 2027 un set si gioca a 15 punti invece che a 21. Sul 14-14 servono 2 punti di scarto, sul 20-20 decide il punto successivo. La pausa è allora a 8 punti in ogni set. Nel terzo set i giocatori cambiano campo anche quando si arriva a 8 punti.',
            'Fino ad allora vale il sistema a 21 punti. Klikkr conta set a 21 e a 15 punti.',
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        "In palestra il tempo è spesso poco. Queste varianti sono diffuse nel badminton amatoriale. Le imposti nell'app prima della partita.",
      variants: [
        {
          title: 'Set a 15 o 11 punti',
          text: "I set più corti stanno meglio in un'ora di palestra. Klikkr conta a 21, 15 o 11 punti.",
        },
        {
          title: 'Un set',
          text: 'Per cambi veloci in palestra giocate un solo set.',
        },
        {
          title: 'Senza 2 punti di scarto',
          text: 'Il set finisce esattamente al punteggio da raggiungere, per esempio sul 21-20. Così si risparmia tempo, se molti giocatori aspettano il campo.',
        },
        {
          title: 'Senza limite massimo',
          text: 'Alcuni gruppi sul 20-20 continuano a giocare finché un giocatore ha 2 punti di scarto. In Klikkr disattivi il limite a 30.',
        },
      ],
      faq: [
        {
          q: 'A quanti punti si gioca a badminton?',
          a: 'Un set si gioca a 21 punti con 2 punti di scarto, al massimo fino a 30. Dal 4 gennaio 2027 vale ufficialmente un nuovo sistema con set a 15 punti.',
        },
        {
          q: 'Da quale lato si serve nel badminton?',
          a: "Se il tuo punteggio è pari, da destra. Se è dispari, da sinistra. Il servizio va in diagonale nell'area opposta.",
        },
        {
          q: 'Nel badminton si fa punto anche quando non si serve?',
          a: 'Sì. Dal 2006 ogni scambio vale un punto, non importa chi ha servito. Prima poteva fare punto solo chi serviva.',
        },
        {
          q: 'Cosa cambia nel badminton nel 2027?',
          a: 'Dal 4 gennaio 2027 i set si giocano a 15 punti invece che a 21. Sul 14-14 servono 2 punti di scarto, al massimo fino a 21.',
        },
        {
          q: 'Esiste un contapunti da polso per il badminton?',
          a: "Sì. Il braccialetto Klikkr conta con un clic, l'app sul telefono calcola il set e mostra chi serve.",
        },
      ],
      source: {
        label: 'BWF, Laws of Badminton',
        url: 'https://corporate.bwfbadminton.com/statutes/',
      },
    },

    tableTennis: {
      name: 'Tennistavolo',
      seoTitle: 'Contapunti ping pong e regole del tennistavolo spiegate',
      seoDescription:
        'Regole del tennistavolo e del ping pong: set a 11, cambio di battuta, doppio e vecchia regola dei 21 punti. Con Klikkr conti i punti con un clic.',
      h1: 'Contapunti tennistavolo e ping pong: Klikkr conta la tua partita',
      lead: "Nel tennistavolo la battuta cambia ogni due punti, e dal 10-10 dopo ogni punto. Con Klikkr fai clic sul braccialetto dopo ogni punto. L'app conta i set e mostra chi batte.",
      klikkrTitle: 'Come conta Klikkr nel tennistavolo',
      klikkrIntro:
        "Klikkr conta il tennistavolo a 11 o 21 punti, su uno, tre o cinque set. L'app cambia la battuta secondo la regola scelta. Dal 10-10 la cambia dopo ogni punto.",
      klikkrPoints: [
        {
          title: 'Braccialetto al polso',
          text: 'Dopo il punto vinto fai clic una volta. Due clic annullano un punto. Il braccialetto è leggero e non disturba il colpo.',
        },
        {
          title: 'Smartwatch o telefono',
          text: "L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono.",
        },
        {
          title: 'Statistiche dopo la partita',
          text: 'Klikkr salva ogni partita con i punteggi dei set e la durata. Vedi il tuo bilancio contro ogni avversario.',
        },
      ],
      rulesTitle: 'Regole del tennistavolo: come si contano i punti',
      rulesIntro:
        "Le regole qui sotto seguono le Laws of Table Tennis dell'ITTF, la federazione mondiale.",
      rules: [
        {
          title: 'Punti e set',
          bullets: [
            'Ogni scambio vale un punto.',
            'Vince il set chi arriva per primo a 11 punti.',
            'Sul 10-10 il set continua finché un giocatore ha 2 punti di scarto.',
          ],
        },
        {
          title: 'Partita',
          paragraphs: [
            'Una partita si gioca su un numero dispari di set, di solito cinque o sette. Vince la partita chi vince per primo tre o quattro set. Tra amatori si gioca spesso fino a due set vinti.',
          ],
        },
        {
          title: 'Cambio di battuta',
          bullets: [
            "Ogni giocatore batte due volte di fila, poi la battuta passa all'avversario.",
            'Dal 10-10 la battuta cambia dopo ogni punto.',
            'Chi ha battuto per primo in un set risponde per primo nel set successivo.',
          ],
        },
        {
          title: 'Battuta nel tennistavolo: come si fa',
          bullets: [
            'La palla sta sul palmo della mano, aperto e piatto. La lanci in verticale per almeno 16 centimetri.',
            "Colpisci la palla dietro la linea di fondo e sopra l'altezza del tavolo.",
            "La palla rimbalza prima nella tua metà del tavolo e poi in quella dell'avversario.",
            'Se in battuta la palla tocca la rete e cade nel modo giusto, la battuta si ripete.',
          ],
        },
        {
          title: 'Doppio',
          paragraphs: [
            "Nel doppio la battuta va dalla metà destra in diagonale nella metà destra dell'avversario. I compagni colpiscono la palla a turno.",
            'A ogni cambio di battuta chi prima rispondeva diventa battitore. Così tutti e quattro i giocatori battono a turno.',
          ],
        },
        {
          title: 'Cambio di campo',
          paragraphs: [
            "I giocatori cambiano campo dopo ogni set. Nell'ultimo set possibile cambiano anche quando un giocatore arriva a 5 punti.",
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        "Al tavolo in cantina o al club valgono spesso regole proprie. Queste varianti sono diffuse. Le imposti nell'app prima della partita.",
      variants: [
        {
          title: 'Vecchia regola: 21 punti',
          text: 'Fino al 2001 un set si giocava a 21 punti, e ogni giocatore batteva cinque volte di fila. Molti amatori giocano ancora così.',
        },
        {
          title: 'Uno o tre set',
          text: 'Per cambi veloci giocate un solo set o fino a due set vinti.',
        },
        {
          title: 'Torneo alla serata del club',
          text: "Con tre o più giocatori Klikkr crea un calendario, per esempio tutti contro tutti. Tra una partita e l'altra vedi la classifica.",
        },
        {
          title: 'Regola di battuta personalizzata',
          text: 'In Klikkr imposti quante battute ha ogni giocatore, per esempio due o cinque.',
        },
      ],
      faq: [
        {
          q: 'A quanti punti si gioca a ping pong?',
          a: 'Un set si gioca a 11 punti. Sul 10-10 servono 2 punti di scarto. Fino al 2001 un set si giocava a 21 punti.',
        },
        {
          q: 'Quante volte si batte nel tennistavolo?',
          a: 'Ogni giocatore batte due volte di fila. Dal 10-10 la battuta cambia dopo ogni punto.',
        },
        {
          q: 'Nel ping pong la battuta va fatta in diagonale?',
          a: "Solo nel doppio. Lì la battuta va dalla metà destra alla metà destra dell'avversario. Nel singolo la palla può rimbalzare ovunque nella metà dell'avversario.",
        },
        {
          q: 'Cosa succede se la battuta tocca la rete?',
          a: "Se poi la palla cade nel modo giusto nella metà dell'avversario, la battuta si ripete. Nessuno fa punto.",
        },
        {
          q: 'Esiste un contapunti per il ping pong che mostra chi batte?',
          a: "Sì. L'app Klikkr mostra dopo ogni punto chi batte. Conti con un clic al polso o con uno swipe sul telefono.",
        },
      ],
      source: {
        label: 'ITTF, Laws of Table Tennis',
        url: 'https://documents.ittf.sport/',
      },
    },

    pickleball: {
      name: 'Pickleball',
      seoTitle: 'Regole del pickleball e contapunti: come si contano i punti',
      seoDescription:
        'Regole del pickleball in parole semplici: side out, 0-0-2, servizio, kitchen e rally scoring. Con Klikkr conti i punti con un clic al polso.',
      h1: 'Contapunti pickleball: Klikkr conta la tua partita',
      lead: "Nel doppio di pickleball chi serve annuncia tre numeri prima di ogni servizio, per esempio «4-2-1». Chi gioca da poco perde presto il filo. Con Klikkr fai clic sul braccialetto dopo ogni scambio. L'app conta con il side out, dove fa punto solo chi serve, e con server 1 e server 2, cioè primo e secondo battitore.",
      klikkrTitle: 'Come conta Klikkr nel pickleball',
      klikkrIntro:
        "Klikkr conosce il punteggio side out con server 1 e server 2, compreso l'inizio sullo 0-0-2. Prima della partita scegli se giocate con il side out o con il rally scoring, dove ogni scambio vale un punto, e a quanti punti.",
      klikkrPoints: [
        {
          title: 'Braccialetto al polso',
          text: "Chi vince lo scambio fa clic una volta. Klikkr decide se c'è un punto o un cambio di servizio.",
        },
        {
          title: 'Smartwatch o telefono',
          text: "L'Apple Watch o un orologio Wear OS diventa un Klikkr. Senza orologio fai swipe verso l'alto sul telefono.",
        },
        {
          title: 'Tabellone',
          text: 'Un secondo telefono mostra il punteggio in grande. Il collegamento passa via Bluetooth, senza internet.',
        },
      ],
      rulesTitle: 'Regole del pickleball: come si contano i punti',
      rulesIntro:
        "Le regole qui sotto seguono l'Official Rulebook di USA Pickleball.",
      rules: [
        {
          title: 'Punteggio side out',
          paragraphs: [
            'Solo la squadra al servizio può fare punto. Se la squadra in risposta vince lo scambio, non prende un punto ma il servizio. Questo si chiama side out.',
            'Un game si gioca a 11 punti, con 2 punti di scarto. Nei tornei ci sono anche game a 15 o 21 punti.',
          ],
        },
        {
          title: 'Partita',
          paragraphs: [
            'Nei tornei di solito vince chi vince per primo due game a 11 punti.',
          ],
        },
        {
          title: "L'annuncio nel doppio: tre numeri",
          bullets: [
            'Prima di ogni servizio chi serve annuncia il punteggio: prima i punti della propria squadra, poi quelli degli avversari, poi il numero del server, 1 o 2.',
            'Nel doppio servono entrambi i compagni, prima che il servizio passi agli avversari. Prima serve il server 1, dopo uno scambio perso il server 2.',
            "Eccezione a inizio game: la prima squadra al servizio ha un solo server. Per questo ogni game inizia con l'annuncio «0-0-2».",
          ],
        },
        {
          title: 'Servizio',
          bullets: [
            "Il servizio va in diagonale nell'area di servizio opposta.",
            'Se servi la palla al volo, senza farla rimbalzare, servi dal basso e la colpisci sotto la vita. Con il drop serve, il servizio dopo un rimbalzo, prima fai rimbalzare la palla. In quel caso questo limite non vale.',
            "Nel doppio, dopo un side out, il servizio parte sempre dall'area destra. Nel singolo servi da destra se il tuo punteggio è pari, da sinistra se è dispari.",
            "Hai un tentativo. Se la palla tocca la rete e cade nell'area giusta, è valida e si continua a giocare.",
          ],
        },
        {
          title: 'Regola dei due rimbalzi',
          paragraphs: [
            'Chi risponde deve giocare il servizio dopo il rimbalzo. Poi anche la squadra al servizio deve lasciar rimbalzare la palla una volta. Solo dal terzo colpo si può giocare la palla al volo.',
          ],
        },
        {
          title: 'Kitchen: la zona di non volée',
          paragraphs: [
            'La zona a ridosso della rete si chiama zona di non volée (non-volley zone) o kitchen. Si estende per 7 piedi dalla rete, circa 2,13 metri. Chi sta nella kitchen o ne tocca la linea non può giocare la palla al volo. È fallo anche se dopo una volée lo slancio ti porta nella kitchen.',
          ],
        },
      ],
      variantsTitle: 'Varianti per amatori e club',
      variantsIntro:
        "Nel pickleball amatoriale non si conta sempre con il side out. Queste varianti sono diffuse. Le imposti nell'app prima della partita.",
      variants: [
        {
          title: 'Rally scoring',
          text: 'Ogni scambio vale un punto, non importa chi serve. USA Pickleball ammette questo sistema in via provvisoria: nel singolo da maggio 2024, nel doppio dal 2025. Spesso si gioca allora a 15 o 21 punti.',
        },
        {
          title: 'Un game invece di due su tre',
          text: 'Se avete poco tempo in palestra, giocate un solo game a 11 punti.',
        },
        {
          title: 'Game a 15 o 21',
          text: 'Game più lunghi sono possibili anche con il side out. Klikkr conta a 11, 15, 21 o a un numero a tua scelta.',
        },
        {
          title: 'Singolo',
          text: "Nel singolo c'è un solo server per lato. Se chi serve perde lo scambio, segue subito un side out.",
        },
      ],
      faq: [
        {
          q: 'Come si contano i punti nel pickleball?',
          a: 'Solo la squadra al servizio può fare punto. Un game si gioca a 11 punti con 2 punti di scarto. Nel doppio chi serve annuncia tre numeri: i propri punti, i punti degli avversari e il numero del server.',
        },
        {
          q: 'Perché nel pickleball si inizia con 0-0-2?',
          a: "A inizio game la prima squadra al servizio ha un solo server. L'annuncio «2» indica che dopo il primo scambio perso il servizio passa agli avversari.",
        },
        {
          q: "Cos'è la kitchen nel pickleball?",
          a: 'È la zona a ridosso della rete, profonda circa 2,13 metri. Chi ci sta dentro o ne tocca la linea non può giocare la palla al volo.',
        },
        {
          q: "Cos'è il rally scoring nel pickleball?",
          a: 'Ogni scambio vale un punto, non importa chi serve. USA Pickleball lo ammette in via provvisoria: nel singolo dal 2024, nel doppio dal 2025. In molti tornei ufficiali però vale ancora il side out.',
        },
        {
          q: 'Esiste un contapunti da polso per il pickleball?',
          a: "Sì. Il braccialetto Klikkr conta con un clic. L'app decide se c'è un punto, un cambio di server o un side out.",
        },
      ],
      source: {
        label: 'USA Pickleball, Official Rulebook',
        url: 'https://usapickleball.org/rules/',
      },
    },
  },
}
