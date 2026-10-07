import type { Translations } from './index'

export const fr: Translations = {
  seo: {
    defaultOgImage: '/product.png',
    home: {
      title: 'Klikkr – Bracelet Compteur de Points pour Padel, Tennis & Squash',
      description:
        "Le compteur de points Bluetooth au poignet. Comptez les points au padel, tennis ou squash en un clic. Étanche, 2 ans d'autonomie. Précommandez.",
    },
    howItWorks: {
      title: 'Comment fonctionne Klikkr – Guide du bracelet compteur',
      description:
        "Découvrez en quelques étapes comment fonctionne Klikkr : allumer le bracelet, connecter l'app, compter les points en un clic. Padel, tennis, squash.",
    },
    reviews: {
      title:
        'Avis Klikkr – Ce que disent les joueurs de padel, tennis & squash',
      description:
        'Vrais avis de joueurs de padel, tennis et squash qui utilisent déjà Klikkr. Découvrez pourquoi les athlètes choisissent ce compteur Bluetooth.',
    },
    faq: {
      title: 'FAQ – Questions fréquentes sur le bracelet Klikkr',
      description:
        'Réponses aux questions fréquentes sur Klikkr : appairage Bluetooth, autonomie et compatibilité padel, tennis et squash.',
    },
    appPrivacy: {
      title: "Politique de confidentialité de l'app Klikkr | Klikkr",
      description:
        "Politique de confidentialité de l'application Klikkr. Découvrez quelles données l'app collecte et comment nous protégeons votre vie privée.",
    },
    imprint: {
      title: 'Mentions légales | Klikkr',
      description: 'Mentions légales et informations juridiques de Klikkr.',
    },
    thanks: {
      title: 'Merci pour votre commande | Klikkr',
      description:
        'Merci pour votre commande Klikkr. Vous recevrez un e-mail de confirmation avec les détails sous peu.',
    },
  },

  nav: {
    home: 'Accueil',
    howItWorks: 'Comment ça marche',
    reviews: 'Avis',
    faq: 'FAQ',
    orderNow: 'Commander',
  },

  hero: {
    badge: 'Disponible en précommande',
    titleLine1: 'Track Every',
    titleAccent1: 'Point.',
    titleLine2: 'Focus on Your',
    titleAccent2: 'Game.',
    slogan: 'Focus on your Game!',
    description:
      "Le traqueur de score Bluetooth portable ultime pour chaque sport de raquette. Gardez les yeux sur la balle, comptez les points d'un simple clic et laissez l'app faire le reste.",
    ctaPrimary: 'Commander maintenant',
    ctaSecondary: 'En savoir plus',
    sportSquash: 'Squash',
    sportPadel: 'Padel',
    sportBadminton: 'Badminton',
    sportTennis: 'Tennis',
    sportTableTennis: 'Tennis de table',
    sportPickleball: 'Pickleball',
    productAlt: 'Bracelet compteur de points Klikkr porté au poignet',
  },

  system: {
    title: 'Klikkr, app,',
    titleAccent: 'tableau de score.',
    description:
      'Trois éléments, une expérience fluide — prêt en quelques secondes.',
    imageAlt:
      "Joueuse contrôlant le tableau de score Klikkr depuis l'app, Klikkr au poignet",
    steps: [
      {
        title: 'Mettez votre Klikkr',
        description:
          'Portez un bracelet Klikkr ou votre montre connectée au poignet.',
      },
      {
        title: "Connectez-vous à l'app",
        description:
          "Le bracelet se couple en un seul tap, la montre connectée se relie toute seule à l'app gratuite Klikkr.",
      },
      {
        title: 'Lancez le match',
        description: 'Choisissez le sport, réglez les règles — et jouez.',
      },
    ],
  },

  smartwatch: {
    badge: 'Nouveau',
    title: 'Votre montre connectée est un',
    titleAccent: 'Klikkr.',
    description:
      'Pas de bracelet sous la main ? Avec votre Apple Watch ou votre montre Wear OS, vous comptez les points directement au poignet.',
    faces: 'La montre affiche les couleurs et les initiales des joueurs.',
    pricing:
      'Trois matchs gratuits, puis CHF 10 une seule fois pour la montre. Sans abonnement.',
    compatibility: 'Apple Watch dès watchOS 10 · Wear OS dès la version 3',
    howLink: 'Comment compter avec la montre',
    bandsHint:
      'Pour les joueurs sans montre connectée, il y a les bracelets Klikkr.',
    bandsLink: 'Voir les bracelets',
    imageAlt:
      "Tableau de score Klikkr sur un iPhone, à côté d'une Apple Watch affichant le même score",
  },

  appFeatures: {
    downloadAppStore: "Télécharger dans l'App Store",
    downloadGooglePlay: 'Disponible sur Google Play',
    scanQrLabel: 'Scanner avec votre smartphone',
    scanQrAlt: "Code QR vers l'application Klikkr",
    appPreviewAlt: "Aperçu de l'interface Klikkr",
  },

  appStory: {
    badge: 'L’application gratuite Klikkr',
    title: 'Klikkr compte,',
    titleAccent: 'vous jouez.',
    description:
      'L’application est gratuite et transforme vos Klikkr en tableau de score. Cinq choses dont elle se charge pour que vous n’ayez pas à y penser.',
    sections: {
      modes: {
        tab: 'Modes',
        kicker: 'Aucun menu de mode',
        title: 'Les bracelets décident comment vous jouez',
        body: 'Zéro, un, deux ou trois bracelets. L’application compte ce qui est connecté et s’adapte. Il ne vous reste qu’à confirmer.',
        proof: [
          'Sans bracelet : au doigt',
          'Deux bracelets : chacun pour soi',
          'Trois ou plus : tournoi',
        ],
        imageAlt: 'Tableau de score Klikkr avec un bracelet au poignet',
      },
      rules: {
        tab: 'Règles',
        kicker: 'Six sports',
        title: 'De vraies règles, pas un simple compteur',
        body: 'Tennis, padel, squash, tennis de table, badminton et pickleball, chacun avec son propre règlement intégré. Tout se modifie si besoin, les réglages par défaut couvrent le cas normal.',
        proof: [
          'Avantage ou point en or',
          'Tie break',
          'Side out',
          'Longueur des sets',
          'Rotation du service',
        ],
        imageAlt: 'Réglages des règles dans l’application Klikkr',
      },
      mirror: {
        tab: 'Mirror',
        kicker: 'Display-Sync',
        title: 'Chaque autre téléphone devient un tableau',
        body: 'Scannez le code, c’est parti. Le score s’affiche en direct sur chaque appareil connecté, derrière la vitre, au poteau ou côté public, pendant que vous continuez à compter sur le vôtre.',
        proof: [
          'Plusieurs appareils à la fois',
          'Sans internet',
          'Directement en Bluetooth',
        ],
        imageAlt: 'Chaque autre téléphone devient un tableau',
      },
      stats: {
        tab: 'Statistiques',
        kicker: 'Après le match',
        title: 'Chaque match s’analyse tout seul',
        body: 'Chaque match rejoint l’historique avec le détail des sets, la durée et les statistiques de service. Le graphique de momentum montre point par point où le match a basculé.',
        proof: ['Bilan direct', 'Courbe de momentum', 'Export dans un fichier'],
        imageAlt:
          'Statistiques et graphique de momentum dans l’application Klikkr',
      },
      summary: {
        tab: 'Déroulé',
        kicker: 'Du premier service au bilan',
        title: 'Un parcours, quatre écrans',
        body: 'Choisissez un sport, attribuez les joueurs, jouez, voyez le résultat. Le match figure ensuite dans vos statistiques sans que vous saisissiez quoi que ce soit.',
        proof: ['Sans compte', 'Fonctionne hors ligne', 'Quatre langues'],
        imageAlt: 'Le déroulé d’un match dans l’application Klikkr',
      },
    },
  },

  checkout: {
    title: 'Prêt à',
    titleAccent: 'dominer',
    titleEnd: ' le jeu ?',
    description:
      'Choisissez votre équipement et la quantité — un bracelet ou un set complet pour votre équipe.',
    featuresList: [
      'Comptage de points en un clic',
      "Résistant à l'eau et à la transpiration",
      'Toucher agréable — idéal pour le sport',
      'Ultra-léger au poignet',
      "2 ans d'autonomie",
    ],
    securePayment: 'Paiement sécurisé via Stripe. Entièrement chiffré.',
  },

  howItWorks: {
    badge: 'Simple & Intuitif',
    title: 'Comment ça',
    titleAccent: 'marche',
    description:
      'Du déballage au point de match en moins de 2 minutes. Voici tout ce que vous devez savoir.',
    steps: [
      {
        title: 'Déballage',
        description:
          "Ouvrez votre paquet Klikkr – bracelets chargés et prêts à l'emploi.",
      },
      {
        title: "Télécharger l'app",
        description:
          "Installe l'app gratuite Klikkr — disponible pour Android & iOS (Bêta).",
      },
      {
        title: 'Scanner & Connecter',
        description:
          'Scannez le QR code sur votre bracelet pour coupler via Bluetooth instantanément – aucun paramétrage manuel.',
      },
      {
        title: 'Lancer un match',
        description:
          "Choisissez votre sport, entrez les noms des joueurs, configurez les règles et c'est parti.",
      },
      {
        title: 'Compter les points',
        description:
          "Un clic sur le bracelet = un point. L'app gère automatiquement les sets, jeux et règles.",
      },
      {
        title: 'Voir le résultat',
        description:
          'Détection automatique du gagnant, alertes de balle de match et affichage clair du résultat.',
      },
    ],
    ctaLine1: "C'est tout. Simple comme",
    ctaAccent: 'clic, clic, gagné.',
    ctaLine2: 'Prêt à passer au niveau supérieur ?',
  },

  appCustomization: {
    badge: 'Personnalisable',
    title: 'Ton jeu, ton',
    titleAccent: 'style',
    items: [
      {
        title: 'Plusieurs sets de sons',
        description:
          'Choisis parmi différents sets de sons pour les points et le match ball — ou désactive les sons.',
      },
      {
        title: 'Couleurs personnalisées',
        description:
          'Personnalise les couleurs des joueurs — choisis parmi des modèles ou définis tes propres couleurs.',
      },
      {
        title: 'Thème clair & sombre',
        description:
          "Bascule entre le mode clair et sombre — selon les conditions d'éclairage et tes préférences.",
      },
    ],
  },

  phoneHolder: {
    badge: 'Nouvel accessoire',
    title: 'Le Support',
    titleAccent: 'Smartphone',
    description:
      'Fixez votre smartphone directement sur la vitre du court de squash — vue parfaite du score en direct pendant le jeu.',
    hint: 'Glissez pour tourner, scrollez pour zoomer',
  },

  reviews: {
    badge: 'Ce que disent les joueurs',
    title: 'Avis des',
    titleAccent: 'joueurs',
    description:
      'Découvrez ce que les athlètes qui utilisent déjà Klikkr dans leurs matchs quotidiens en pensent.',
    allLink: 'Tous les avis',
    reviewsCount: 'Avis',
    bottomCta:
      "Rejoignez la communauté de joueurs satisfaits – obtenez votre Klikkr aujourd'hui.",
    happyPlayers: 'joueurs satisfaits',
    form: {
      title: 'Partage ton expérience',
      description: 'Tu joues déjà avec Klikkr ? Dis-nous comment ça se passe.',
      namePlaceholder: 'Ton nom',
      ratingLabel: 'Ta note',
      textPlaceholder: 'Raconte-nous ton expérience avec Klikkr …',
      submit: 'Envoyer l’avis',
      ratingRequired: 'Merci de choisir une note en étoiles.',
      success: 'Ton client mail va s’ouvrir — il ne reste qu’à envoyer !',
      mailSubject: 'Nouvel avis Klikkr',
    },
    items: [
      {
        name: 'Sandro L.',
        sport: 'Padel',
        rating: 5,
        text: "Depuis que j'utilise Klikkr, je peux me concentrer pleinement sur le jeu. Plus de calcul mental, plus de discussions – la charge cognitive disparaît complètement. Ça fait une vraie différence en match.",
        date: '15 mars 2026',
      },
      {
        name: 'Daniel K.',
        sport: 'Tennis',
        rating: 5,
        text: "La livraison était ultra rapide et quand j'ai eu une question, la réponse est arrivée en quelques heures. Voilà ce qu'est un bon service. Produit top, support top !",
        date: '22 mars 2026',
      },
      {
        name: 'Markus B.',
        sport: 'Squash',
        rating: 5,
        text: "Enfin je peux jouer au squash sans devoir compter en permanence. Il suffit de cliquer et de continuer à jouer – c'est comme ça que ça devrait être !",
        date: '1 avr. 2026',
      },
    ],
  },

  faq: {
    badge: 'Des questions ?',
    title: 'Questions',
    titleAccent: 'fréquentes',
    description:
      "Tout ce que vous devez savoir sur Klikkr – de l'installation au jeu.",
    emptyTitle: 'Personne ne nous a jamais rien demandé.',
    emptyDescription:
      "Soit Klikkr est tellement intuitif qu'aucune question n'est nécessaire — soit tout le monde est trop occupé à jouer. On parie sur la deuxième option. On a quand même préparé quelques réponses, au cas où.",
    contactCta: "D'autres questions ? Écrivez-nous à",
    contactTitle: "Ta question n'était pas là ?",
    contactDescription: 'Écris-nous directement — on ne mord pas (en général).',
    contactEmail: 'Ton adresse e-mail',
    contactMessage: 'Que voudrais-tu savoir ?',
    contactButton: 'Envoyer',
    contactSuccess: "Ton client mail s'ouvre — il suffit d'envoyer !",
    items: [
      {
        question: "Pourquoi je n'arrive pas à connecter le bracelet à l'app ?",
        answer:
          "L'app Klikkr nécessite l'autorisation Bluetooth (BLE) pour détecter le bracelet. Assurez-vous que le Bluetooth est activé sur votre smartphone et que vous avez accordé les permissions nécessaires à l'app. Sur Android, allez dans Paramètres → Applications → Klikkr → Autorisations. Sur iOS, vous serez invité automatiquement au premier lancement.",
      },
      {
        question:
          "J'appuie sur le bracelet mais rien ne se passe – que faire ?",
        answer:
          "Le bracelet doit d'abord être allumé. Maintenez le bouton enfoncé pendant environ 3 secondes jusqu'à ce que le bracelet s'active. Ce n'est qu'ensuite qu'il répondra aux clics courts et pourra communiquer avec l'app.",
      },
      {
        question: "Quelle est l'autonomie de la batterie ?",
        answer:
          "La batterie dure environ 2 ans en utilisation normale. Si vous éteignez le bracelet après chaque partie (maintenez le bouton enfoncé pendant environ 6 secondes), l'autonomie sera encore prolongée.",
      },
      {
        question: 'Comment remplacer la batterie ?',
        answer:
          "Retirez d'abord délicatement le beacon BLE du bracelet en silicone. Ouvrez ensuite le couvercle du boîtier du beacon avec un objet plat (par exemple une pièce de monnaie ou un petit tournevis). Remplacez la pile bouton et remettez le couvercle en place.",
      },
      {
        question: 'Le beacon BLE est-il étanche ?',
        answer:
          "Non, le beacon BLE n'est pas étanche et ne doit pas être utilisé sous l'eau. Le bracelet en silicone est résistant aux éclaboussures et à la transpiration, mais le composant électronique ne doit pas entrer en contact avec l'eau.",
      },
    ],
  },

  cart: {
    title: 'Panier',
    empty: 'Votre panier est vide.',
    checkout: 'Passer à la caisse',
    newsletterOptIn: 'Oui, je souhaite recevoir la newsletter Klikkr',
    remove: 'Supprimer',
    total: 'Total',
    addedToCart: 'Ajouté',
    continueShopping: 'Continuer les achats',
    close: 'Fermer',
    shippingTo: 'Livraison vers',
    countryCH: 'Suisse',
    countryAbroad: 'Autre pays',
    abroadNotice:
      "Pour les commandes à l'étranger, des droits de douane et taxes d'importation peuvent s'appliquer selon la législation locale et sont à la charge du destinataire.",
  },

  products: {
    wristband: {
      name: 'Wearable Score Clicker',
      description: 'Compteur de score Bluetooth pour le poignet.',
    },
    'holder-squash': {
      name: 'Glass Mount (Squash)',
      description:
        'Se fixe sur la vitre du court de squash pour une vue parfaite du score.',
    },
    'holder-squash-s': {
      name: 'Glass Mount S (Squash)',
      description: 'Fente : 162 × 15.5 mm (L × l)',
    },
    'holder-squash-m': {
      name: 'Glass Mount M (Squash)',
      description: 'Fente : 167 × 16 mm (L × l)',
    },
    'holder-squash-l': {
      name: 'Glass Mount L (Squash)',
      description: 'Fente : 175 × 16.5 mm (L × l)',
    },
    sizeLabel: 'Taille',
    perUnit: '/ pièce',
    cta: 'Ajouter au panier',
    categories: {
      wristband: 'Bracelets',
      holder: 'Supports',
      accessory: 'Accessoires',
    },
  },

  newsletter: {
    badge: 'Newsletter',
    title: 'Reste au',
    titleAccent: 'courant',
    description:
      'Reçois des mises à jour sur les nouvelles fonctionnalités, astuces et offres — directement dans ta boîte mail.',
    placeholder: 'Ton adresse e-mail',
    button: "S'abonner",
    success: 'Tu es inscrit(e) ! Merci pour ton intérêt.',
    alreadySubscribed: 'Tu es déjà inscrit(e).',
    error: "Quelque chose s'est mal passé. Réessaie.",
    privacy:
      'Nous respectons ta vie privée. Désabonnement possible à tout moment.',
  },

  footer: {
    allRightsReserved: 'Tous droits réservés.',
    designBy: 'Design & Code par',
    agb: 'CGV',
    privacy: 'Confidentialité',
    refunds: 'Rétractation',
    imprint: 'Mentions légales',
  },

  thanks: {
    title: 'Merci beaucoup !',
    subtitle: 'Votre commande a bien été passée.',
    message:
      'Nous avons bien reçu votre commande et la traiterons dans les plus brefs délais. Vous recevrez sous peu un e-mail de confirmation avec plus de détails sur votre achat.',
    backHome: "Retour à l'accueil",
  },

  wip: {
    title: 'En cours de développement',
    message:
      "Cette page est en cours de mise à jour et sera bientôt disponible. Restez à l'écoute !",
    backHome: "Retour à l'accueil",
  },

  gameModes: {
    badge: 'Modes de jeu',
    title: 'Comment veux-tu',
    titleAccent: 'jouer ?',
    description:
      "Avec une montre connectée, un bracelet ou rien du tout, en solo ou en tournoi — l'app Klikkr s'adapte à ton setup.",
    modes: {
      smartwatch: {
        label: 'Montre connectée',
        description:
          'Apple Watch ou montre Wear OS comme Klikkr — sans bracelet.',
        steps: [
          {
            title: "Ouvre l'app sur la montre",
            description:
              "Sur l'Apple Watch, Klikkr arrive avec l'app iPhone ; sur une montre Wear OS, installe-la depuis le Play Store de la montre. Ouvre-la : elle se connecte toute seule au téléphone et attend un match.",
          },
          {
            title: 'Lance le match sur le téléphone',
            description:
              'Choisis le sport, attribue les joueurs, touche « Démarrer ». Dès que le match démarre, la montre affiche les joueurs dans leurs couleurs. Une seule montre suffit pour tout le match, même en double.',
          },
          {
            title: 'Compte au poignet',
            description:
              "Tes initiales sont en haut, en double avec celles de ton partenaire, et le point devant indique qui sert. Touche en haut pour votre point, en bas pour celui des adversaires. Le score s'affiche sur le téléphone. Un double toucher annule le dernier point, un appui long met en pause et relance.",
          },
          {
            title: 'Résultat',
            description:
              "Après la balle de match, le résultat s'affiche sur le téléphone et rejoint tes statistiques. Trois matchs avec la montre sont gratuits, ensuite tu la débloques une seule fois pour CHF 10 dans l'app Klikkr du téléphone. L'achat vaut pour ton identifiant Apple ou ton compte Google, donc pour toutes tes montres.",
          },
        ],
        images: [
          { src: '/app/fr/screens/watch_idle.webp', bare: true as const },
          '/app/fr/screens/setup.webp',
          { src: '/app/fr/screens/watch_pair.webp', bare: true as const },
          '/app/fr/screens/summary.webp',
        ],
      },
      swipe: {
        label: 'Swipe',
        description: 'Score manuellement sur ton téléphone — sans beacon.',
        steps: [
          {
            title: 'Choisis ton sport',
            description:
              "Ouvre l'app et touche ton sport. Six sont prêts, du tennis au pickleball. Sans bracelet connecté, le téléphone suffit.",
          },
          {
            title: 'Attribue les joueurs',
            description:
              'Place les joueurs du pool sur leurs emplacements. Cela marche aussi sans profils, ils deviennent Joueur 1 et Joueur 2.',
          },
          {
            title: 'Configure les règles',
            description:
              'Définis le score cible, "Win by 2" et la rotation de service — entièrement personnalisable.',
          },
          {
            title: 'Swipe & Score',
            description:
              'Glisse vers le haut sur ton propre score, cela compte le point. Reprendre un point passe par le menu.',
          },
        ],
        images: [
          '/app/fr/screens/home.webp',
          '/app/fr/screens/setup.webp',
          '/app/fr/screens/rules.webp',
          '/app/fr/screens/scoreboard.webp',
        ],
      },
      oneBeacon: {
        label: '1 Beacon',
        description: 'Un bracelet pour les deux joueurs — simple et rapide.',
        steps: [
          {
            title: 'Connecter le beacon',
            description:
              'Allume ton bracelet (maintiens 3 sec) et connecte-le via QR code ou Bluetooth. Un seul beacon suffit.',
          },
          {
            title: 'Choisis ton sport',
            description:
              "Sélectionne ton sport — l'app détecte automatiquement le mode 1 beacon.",
          },
          {
            title: 'Configure les règles',
            description:
              'Paramètre le score cible, "Win by 2" et d\'autres réglages spécifiques au sport.',
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = un point pour toi. 2 clics = un point pour l’autre joueur. 3 clics reprennent le dernier point, un appui long met en pause.',
          },
        ],
        images: [
          '/app/fr/screens/beacons.webp',
          '/app/fr/screens/home.webp',
          '/app/fr/screens/rules.webp',
          '/app/fr/screens/scoreboard.webp',
        ],
      },
      twoBeacons: {
        label: '2 Beacons',
        description: 'Chaque joueur a son propre bracelet.',
        steps: [
          {
            title: 'Connecter les deux beacons',
            description:
              'Allume les deux bracelets (maintiens 3 sec) et connecte-les via QR code ou Bluetooth.',
          },
          {
            title: 'Choisis ton sport',
            description:
              "Sélectionne ton sport — l'app détecte le mode 2 beacons et assigne chaque beacon à un joueur.",
          },
          {
            title: 'Configure les règles',
            description:
              "Paramètre les réglages spécifiques au sport comme d'habitude.",
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = ton propre point. 2 clics reprennent le dernier point, et à 0:0 cela change le service. Un appui long met en pause.',
          },
        ],
        images: [
          '/app/fr/screens/beacons.webp',
          '/app/fr/screens/home.webp',
          '/app/fr/screens/rules.webp',
          '/app/fr/screens/scoreboard.webp',
        ],
      },
      tournament: {
        label: 'Tournoi',
        description: '3+ beacons — plusieurs joueurs, classement automatique.',
        steps: [
          {
            title: 'Connecter 3+ beacons',
            description:
              "Connecte 3 bracelets ou plus — l'app passe automatiquement en mode tournoi.",
          },
          {
            title: 'Choisis ton sport',
            description: 'Sélectionne ton sport parmi les options disponibles.',
          },
          {
            title: 'Configure les règles',
            description: 'Paramètre les réglages spécifiques au tournoi.',
          },
          {
            title: 'Sélectionner les joueurs',
            description:
              "Active ou désactive les joueurs d'un clic. Choisis qui joue contre qui avant chaque match.",
          },
          {
            title: 'Jouer le match',
            description:
              'Les deux joueurs cliquent une fois pour lancer le match. Ensuite 1 clic = ton point, 2 clics le reprennent. Après le match, un clic lance le suivant.',
          },
          {
            title: 'Résultats du tournoi',
            description:
              'Après chaque match, le classement général se met à jour : qui a battu qui ?',
          },
        ],
        images: [
          '/app/fr/screens/menu.webp',
          '/app/fr/screens/home.webp',
          '/app/fr/screens/rules.webp',
          '/app/fr/screens/setup.webp',
          '/app/fr/screens/scoreboard.webp',
          '/app/fr/screens/summary.webp',
        ],
      },
    },
    prev: 'Précédent',
    next: 'Suivant',
  },

  langSwitcher: {
    de: 'DE',
    en: 'EN',
    fr: 'FR',
    it: 'IT',
  },
}
