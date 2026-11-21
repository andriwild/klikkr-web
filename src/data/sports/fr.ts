import type { SportsLocale } from './types'

export const fr: SportsLocale = {
  ui: {
    breadcrumbHome: 'Klikkr',
    ctaOrder: 'Commander Klikkr',
    appFree:
      'L’app est gratuite. Elle compte aussi sans bracelet, en glissant le doigt sur le téléphone.',
    sourceLabel: 'Source :',
    rulesAsOf: 'État des règles : novembre 2026.',
    rulesScreenshotAlt:
      'App Klikkr : choisir le sport et régler les règles, par exemple les sets, les jeux par set et l’égalité',
    faqTitle: 'Questions fréquentes',
    otherSportsTitle: 'Klikkr compte aussi ces sports',
    ctaBandTitle: 'Compter sans interrompre le jeu',
    ctaBandText:
      'Un clic au poignet, et le point est enregistré. L’app connaît les règles, indique qui sert et enregistre chaque match dans les statistiques.',
    sportsNav: 'Sports',
  },

  sports: {
    padel: {
      name: 'Padel',
      seoTitle: 'Compteur de points padel & règles du padel expliquées',
      seoDescription:
        'Règles du padel : comptage, point en or (golden point), star point, jeu décisif et service. Avec Klikkr, tu comptes d’un clic au poignet.',
      h1: 'Compteur de points padel : Klikkr compte ton match',
      lead: 'Au padel, tu joues à quatre. Après trois longs échanges, plus personne ne sait si c’est 30-40 ou égalité. Avec Klikkr, tu cliques sur le bracelet après chaque point. L’app continue de compter selon les règles du padel et affiche le score en grand sur le téléphone.',
      klikkrTitle: 'Comment Klikkr compte les points au padel',
      klikkrIntro:
        'Klikkr connaît le comptage du padel avec les jeux, les sets et le jeu décisif (tie-break). Avant le match, tu choisis comment se joue l’égalité : avec avantage, avec point en or (golden point) ou avec star point. Dans chaque jeu, l’app indique qui sert, même en double.',
      klikkrPoints: [
        {
          title: 'Un bracelet par équipe',
          text: 'Qui gagne le point clique une fois. Deux clics annulent un point. Tu n’as pas besoin de poser ta raquette.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'Pas de bracelet sous la main ? L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone.',
        },
        {
          title: 'Tableau de score sur la vitre',
          text: 'Un deuxième téléphone affiche le score en grand, par exemple sur la vitre. La connexion passe par Bluetooth, sans internet.',
        },
      ],
      rulesTitle: 'Règles du padel : comment compter les points',
      rulesIntro:
        'Au padel, on compte presque comme au tennis. La grande différence, c’est l’égalité : il en existe trois variantes. Les règles ci-dessous suivent le règlement de la fédération internationale FIP.',
      rules: [
        {
          title: 'Les points dans un jeu',
          paragraphs: [
            'On compte un jeu ainsi : 0, 15, 30, 40 et jeu. À 40, qui marque le point suivant gagne le jeu.',
            'À 40-40, on parle d’égalité. La suite dépend de la variante choisie.',
          ],
        },
        {
          title: 'Égalité : avantage, point en or ou star point',
          bullets: [
            'Avantage : comme au tennis. Après l’égalité, qui gagne deux points de suite gagne le jeu.',
            'Point en or (golden point) : à 40-40, un seul point décide. L’équipe qui reçoit choisit de recevoir le service à droite ou à gauche. C’est la règle la plus courante en loisir et en club.',
            'Star point : à 40-40, on joue d’abord avec avantage. À la troisième égalité, un seul point décide : le star point. Depuis la saison 2026, c’est la norme dans les grands tournois professionnels de la FIP.',
          ],
        },
        {
          title: 'Set et jeu décisif (tie-break)',
          paragraphs: [
            'Le premier à 6 jeux gagne le set, avec 2 jeux d’écart. À 6-6, on joue un jeu décisif.',
            'Dans le jeu décisif, tu comptes 1, 2, 3 et ainsi de suite. Le premier à 7 points gagne, avec 2 points d’écart. Les équipes changent de côté tous les 6 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Un match se joue au meilleur des trois sets. Qui gagne deux sets gagne le match.',
          ],
        },
        {
          title: 'Règles du service au padel',
          bullets: [
            'Le service se fait par en dessous. Tu fais rebondir la balle derrière la ligne de service et tu la frappes au plus à hauteur de la taille.',
            'La balle doit tomber en diagonale dans le carré de service adverse. Tu as deux essais.',
            'Le premier service d’un jeu se fait à droite. Ensuite, le côté change après chaque point.',
            'Si la balle touche le filet et tombe dans le bon carré, on rejoue le service.',
            'Si la balle touche le grillage après le rebond dans le carré de service, le service est faute. Si elle touche la vitre, il est bon.',
          ],
        },
        {
          title: 'Service en double',
          paragraphs: [
            'Un joueur sert pendant tout un jeu. Au jeu suivant, l’autre équipe sert. Quand c’est de nouveau le tour de ton équipe, ton partenaire sert. Ainsi, les quatre joueurs servent à tour de rôle.',
            'Avant chaque set, chaque équipe décide qui sert en premier. Cet ordre vaut jusqu’à la fin du set.',
            'Dans le jeu décisif, le joueur suivant sert un point. Ensuite, chaque joueur sert deux points à tour de rôle.',
          ],
        },
        {
          title: 'Murs et grillage',
          bullets: [
            'Après ta frappe, la balle doit passer le filet et rebondir d’abord dans le camp adverse. Si elle touche avant un mur ou le grillage du côté adverse, tu perds le point. Tu as le droit de jouer la balle contre la vitre de ton propre côté.',
            'Après le rebond, la balle peut toucher la vitre et le grillage. L’adversaire peut ensuite la jouer, tant qu’elle ne touche pas le sol une deuxième fois.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'Tous les matchs ne sont pas des tournois. Ces variantes sont courantes au padel loisir. Tu les règles dans l’app avant le match.',
      variants: [
        {
          title: 'Point en or au lieu de l’avantage',
          text: 'La plupart des clubs jouent avec le point en or. Les jeux sont ainsi plus courts, et chaque égalité est pleine de suspense.',
        },
        {
          title: 'Un set au lieu de trois',
          text: 'Pour une heure de terrain, un set suffit souvent. Dans Klikkr, tu choisis un ou trois sets.',
        },
        {
          title: 'Sets courts en 4 jeux',
          text: 'Avec des sets en 4 jeux, plusieurs matchs tiennent dans une heure. Klikkr compte aussi des sets en 2, 4 ou 6 jeux.',
        },
        {
          title: 'Tournoi entre amis',
          text: 'Avec trois joueurs ou plus, Klikkr crée un calendrier, par exemple chacun contre chacun. Entre les matchs, tu vois le classement.',
        },
      ],
      faq: [
        {
          q: 'Comment compter les points au padel ?',
          a: 'Comme au tennis : 0, 15, 30, 40, jeu. Un set se joue en 6 jeux avec 2 jeux d’écart. À 6-6, on joue un jeu décisif en 7 points. Qui gagne deux sets gagne le match.',
        },
        {
          q: 'Qu’est-ce que le point en or (golden point) au padel ?',
          a: 'À 40-40, un seul point décide du jeu. L’équipe qui reçoit choisit le côté où elle reçoit le service.',
        },
        {
          q: 'Qu’est-ce que le star point au padel ?',
          a: 'Une règle d’égalité en vigueur depuis la saison 2026 dans les grands tournois professionnels. On joue d’abord avec avantage. À la troisième égalité, un seul point décide.',
        },
        {
          q: 'Le service peut-il toucher le grillage au padel ?',
          a: 'Non. Si le service touche le grillage après le rebond dans le carré, il est faute. Il peut toucher la vitre.',
        },
        {
          q: 'Existe-t-il un compteur de points padel numérique pour le poignet ?',
          a: 'Oui. Le bracelet Klikkr est un compteur de points pour le poignet. Un clic compte un point. L’app sur le téléphone calcule les jeux, les sets et le jeu décisif.',
        },
        {
          q: 'Faut-il un bracelet pour utiliser l’app ?',
          a: 'Non. L’app Klikkr est gratuite et compte aussi en glissant le doigt sur le téléphone. Avec le bracelet, tu n’as pas besoin de toucher le téléphone pendant le jeu.',
        },
      ],
      source: {
        label: 'FIP, Rules of Padel',
        url: 'https://www.padelfip.com/',
      },
    },

    tennis: {
      name: 'Tennis',
      seoTitle: 'Compteur de points tennis : comment compter les points',
      seoDescription:
        'Comment compter les points au tennis : 15, 30, 40, égalité, jeu décisif et super tie-break. Avec Klikkr, tu comptes d’un clic au poignet.',
      h1: 'Compteur de points tennis : Klikkr compte ton match',
      lead: 'Le tennis a le comptage le plus déroutant des sports de raquette : 15, 30, 40, égalité, avantage, jeu décisif. Avec Klikkr, tu cliques sur le bracelet après chaque point gagné. L’app calcule les jeux et les sets et indique qui sert.',
      klikkrTitle: 'Comment Klikkr compte les points au tennis',
      klikkrIntro:
        'Klikkr connaît le comptage du tennis avec les jeux, les sets et le jeu décisif (tie-break). Avant le match, tu choisis le nombre de sets, les jeux par set et si l’égalité se joue avec ou sans avantage. Après chaque jeu, l’app indique qui sert.',
      klikkrPoints: [
        {
          title: 'Bracelet au poignet',
          text: 'Après un point gagné, tu cliques une fois. Deux clics annulent un point. Le bracelet ne gêne pas ta frappe.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone pour compter un point.',
        },
        {
          title: 'Statistiques après le match',
          text: 'Klikkr enregistre chaque match avec le score des sets, la durée et le déroulé. Tu vois ton bilan contre chaque adversaire.',
        },
      ],
      rulesTitle: 'Comment compter les points au tennis',
      rulesIntro:
        'Les règles ci-dessous suivent les Règles du tennis de la fédération internationale ITF.',
      rules: [
        {
          title: 'Les points dans un jeu',
          paragraphs: [
            'On compte un jeu ainsi : 0, 15, 30, 40 et jeu. On annonce d’abord le score du serveur.',
            'À 40-40, on parle d’égalité. Qui gagne le point suivant a l’avantage. S’il gagne aussi le point d’après, il gagne le jeu. S’il le perd, c’est de nouveau égalité.',
          ],
        },
        {
          title: 'Set',
          paragraphs: [
            'Le premier à 6 jeux gagne le set, avec 2 jeux d’écart. À 6-6, on joue le plus souvent un jeu décisif.',
          ],
        },
        {
          title: 'Jeu décisif (tie-break)',
          bullets: [
            'Dans le jeu décisif, tu comptes 1, 2, 3 et ainsi de suite. Le premier à 7 points gagne, avec 2 points d’écart.',
            'Le premier joueur sert un point. Ensuite, chaque joueur sert deux points à tour de rôle.',
            'Les joueurs changent de côté tous les 6 points.',
            'Qui a servi en premier dans le jeu décisif reçoit au premier jeu du set suivant.',
          ],
        },
        {
          title: 'Match et super tie-break',
          paragraphs: [
            'Un match se joue le plus souvent au meilleur des trois sets. Qui gagne deux sets gagne le match. Dans les tournois du Grand Chelem, les hommes jouent au meilleur des cinq sets.',
            'Au lieu d’un troisième set, beaucoup jouent un super tie-break. Il se joue en 10 points, avec 2 points d’écart. Depuis 2022, dans les quatre tournois du Grand Chelem, un jeu décisif en 10 points tranche le dernier set à 6-6.',
          ],
        },
        {
          title: 'Service',
          bullets: [
            'Un joueur sert pendant tout un jeu. Au jeu suivant, l’adversaire sert.',
            'Le premier point d’un jeu se sert à droite. Ensuite, le côté change après chaque point.',
            'Tu as deux essais. Si la balle touche le filet et tombe dans le bon carré, on rejoue le service.',
          ],
        },
        {
          title: 'Changement de côté',
          paragraphs: [
            'Les joueurs changent de côté après le premier, le troisième et le cinquième jeu d’un set, puis après chaque jeu impair.',
          ],
        },
        {
          title: 'Double',
          paragraphs: [
            'En double, les quatre joueurs servent un jeu chacun, à tour de rôle. Avant chaque set, chaque équipe décide qui sert en premier.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'Sur le terrain du club, le temps est souvent compté. Ces variantes sont courantes au tennis loisir, et Klikkr les compte toutes.',
      variants: [
        {
          title: 'Sans avantage (no-ad)',
          text: 'À 40-40, un seul point décide. Le receveur choisit le côté. Les jeux sont ainsi plus courts.',
        },
        {
          title: 'Un set',
          text: 'Pour une heure de terrain, un set suffit souvent. Dans Klikkr, tu choisis un, trois ou cinq sets.',
        },
        {
          title: 'Sets courts en 4 jeux',
          text: 'Le set se joue en 4 jeux. Le règlement de l’ITF prévoit cette variante. À 4-4, on joue un jeu décisif.',
        },
        {
          title: 'Super tie-break au lieu du troisième set',
          text: 'À un set partout, un jeu décisif en 10 points décide. C’est courant en double et dans beaucoup de ligues interclubs.',
        },
      ],
      faq: [
        {
          q: 'Pourquoi compte-t-on 15, 30, 40 au tennis ?',
          a: 'L’origine n’est pas prouvée. Une explication répandue parle d’une horloge avec des quarts d’heure : 15, 30, 45 et 60 pour le jeu. Avec le temps, 45 est devenu 40.',
        },
        {
          q: 'Comment fonctionne le jeu décisif (tie-break) au tennis ?',
          a: 'À 6-6 dans le set, tu comptes 1, 2, 3 et ainsi de suite. Le premier à 7 points avec 2 points d’écart gagne le set 7-6. Le premier joueur sert un point. Ensuite, chaque joueur sert deux points à tour de rôle.',
        },
        {
          q: 'Qu’est-ce qu’un super tie-break ?',
          a: 'Un jeu décisif en 10 points au lieu d’un troisième set. Le premier à 10 points avec 2 points d’écart gagne.',
        },
        {
          q: 'Que veut dire égalité au tennis ?',
          a: 'Égalité veut dire que le score est de 40-40. Qui gagne ensuite deux points de suite gagne le jeu.',
        },
        {
          q: 'Existe-t-il un compteur de points tennis pour le poignet ?',
          a: 'Oui. Le bracelet Klikkr compte d’un clic. L’app sur le téléphone calcule les jeux, les sets et le jeu décisif. Une montre connectée peut aussi servir de Klikkr.',
        },
      ],
      source: {
        label: 'ITF, Rules of Tennis',
        url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
      },
    },

    squash: {
      name: 'Squash',
      seoTitle: 'Compteur de points squash & règles du squash : PAR 11',
      seoDescription:
        'Règles du squash expliquées simplement : PAR 11, service, let et stroke, comptage à l’anglaise. Avec Klikkr, tu comptes d’un clic au poignet.',
      h1: 'Compteur de points squash : Klikkr compte ton match',
      lead: 'Au squash, tout va vite. Après un long échange, on oublie vite le score. Avec Klikkr, tu cliques sur le bracelet après chaque point. L’app compte en PAR 11 ou selon l’ancien système et affiche le score en grand sur la vitre.',
      klikkrTitle: 'Comment Klikkr compte les points au squash',
      klikkrIntro:
        'Klikkr connaît les systèmes de comptage du squash : PAR 11, PAR 15 et comptage à l’anglaise (English scoring) en 9 points. Avant le match, tu choisis le système et le nombre de jeux. L’app indique qui sert.',
      klikkrPoints: [
        {
          title: 'Bracelet au poignet',
          text: 'Qui gagne l’échange clique une fois. Deux clics annulent un point. Ta raquette reste ainsi dans ta main.',
        },
        {
          title: 'Téléphone sur la vitre',
          text: 'Avec le Klikkr Glass Mount, le téléphone se fixe sur la vitre du court. Tu vois ainsi le score pendant le jeu.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone.',
        },
      ],
      rulesTitle: 'Règles du squash : comment compter les points',
      rulesIntro:
        'Les règles ci-dessous suivent les Rules of Singles Squash de la fédération internationale World Squash.',
      rules: [
        {
          title: 'PAR 11 : chaque échange compte',
          paragraphs: [
            'Le gagnant de chaque échange marque un point, peu importe qui a servi. Un jeu se joue en 11 points.',
            'À 10-10, le jeu continue jusqu’à ce qu’un joueur ait 2 points d’écart.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Un match se joue le plus souvent au meilleur des cinq jeux. Qui gagne trois jeux gagne le match. En club, on joue souvent en deux jeux gagnants.',
          ],
        },
        {
          title: 'Service',
          bullets: [
            'Qui gagne l’échange sert ensuite.',
            'Qui récupère le service choisit le côté. S’il gagne le point, il change de côté pour le service suivant.',
            'Tu n’as qu’un seul essai. Il n’y a pas de deuxième service au squash.',
            'La balle doit toucher le mur frontal entre la ligne de service et la ligne de hors-jeu. Ensuite, elle doit tomber dans le quart arrière du côté opposé, sauf si l’adversaire la joue de volée.',
            'Au service, au moins une partie d’un pied touche le sol dans le carré de service. Le pied ne doit pas toucher la ligne.',
            'Au premier jeu, on fait tourner une raquette pour décider qui sert. À chaque jeu suivant, le gagnant du jeu précédent sert en premier.',
          ],
        },
        {
          title: 'Let et stroke',
          paragraphs: [
            'Si l’adversaire te gêne pendant ta frappe, tu peux demander un let. Sur un let, on rejoue l’échange.',
            'Il y a stroke quand, sans la gêne, tu aurais pu jouer un coup gagnant. Il y a aussi stroke quand l’adversaire n’a pas essayé de te laisser la place. Tu marques alors le point.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'En club, on ne joue pas toujours en PAR 11. Ces variantes sont répandues. Tu les règles dans l’app avant le match.',
      variants: [
        {
          title: 'Comptage à l’anglaise en 9 points',
          text: 'Seul le serveur peut marquer. Si le receveur gagne l’échange, il gagne seulement le service. Un jeu se joue en 9 points. À 8-8, le receveur choisit de jouer en 9 ou en 10 points.',
        },
        {
          title: 'PAR 15',
          text: 'Comme le PAR 11, mais en 15 points. Cette variante est plus ancienne et se joue rarement aujourd’hui.',
        },
        {
          title: 'Au meilleur des trois jeux',
          text: 'Qui gagne deux jeux gagne le match. Ça tient dans une courte réservation de court.',
        },
        {
          title: 'Deux services comme règle maison',
          text: 'Certains joueurs loisir autorisent un deuxième service. Ce n’est pas une règle officielle, mais Klikkr peut quand même le compter.',
        },
      ],
      faq: [
        {
          q: 'Comment compter les points au squash ?',
          a: 'Aujourd’hui, le plus souvent en PAR 11 : chaque échange rapporte un point. Un jeu se joue en 11 points. À 10-10, il faut 2 points d’écart. Qui gagne trois jeux gagne le match.',
        },
        {
          q: 'Y a-t-il un deuxième service au squash ?',
          a: 'Non. Au squash, tu n’as qu’un seul essai. Si le service est faute, le point va à l’adversaire.',
        },
        {
          q: 'Quelle est la différence entre let et stroke ?',
          a: 'Sur un let, on rejoue l’échange. Sur un stroke, le joueur gêné marque le point.',
        },
        {
          q: 'Qu’est-ce que le comptage à l’anglaise (English scoring) au squash ?',
          a: 'Un ancien système de comptage. Seul le serveur peut marquer, et un jeu se joue en 9 points. Klikkr peut aussi compter ainsi.',
        },
        {
          q: 'Comment voir le score au squash ?',
          a: 'Avec le Klikkr Glass Mount, ton téléphone se fixe sur la vitre. L’app affiche le score en grands chiffres, et tu comptes d’un clic au poignet.',
        },
      ],
      source: {
        label: 'World Squash, Rules of Singles Squash',
        url: 'https://www.worldsquash.org/',
      },
    },

    badminton: {
      name: 'Badminton',
      seoTitle: 'Compteur de points badminton & règles du badminton',
      seoDescription:
        'Règles du badminton : comment compter en 21 points, service, double et nouveau système en 15 points dès 2027. Klikkr compte d’un clic au poignet.',
      h1: 'Compteur de points badminton : Klikkr compte ton match',
      lead: 'Au badminton, chaque échange compte, et le côté du service dépend du score. Avec Klikkr, tu cliques sur le bracelet après chaque point. L’app compte le set et indique qui sert, et de quel côté.',
      klikkrTitle: 'Comment Klikkr compte les points au badminton',
      klikkrIntro:
        'Klikkr compte le badminton en 21, 15 ou 11 points, avec 2 points d’écart et, si tu veux, un plafond à 30. Chaque échange rapporte un point, et qui le gagne sert ensuite.',
      klikkrPoints: [
        {
          title: 'Bracelet au poignet',
          text: 'Après un échange gagné, tu cliques une fois. Deux clics annulent un point. Le bracelet est léger et ne gêne pas ta frappe.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone.',
        },
        {
          title: 'Tournoi en salle',
          text: 'Avec trois joueurs ou plus, Klikkr crée un calendrier. Entre les matchs, tu vois le classement.',
        },
      ],
      rulesTitle: 'Règles du badminton : comment compter les points',
      rulesIntro:
        'Les règles ci-dessous suivent les Laws of Badminton de la fédération internationale BWF.',
      rules: [
        {
          title: 'Points et set',
          bullets: [
            'Chaque échange rapporte un point, peu importe qui a servi.',
            'Un set se joue en 21 points. À 20-20, il faut 2 points d’écart.',
            'À 29-29, le point suivant décide. Qui atteint 30 points gagne le set.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Un match se joue au meilleur des trois sets. Qui gagne deux sets gagne le match.',
          ],
        },
        {
          title: 'Service',
          bullets: [
            'Qui gagne l’échange sert ensuite.',
            'Quand ton score est pair, tu sers depuis la zone de service de droite. Quand il est impair, tu sers depuis celle de gauche.',
            'Le service part en diagonale dans la zone de service opposée. Tu as un seul essai.',
          ],
        },
        {
          title: 'Service en double',
          paragraphs: [
            'Les partenaires échangent leur zone de service seulement quand leur équipe gagne un point sur son propre service. Si l’équipe au service perd l’échange, le service passe aux adversaires, et personne ne change de zone.',
          ],
        },
        {
          title: 'Pauses et changement de côté',
          bullets: [
            'Dès qu’un joueur ou une équipe atteint 11 points, il y a une pause de 60 secondes au maximum.',
            'Entre les sets, il y a une pause de 2 minutes au maximum.',
            'Les joueurs changent de côté après chaque set. Dans le troisième set, ils changent aussi dès qu’un joueur ou une équipe atteint 11 points.',
          ],
        },
        {
          title: 'Nouveau dès 2027 : trois sets en 15 points',
          paragraphs: [
            'La BWF a adopté un nouveau système de comptage en avril 2026. Dès le 4 janvier 2027, un set se joue en 15 points au lieu de 21. À 14-14, il faut 2 points d’écart. À 20-20, le point suivant décide. La pause et le changement de côté du troisième set ont alors lieu à 8 points.',
            'D’ici là, le système en 21 points reste en vigueur. Klikkr compte les sets en 21 et en 15 points.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'En salle, le temps est souvent compté. Ces variantes sont répandues au badminton loisir. Tu les règles dans l’app avant le match.',
      variants: [
        {
          title: 'Sets en 15 ou 11 points',
          text: 'Des sets plus courts tiennent mieux dans une heure de salle. Klikkr compte en 21, 15 ou 11 points.',
        },
        {
          title: 'Un set',
          text: 'Pour changer vite de joueurs en salle, on joue un seul set.',
        },
        {
          title: 'Sans 2 points d’écart',
          text: 'Le set s’arrête pile au score visé, par exemple à 21-20. Ça fait gagner du temps quand beaucoup de joueurs attendent le terrain.',
        },
        {
          title: 'Sans plafond',
          text: 'Certains groupes continuent à 20-20 jusqu’à ce qu’un joueur ait 2 points d’écart. Dans Klikkr, tu désactives le plafond à 30.',
        },
      ],
      faq: [
        {
          q: 'Jusqu’à combien de points joue-t-on au badminton ?',
          a: 'Un set se joue en 21 points avec 2 points d’écart, au maximum jusqu’à 30. Dès le 4 janvier 2027, un nouveau système officiel s’applique, avec des sets en 15 points.',
        },
        {
          q: 'De quel côté sert-on au badminton ?',
          a: 'Quand ton score est pair, à droite. Quand il est impair, à gauche. Le service part en diagonale dans la zone opposée.',
        },
        {
          q: 'Peut-on marquer au badminton sans avoir le service ?',
          a: 'Oui. Depuis 2006, chaque échange rapporte un point, peu importe qui a servi. Avant, seul le serveur pouvait marquer.',
        },
        {
          q: 'Qu’est-ce qui change au badminton en 2027 ?',
          a: 'Dès le 4 janvier 2027, les sets se jouent en 15 points au lieu de 21. À 14-14, il faut 2 points d’écart, au maximum jusqu’à 21.',
        },
        {
          q: 'Existe-t-il un compteur de points badminton pour le poignet ?',
          a: 'Oui. Le bracelet Klikkr compte d’un clic. L’app sur le téléphone calcule le set et indique qui sert.',
        },
      ],
      source: {
        label: 'BWF, Laws of Badminton',
        url: 'https://corporate.bwfbadminton.com/statutes/',
      },
    },

    tableTennis: {
      name: 'Tennis de table',
      seoTitle: 'Règles du tennis de table (ping-pong) & compteur de points',
      seoDescription:
        'Règles du tennis de table : manche en 11 points, changement de service, double et ancienne règle des 21 points. Avec Klikkr, tu comptes d’un clic.',
      h1: 'Compteur de points tennis de table : Klikkr compte ton match',
      lead: 'Au tennis de table (ping-pong), le service change tous les deux points, et après chaque point dès 10-10. Avec Klikkr, tu cliques sur le bracelet après chaque point. L’app compte les manches et indique qui sert.',
      klikkrTitle: 'Comment Klikkr compte les points au tennis de table',
      klikkrIntro:
        'Klikkr compte le tennis de table en 11 ou 21 points, en une, trois ou cinq manches. L’app change le service selon la règle choisie. Dès 10-10, le service change après chaque point.',
      klikkrPoints: [
        {
          title: 'Bracelet au poignet',
          text: 'Après un point gagné, tu cliques une fois. Deux clics annulent un point. Le bracelet est léger et ne gêne pas ta frappe.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone.',
        },
        {
          title: 'Statistiques après le match',
          text: 'Klikkr enregistre chaque match avec le score des manches et la durée. Tu vois ton bilan contre chaque adversaire.',
        },
      ],
      rulesTitle: 'Règles du tennis de table : comment compter',
      rulesIntro:
        'Les règles ci-dessous suivent les Laws of Table Tennis de la fédération internationale ITTF.',
      rules: [
        {
          title: 'Points et manche',
          bullets: [
            'Chaque échange rapporte un point.',
            'Le premier à 11 points gagne la manche.',
            'À 10-10, la manche continue jusqu’à ce qu’un joueur ait 2 points d’écart.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'Un match se joue en un nombre impair de manches, le plus souvent cinq ou sept. Qui gagne d’abord trois ou quatre manches, selon le format, gagne le match. En loisir, on joue souvent en deux manches gagnantes.',
          ],
        },
        {
          title: 'Changement de service',
          bullets: [
            'Chaque joueur sert deux fois de suite, puis le service change.',
            'Dès 10-10, le service change après chaque point.',
            'Qui a servi en premier dans une manche reçoit en premier dans la manche suivante.',
          ],
        },
        {
          title: 'Service au tennis de table : comment servir',
          bullets: [
            'La balle repose sur la main ouverte et à plat. Tu la lances verticalement à au moins 16 centimètres de haut.',
            'Tu frappes la balle derrière la ligne de fond et au-dessus du niveau de la table.',
            'La balle rebondit d’abord de ton côté, puis du côté de l’adversaire.',
            'Si la balle touche le filet au service et retombe correctement, on rejoue le service.',
          ],
        },
        {
          title: 'Double',
          paragraphs: [
            'En double, le service part de la moitié droite, en diagonale, vers la moitié droite de l’adversaire. Les partenaires frappent la balle à tour de rôle.',
            'À chaque changement de service, l’ancien receveur devient serveur. Ainsi, les quatre joueurs servent à tour de rôle.',
          ],
        },
        {
          title: 'Changement de côté',
          paragraphs: [
            'Les joueurs changent de côté après chaque manche. Dans la dernière manche possible, ils changent aussi dès qu’un joueur atteint 5 points.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'À la table de la cave ou au club, on joue souvent avec ses propres règles. Ces variantes sont répandues. Tu les règles dans l’app avant le match.',
      variants: [
        {
          title: 'Ancienne règle : 21 points',
          text: 'Jusqu’en 2001, une manche se jouait en 21 points, et chaque joueur servait cinq fois de suite. Beaucoup de parties entre amis se jouent encore ainsi.',
        },
        {
          title: 'Une ou trois manches',
          text: 'Pour tourner vite, on joue une seule manche ou en deux manches gagnantes.',
        },
        {
          title: 'Tournoi à la soirée du club',
          text: 'Avec trois joueurs ou plus, Klikkr crée un calendrier, par exemple chacun contre chacun. Entre les matchs, tu vois le classement.',
        },
        {
          title: 'Ta propre règle de service',
          text: 'Dans Klikkr, tu règles le nombre de services de chaque joueur, par exemple deux ou cinq.',
        },
      ],
      faq: [
        {
          q: 'Jusqu’à combien de points joue-t-on au tennis de table ?',
          a: 'Une manche se joue en 11 points. À 10-10, il faut 2 points d’écart. Jusqu’en 2001, une manche se jouait en 21 points.',
        },
        {
          q: 'Combien de fois sert-on au tennis de table ?',
          a: 'Chaque joueur sert deux fois de suite. Dès 10-10, le service change après chaque point.',
        },
        {
          q: 'Au ping-pong, le service doit-il être en diagonale ?',
          a: 'Seulement en double. Le service part alors de la moitié droite vers la moitié droite de l’adversaire. En simple, la balle peut rebondir n’importe où du côté adverse.',
        },
        {
          q: 'Que se passe-t-il si le service touche le filet ?',
          a: 'Si la balle retombe ensuite correctement du côté adverse, on rejoue le service. Personne ne marque de point.',
        },
        {
          q: 'Existe-t-il un compteur de points tennis de table qui indique le service ?',
          a: 'Oui. L’app Klikkr indique après chaque point qui sert. Tu comptes d’un clic au poignet ou en glissant le doigt sur le téléphone.',
        },
      ],
      source: {
        label: 'ITTF, Laws of Table Tennis',
        url: 'https://documents.ittf.sport/',
      },
    },

    pickleball: {
      name: 'Pickleball',
      seoTitle: 'Compteur de points pickleball & règles du pickleball',
      seoDescription:
        'Règles du pickleball : side out, 0-0-2, service, zone de non-volée (cuisine) et rally scoring. Avec Klikkr, tu comptes d’un clic au poignet.',
      h1: 'Compteur de points pickleball : Klikkr compte ton match',
      lead: 'Au pickleball, le serveur annonce trois chiffres avant chaque service, par exemple « 4-2-1 ». Quand on débute, on perd vite le fil. Avec Klikkr, tu cliques sur le bracelet après chaque échange. L’app compte avec changement de service (side out), avec serveur 1 et serveur 2.',
      klikkrTitle: 'Comment Klikkr compte les points au pickleball',
      klikkrIntro:
        'Klikkr connaît le comptage en side out avec serveur 1 et serveur 2, y compris le départ à 0-0-2. Avant le match, tu choisis le système, side out ou point à chaque échange (rally scoring), et le nombre de points.',
      klikkrPoints: [
        {
          title: 'Bracelet au poignet',
          text: 'Qui gagne l’échange clique une fois. Klikkr décide s’il y a un point ou un changement de service.',
        },
        {
          title: 'Montre connectée ou téléphone',
          text: 'L’Apple Watch ou une montre Wear OS devient un Klikkr. Sans montre, tu glisses vers le haut sur le téléphone.',
        },
        {
          title: 'Tableau de score',
          text: 'Un deuxième téléphone affiche le score en grand. La connexion passe par Bluetooth, sans internet.',
        },
      ],
      rulesTitle: 'Règles du pickleball : comment compter',
      rulesIntro:
        'Les règles ci-dessous suivent l’Official Rulebook de USA Pickleball.',
      rules: [
        {
          title: 'Comptage en side out',
          paragraphs: [
            'Seule l’équipe au service peut marquer. Si l’équipe qui reçoit gagne l’échange, elle ne marque pas de point, mais elle récupère le service. On appelle ça un changement de service (side out).',
            'Une partie se joue en 11 points, avec 2 points d’écart. En tournoi, il existe aussi des parties en 15 ou 21 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'En tournoi, le plus souvent, le premier à gagner deux parties en 11 points gagne le match.',
          ],
        },
        {
          title: 'L’annonce en double : trois chiffres',
          bullets: [
            'Avant chaque service, le serveur annonce le score : d’abord les points de son équipe, puis ceux des adversaires, puis le numéro de serveur, 1 ou 2.',
            'En double, les deux partenaires servent avant que le service passe aux adversaires. D’abord le serveur 1, puis le serveur 2 après un échange perdu.',
            'Exception au début de la partie : la première équipe au service n’a qu’un serveur. C’est pourquoi chaque partie commence par l’annonce « 0-0-2 ».',
          ],
        },
        {
          title: 'Service',
          bullets: [
            'Le service part en diagonale dans la zone de service opposée.',
            'Si tu sers la balle de volée, tu frappes par en dessous et tu touches la balle sous la taille. Au service avec rebond (drop serve), tu laisses d’abord rebondir la balle. Cette restriction ne s’applique alors pas.',
            'En double, après un changement de service, le service commence toujours dans la zone de droite. En simple, tu sers à droite quand ton score est pair, et à gauche quand il est impair.',
            'Tu as un seul essai. Si la balle touche le filet et tombe dans la bonne zone, le service est bon et le jeu continue.',
          ],
        },
        {
          title: 'Règle du double rebond',
          paragraphs: [
            'Le receveur doit jouer le service après le rebond. Ensuite, l’équipe au service doit aussi laisser rebondir la balle une fois. La volée n’est permise qu’à partir du troisième coup.',
          ],
        },
        {
          title: 'Cuisine : la zone de non-volée',
          paragraphs: [
            'La zone juste devant le filet s’appelle zone de non-volée (non-volley zone) ou cuisine (kitchen). Elle s’étend sur 7 pieds, environ 2,13 mètres, depuis le filet. Si tu te tiens dans la cuisine, tu n’as pas le droit de jouer la balle de volée.',
          ],
        },
      ],
      variantsTitle: 'Variantes pour le loisir et le club',
      variantsIntro:
        'Au pickleball loisir, on ne compte pas toujours en side out. Ces variantes sont répandues. Tu les règles dans l’app avant le match.',
      variants: [
        {
          title: 'Point à chaque échange (rally scoring)',
          text: 'Chaque échange rapporte un point, peu importe qui sert. USA Pickleball autorise ce comptage à titre provisoire depuis 2025. On joue alors souvent en 15 ou 21 points.',
        },
        {
          title: 'Une partie au lieu du meilleur des trois',
          text: 'Quand le créneau en salle est court, on joue une seule partie en 11 points.',
        },
        {
          title: 'Parties en 15 ou 21 points',
          text: 'Des parties plus longues sont aussi possibles en side out. Klikkr compte en 11, 15 ou 21 points, ou jusqu’au score que tu choisis.',
        },
        {
          title: 'Simple',
          text: 'En simple, il n’y a qu’un serveur par côté. Si le serveur perd l’échange, le service passe tout de suite à l’adversaire (side out).',
        },
      ],
      faq: [
        {
          q: 'Comment compter au pickleball ?',
          a: 'Seule l’équipe au service peut marquer. Une partie se joue en 11 points avec 2 points d’écart. En double, le serveur annonce trois chiffres : ses points, ceux des adversaires et le numéro de serveur.',
        },
        {
          q: 'Pourquoi le pickleball commence-t-il à 0-0-2 ?',
          a: 'Au début de la partie, la première équipe au service n’a qu’un serveur. L’annonce « 2 » montre que le service passe aux adversaires après le premier échange perdu.',
        },
        {
          q: 'Qu’est-ce que la cuisine au pickleball ?',
          a: 'C’est la zone de non-volée, juste devant le filet, sur environ 2,13 mètres de profondeur. Si tu te tiens dedans, tu n’as pas le droit de jouer la balle de volée.',
        },
        {
          q: 'Qu’est-ce que le rally scoring au pickleball ?',
          a: 'Chaque échange rapporte un point, peu importe qui sert. USA Pickleball l’autorise à titre provisoire depuis 2025. Dans beaucoup de tournois officiels, le side out reste pourtant la règle.',
        },
        {
          q: 'Existe-t-il un compteur de points pickleball pour le poignet ?',
          a: 'Oui. Le bracelet Klikkr compte d’un clic. L’app décide s’il y a un point, un changement de serveur ou un side out.',
        },
      ],
      source: {
        label: 'USA Pickleball, Official Rulebook',
        url: 'https://usapickleball.org/what-is-pickleball/official-rules/',
      },
    },
  },
}
