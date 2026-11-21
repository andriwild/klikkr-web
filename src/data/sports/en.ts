import type { SportsLocale } from './types'

export const en: SportsLocale = {
  ui: {
    breadcrumbHome: 'Klikkr',
    ctaOrder: 'Order Klikkr',
    appFree:
      'The app is free. It also keeps score without a wristband: you swipe on your phone.',
    sourceLabel: 'Based on:',
    rulesAsOf: 'Rules as of November 2026.',
    rulesScreenshotAlt:
      'Klikkr app: choose a sport and set the rules, for example sets, games per set and deuce',
    faqTitle: 'Frequently asked questions',
    otherSportsTitle: 'Klikkr also keeps score in these sports',
    ctaBandTitle: 'Keep score without stopping the game',
    ctaBandText:
      'One click on your wrist, and the point is counted. The app knows the rules, shows who serves and saves every match in your statistics.',
    sportsNav: 'Sports',
  },

  sports: {
    padel: {
      name: 'Padel',
      seoTitle: 'Padel Rules and Scoring Explained | Padel Score Counter',
      seoDescription:
        'Padel rules and scoring for beginners: golden point, star point, tiebreak and serve. With Klikkr, you keep score with one click on your wrist.',
      h1: 'Padel score counter: Klikkr keeps score of your match',
      lead: 'In padel, you play as a group of four. After three long rallies, nobody knows any more if the score is 30-40 or deuce. With Klikkr, you click the wristband after each point. The app keeps score by the padel rules and shows the score in large digits on your phone.',
      klikkrTitle: 'How Klikkr keeps score in padel',
      klikkrIntro:
        'Klikkr knows padel scoring with games, sets and tiebreak. Before the match, you choose how deuce is played: with advantage, with golden point or with star point. In every game, the app shows who serves, in doubles too.',
      klikkrPoints: [
        {
          title: 'One wristband per team',
          text: 'Whoever wins the point clicks once. Two clicks take back a point. You do not have to put down your racket.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'No wristband at hand? Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone.',
        },
        {
          title: 'Padel scoreboard on the glass wall',
          text: 'A second phone shows the score in large digits, for example on the glass wall. The phones connect over Bluetooth, without internet.',
        },
      ],
      rulesTitle: 'Padel rules and scoring: how to keep score',
      rulesIntro:
        'Padel scoring is almost the same as tennis scoring. The main difference is deuce: padel has three variants. The rules below follow the rules of the world governing body, the FIP.',
      rules: [
        {
          title: 'Points in a game',
          paragraphs: [
            'A game goes 0, 15, 30, 40 and game. At 40, whoever wins the next point wins the game.',
            'When the score is 40-40, it is called deuce. What happens next depends on the variant you choose.',
          ],
        },
        {
          title: 'Deuce: advantage, golden point or star point',
          bullets: [
            'Advantage: as in tennis. After deuce, whoever wins two points in a row wins the game.',
            'Golden point: at 40-40, one single point decides the game. The receiving team chooses whether to receive the serve on the right or on the left. This is the most common rule in casual and club play.',
            'Star point: at 40-40, you first play with advantage. When the score goes back to deuce for the third time, one single point decides: the star point. Since the 2026 season, this is the standard at the major FIP professional tournaments.',
          ],
        },
        {
          title: 'Set and tiebreak',
          paragraphs: [
            'You win a set when you are first to 6 games, with a lead of 2 games. At 6-6, you play a tiebreak.',
            'In the tiebreak, you count 1, 2, 3 and so on. The first to 7 points, with a lead of 2 points, wins. The teams change ends after every 6 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'A match is best of three sets. Whoever wins two sets wins the match.',
          ],
        },
        {
          title: 'Serve',
          bullets: [
            'The serve is underhand. You bounce the ball behind the service line and hit it at or below waist height.',
            "The ball must land diagonally in the opponent's service box. You have two attempts.",
            'The first serve of each game is from the right. After that, the side changes after every point.',
            'If the ball touches the net and lands in the correct box, it is a let. You repeat the serve.',
            'If the ball bounces in the service box and then hits the fence, the serve is a fault. If it hits the glass wall, the serve is good.',
          ],
        },
        {
          title: 'Serving in doubles',
          paragraphs: [
            "One player serves for a whole game. In the next game, the other team serves. When it is your team's turn again, your partner serves. This way, all four players serve in turn.",
            'Before each set, each team decides who serves first. This order stays the same until the end of the set.',
            'In the tiebreak, the next player serves one point. After that, each player serves two points in turn.',
          ],
        },
        {
          title: 'Walls and fence',
          bullets: [
            "After your shot, the ball must fly over the net and bounce in the opponent's court first. If it hits a wall or the fence on the opponent's side before that, you lose the point. You may play the ball against the glass wall on your own side.",
            'After the bounce, the ball may hit the glass wall and the fence. Your opponent may then play it, as long as it does not touch the ground a second time.',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'Not every match is a tournament. These variants are common in casual padel. You set them in the app before the match.',
      variants: [
        {
          title: 'Golden point instead of advantage',
          text: 'Most clubs play with golden point. This makes games shorter, and every deuce is exciting.',
        },
        {
          title: 'One set instead of three',
          text: 'One set is often enough for one hour on court. In Klikkr, you choose one or three sets.',
        },
        {
          title: 'Short sets to 4 games',
          text: 'With sets to 4 games, several matches fit into one hour. Klikkr also counts sets to 2, 4 or 6 games.',
        },
        {
          title: 'Tournament with friends',
          text: 'With three or more players, Klikkr creates a schedule, for example a round robin where everyone plays everyone. Between matches, you see the standings.',
        },
      ],
      faq: [
        {
          q: 'How does padel scoring work?',
          a: 'The same as in tennis: 0, 15, 30, 40, game. A set goes to 6 games, with a lead of 2 games. At 6-6, you play a tiebreak to 7 points. Whoever wins two sets wins the match.',
        },
        {
          q: 'What is the golden point in padel?',
          a: 'At 40-40, one single point decides the game. The receiving team chooses the side on which it receives the serve.',
        },
        {
          q: 'What is the star point in padel?',
          a: 'A deuce rule that the major professional tournaments have used since the 2026 season. You first play with advantage. When the score goes back to deuce for the third time, one single point decides.',
        },
        {
          q: 'Can the serve hit the fence in padel?',
          a: 'No. If the serve bounces in the box and then hits the fence, it is a fault. It may hit the glass wall.',
        },
        {
          q: 'Is there a digital padel score counter for your wrist?',
          a: 'Yes. The Klikkr wristband is a score counter for your wrist. One click counts one point. The app on your phone keeps track of games, sets and tiebreak.',
        },
        {
          q: 'Do I need a wristband to use the app?',
          a: 'No. The Klikkr app is free. It also keeps score when you swipe on your phone. With the wristband, you do not have to touch your phone during the game.',
        },
      ],
      source: {
        label: 'FIP, Rules of Padel',
        url: 'https://www.padelfip.com/',
      },
    },

    tennis: {
      name: 'Tennis',
      seoTitle: 'Tennis Scoring Explained Simply | Tennis Score Counter',
      seoDescription:
        'Tennis scoring explained simply: 15, 30, 40, deuce, tiebreak and match tiebreak. With Klikkr, you keep score with one click on your wrist.',
      h1: 'Tennis score counter: Klikkr keeps score of your match',
      lead: 'Tennis has the most confusing scoring in racket sports: 15, 30, 40, deuce, advantage, tiebreak. With Klikkr, you click the wristband after each point you win. The app keeps track of games and sets and shows who serves.',
      klikkrTitle: 'How Klikkr keeps score in tennis',
      klikkrIntro:
        'Klikkr knows tennis scoring with games, sets and tiebreak. Before the match, you choose the number of sets, the games per set and whether deuce is played with or without advantage. After each game, the app shows who serves.',
      klikkrPoints: [
        {
          title: 'Wristband on your wrist',
          text: 'After you win a point, you click once. Two clicks take back a point. The wristband does not get in the way of your shot.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone to count a point.',
        },
        {
          title: 'Statistics after the match',
          text: 'Klikkr saves every match with set scores, duration and the course of the match. You see your record against every opponent.',
        },
      ],
      rulesTitle: 'How tennis scoring works',
      rulesIntro:
        'The rules below follow the Rules of Tennis of the world governing body, the ITF.',
      rules: [
        {
          title: 'Points in a game',
          paragraphs: [
            "A game goes 0 (love), 15, 30, 40 and game. The server's score is called first.",
            'When the score is 40-40, it is called deuce. Whoever wins the next point has advantage. If that player also wins the following point, they win the game. If they lose it, the score is back to deuce.',
          ],
        },
        {
          title: 'Set',
          paragraphs: [
            'You win a set when you are first to 6 games, with a lead of 2 games. At 6-6, you usually play a tiebreak.',
          ],
        },
        {
          title: 'Tiebreak rules',
          bullets: [
            'In the tiebreak, you count 1, 2, 3 and so on. The first to 7 points, with a lead of 2 points, wins.',
            'The first player serves one point. After that, each player serves two points in turn.',
            'The players change ends after every 6 points.',
            'The player who served first in the tiebreak receives in the first game of the next set.',
          ],
        },
        {
          title: 'Match and match tiebreak',
          paragraphs: [
            'A match is usually best of three sets. Whoever wins two sets wins the match. At the Grand Slam tournaments, the men play best of five sets.',
            'Many players play a match tiebreak instead of a third set. It goes to 10 points, with a lead of 2 points. Since 2022, a tiebreak to 10 points decides the final set at all four Grand Slam tournaments when the score in that set is 6-6.',
          ],
        },
        {
          title: 'Serve',
          bullets: [
            'One player serves for a whole game. In the next game, the opponent serves.',
            'The first point of each game is served from the right. After that, the side changes after every point.',
            'You have two attempts. If the ball touches the net and lands in the correct box, it is a let. You repeat the serve.',
          ],
        },
        {
          title: 'Changing ends',
          paragraphs: [
            'The players change ends after the first, third, fifth and every following odd game of a set.',
          ],
        },
        {
          title: 'Doubles',
          paragraphs: [
            'In doubles, all four players serve one game each, in turn. Before each set, each team decides who serves first.',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'Court time at the club is often short. These variants are common in casual tennis, and Klikkr counts all of them.',
      variants: [
        {
          title: 'No advantage (no-ad)',
          text: 'At 40-40, one single point decides. The receiver chooses the side. This makes games shorter.',
        },
        {
          title: 'One set',
          text: 'One set is often enough for one hour on court. In Klikkr, you choose one, three or five sets.',
        },
        {
          title: 'Short sets to 4 games',
          text: 'The set goes to 4 games. The ITF rules include this variant. At 4-4, you play a tiebreak.',
        },
        {
          title: 'Match tiebreak instead of a third set',
          text: 'At one set all, a tiebreak to 10 points decides. This is common in doubles and in many interclub leagues.',
        },
      ],
      faq: [
        {
          q: 'Why does tennis scoring go 15, 30, 40?',
          a: 'Nobody knows the origin for sure. A common explanation is a clock face with quarter hours: 15, 30, 45 and 60 for the game. Over time, 45 became 40.',
        },
        {
          q: 'How does a tiebreak work in tennis?',
          a: 'At 6-6 in a set, you count 1, 2, 3 and so on. The first to 7 points, with a lead of 2 points, wins the set 7-6. The first player serves one point. After that, each player serves two points in turn.',
        },
        {
          q: 'What is a match tiebreak?',
          a: 'A tiebreak to 10 points instead of a third set. The first to 10 points, with a lead of 2 points, wins.',
        },
        {
          q: 'What does deuce mean in tennis?',
          a: 'Deuce means that the score is 40-40. After deuce, whoever wins two points in a row wins the game.',
        },
        {
          q: 'Is there a tennis score counter for your wrist?',
          a: 'Yes. The Klikkr wristband counts with a click. The app on your phone keeps track of games, sets and tiebreak. You can also use a smartwatch as your Klikkr.',
        },
      ],
      source: {
        label: 'ITF, Rules of Tennis',
        url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
      },
    },

    squash: {
      name: 'Squash',
      seoTitle: 'Squash Rules & PAR 11 Scoring | Squash Score Counter',
      seoDescription:
        'Squash rules explained simply: PAR 11 scoring, serve, let and stroke, English scoring. With Klikkr, you keep score with one click on your wrist.',
      h1: 'Squash score counter: Klikkr keeps score of your match',
      lead: 'Squash is fast. After a long rally, you quickly forget the score. With Klikkr, you click the wristband after each point. The app counts with PAR 11 or with the old scoring system and shows the score in large digits on the glass wall.',
      klikkrTitle: 'How Klikkr keeps score in squash',
      klikkrIntro:
        'Klikkr knows the squash scoring systems PAR 11, PAR 15 and English scoring to 9 points. Before the match, you choose the scoring system and the number of games. The app shows who serves.',
      klikkrPoints: [
        {
          title: 'Wristband on your wrist',
          text: 'Whoever wins the rally clicks once. Two clicks take back a point. Your racket stays in your hand.',
        },
        {
          title: 'Phone on the glass wall',
          text: 'With the Klikkr Glass Mount, your phone hangs on the glass wall of the court. You see the score during the game.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone.',
        },
      ],
      rulesTitle: 'Squash rules: how squash scoring works',
      rulesIntro:
        'The rules below follow the Rules of Singles Squash of the world governing body, World Squash.',
      rules: [
        {
          title: 'PAR 11: every rally scores',
          paragraphs: [
            'The winner of each rally gets a point, no matter who served. A game goes to 11 points.',
            'When the score is 10-10, the game continues until one player leads by 2 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'A match is usually best of five games. Whoever wins three games wins the match. At club level, people often play best of three games.',
          ],
        },
        {
          title: 'Serve',
          bullets: [
            'Whoever wins the rally serves next.',
            'When you win the serve, you choose the side. If you win the point, you change sides for the next serve.',
            'You have only one attempt. Squash has no second serve.',
            'The ball must hit the front wall between the service line and the out line. After that, it must land in the back quarter on the other side, unless the opponent volleys it.',
            'When you serve, at least part of one foot touches the floor inside the service box. That foot must not touch the line.',
            'In the first game, a spin of the racket decides who serves. In each following game, the winner of the previous game serves first.',
          ],
        },
        {
          title: 'Let and stroke',
          paragraphs: [
            'If your opponent interferes with your shot, you can ask for a let. With a let, you replay the rally.',
            'You get a stroke if you could have hit a winning shot without the interference, or if your opponent did not try to get out of the way. Then you win the point.',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'Clubs do not always play PAR 11. These variants are common. You set them in the app before the match.',
      variants: [
        {
          title: 'English scoring to 9',
          text: 'Only the server can score. If the receiver wins the rally, they only win the serve. A game goes to 9 points. At 8-8, the receiver chooses whether to play to 9 or to 10.',
        },
        {
          title: 'PAR 15',
          text: 'Like PAR 11, but to 15 points. This variant is older and rarely played today.',
        },
        {
          title: 'Best of three',
          text: 'Whoever wins two games wins the match. This fits into a short court booking.',
        },
        {
          title: 'Two serves as a house rule',
          text: 'Some casual players allow a second serve. This is not an official rule, but Klikkr can count it anyway.',
        },
      ],
      faq: [
        {
          q: 'How does squash scoring work?',
          a: 'Today, mostly with PAR 11: every rally scores a point. A game goes to 11. At 10-10, you need a lead of 2 points. Whoever wins three games wins the match.',
        },
        {
          q: 'Is there a second serve in squash?',
          a: 'No. In squash, you have only one attempt. If the serve is a fault, the point goes to your opponent.',
        },
        {
          q: 'What is the difference between a let and a stroke in squash?',
          a: 'With a let, you replay the rally. With a stroke, the player who was obstructed wins the point.',
        },
        {
          q: 'What is English scoring in squash?',
          a: 'An older scoring system. Only the server can score, and a game goes to 9 points. Klikkr can count this way too.',
        },
        {
          q: 'How do I see the score during a squash match?',
          a: 'With the Klikkr Glass Mount, your phone hangs on the glass wall. The app shows the score in large digits, and you keep score with a click on your wrist.',
        },
      ],
      source: {
        label: 'World Squash, Rules of Singles Squash',
        url: 'https://www.worldsquash.org/',
      },
    },

    badminton: {
      name: 'Badminton',
      seoTitle: 'Badminton Rules & Scoring | Badminton Score Counter',
      seoDescription:
        'Badminton rules explained simply: scoring to 21, serve, doubles and the new 15-point system from 2027. Klikkr keeps score with one click.',
      h1: 'Badminton score counter: Klikkr keeps score of your match',
      lead: 'In badminton, every rally scores a point, and the side you serve from depends on the score. With Klikkr, you click the wristband after each point. The app counts the game and shows who serves from which side.',
      klikkrTitle: 'How Klikkr keeps score in badminton',
      klikkrIntro:
        'Klikkr counts badminton to 21, 15 or 11 points, with a lead of 2 points and, if you want, a cap at 30. Every rally scores a point, and whoever wins it serves next.',
      klikkrPoints: [
        {
          title: 'Wristband on your wrist',
          text: 'After you win the rally, you click once. Two clicks take back a point. The wristband is light and does not get in the way of your shot.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone.',
        },
        {
          title: 'Tournament in the sports hall',
          text: 'With three or more players, Klikkr creates a schedule. Between matches, you see the standings.',
        },
      ],
      rulesTitle: 'Badminton rules: how badminton scoring works',
      rulesIntro:
        'The rules below follow the Laws of Badminton of the world governing body, the BWF.',
      rules: [
        {
          title: 'Points and games',
          bullets: [
            'Every rally scores a point, no matter who served.',
            'A game goes to 21 points. At 20-20, you need a lead of 2 points.',
            'At 29-29, the next point decides. The first to 30 points wins the game.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'A match is best of three games. Whoever wins two games wins the match.',
          ],
        },
        {
          title: 'Serve',
          bullets: [
            'Whoever wins the rally serves next.',
            'When your own score is even, you serve from the right service court. When it is odd, you serve from the left.',
            'The serve goes diagonally into the opposite service court. You have one attempt.',
          ],
        },
        {
          title: 'Serving in doubles',
          paragraphs: [
            'The partners only switch service courts when their team wins a point on its own serve. If the serving team loses the rally, the serve goes to the opponents, and nobody changes court.',
          ],
        },
        {
          title: 'Intervals and changing ends',
          bullets: [
            'When a player or team reaches 11 points, there is a break of no more than 60 seconds.',
            'Between games, there is a break of no more than 2 minutes.',
            'The players change ends after each game. In the third game, they also change ends when a player or team reaches 11 points.',
          ],
        },
        {
          title: 'New from 2027: three games to 15 points',
          paragraphs: [
            'The BWF approved a new scoring system in April 2026. From 4 January 2027, a game goes to 15 points instead of 21. At 14-14, you need a lead of 2 points. At 20-20, the next point decides. The interval and the change of ends in the third game then happen at 8 points.',
            'Until then, the 21-point system applies. Klikkr counts games to 21 and to 15 points.',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'Court time in the sports hall is often short. These variants are common in casual badminton. You set them in the app before the match.',
      variants: [
        {
          title: 'Games to 15 or 11 points',
          text: 'Shorter games fit better into one hour in the sports hall. Klikkr counts to 21, 15 or 11 points.',
        },
        {
          title: 'One game',
          text: 'For quick changes in the hall, you play only one game.',
        },
        {
          title: 'No 2-point lead',
          text: 'The game ends exactly at the target score, for example at 21-20. This saves time when many players wait for the court.',
        },
        {
          title: 'No cap',
          text: 'Some groups keep playing at 20-20 until one player has a lead of 2 points. In Klikkr, you switch off the cap at 30.',
        },
      ],
      faq: [
        {
          q: 'How many points is a game of badminton?',
          a: 'A game goes to 21 points, with a lead of 2 points, up to a maximum of 30. From 4 January 2027, a new official system applies, with games to 15 points.',
        },
        {
          q: 'Which side do you serve from in badminton?',
          a: 'From the right when your own score is even, from the left when it is odd. The serve goes diagonally into the opposite court.',
        },
        {
          q: 'Can you score in badminton when you are not serving?',
          a: 'Yes. Since 2006, every rally scores a point, no matter who served. Before that, only the server could score.',
        },
        {
          q: 'What changes in badminton in 2027?',
          a: 'From 4 January 2027, games go to 15 points instead of 21. At 14-14, you need a lead of 2 points, up to a maximum of 21.',
        },
        {
          q: 'Is there a badminton clicker for your wrist?',
          a: 'Yes. The Klikkr wristband counts with a click. The app on your phone counts the game and shows who serves.',
        },
      ],
      source: {
        label: 'BWF, Laws of Badminton',
        url: 'https://corporate.bwfbadminton.com/statutes/',
      },
    },

    tableTennis: {
      name: 'Table Tennis',
      seoTitle: 'Table Tennis (Ping Pong) Rules & Scoring | Score Counter',
      seoDescription:
        'Table tennis and ping pong rules explained simply: games to 11, serve rules, doubles and the old 21-point rule. Klikkr keeps score with one click.',
      h1: 'Table tennis score counter: Klikkr keeps score of your match',
      lead: 'In table tennis, the serve changes every two points, and from 10-10 after every point. With Klikkr, you click the wristband after each point. The app counts the games and shows who serves.',
      klikkrTitle: 'How Klikkr keeps score in table tennis',
      klikkrIntro:
        'Klikkr counts table tennis to 11 or 21 points, over one, three or five games. The app changes the serve according to the rule you choose. From 10-10, the serve changes after every point.',
      klikkrPoints: [
        {
          title: 'Wristband on your wrist',
          text: 'After you win a point, you click once. Two clicks take back a point. The wristband is light and does not get in the way of your shot.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone.',
        },
        {
          title: 'Statistics after the match',
          text: 'Klikkr saves every match with game scores and duration. You see your record against every opponent.',
        },
      ],
      rulesTitle: 'Table tennis rules: how ping pong scoring works',
      rulesIntro:
        'The rules below follow the Laws of Table Tennis of the world governing body, the ITTF.',
      rules: [
        {
          title: 'Points and games',
          bullets: [
            'Every rally scores a point.',
            'The first to 11 points wins the game.',
            'When the score is 10-10, the game continues until one player leads by 2 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'A match has an odd number of games, usually five or seven. With five games, the first to win three games wins the match. With seven games, the first to win four games wins. In casual play, people often play best of three.',
          ],
        },
        {
          title: 'Change of service',
          bullets: [
            'Each player serves twice in a row. Then the serve changes.',
            'From 10-10, the serve changes after every point.',
            'Whoever served first in a game receives first in the next game.',
          ],
        },
        {
          title: 'Table tennis serve rules',
          bullets: [
            'The ball rests on your open, flat palm. You toss it straight up at least 16 centimetres.',
            'You hit the ball behind the end line and above the level of the table.',
            "The ball bounces first on your side and then on your opponent's side.",
            'If the ball touches the net during the serve and then lands correctly, it is a let. You repeat the serve.',
          ],
        },
        {
          title: 'Doubles',
          paragraphs: [
            "In doubles, the serve goes diagonally from your right half into the opponents' right half. The partners hit the ball in turn.",
            'At each change of service, the previous receiver becomes the server. This way, all four players serve in turn.',
          ],
        },
        {
          title: 'Changing ends',
          paragraphs: [
            'The players change ends after each game. In the last possible game, they also change ends when a player reaches 5 points.',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'At the table in the basement or at the club, people often play by their own rules. These variants are common. You set them in the app before the match.',
      variants: [
        {
          title: 'Old rule: 21 points',
          text: 'Until 2001, a game went to 21 points, and each player served five times in a row. Many casual groups still play this way.',
        },
        {
          title: 'One or three games',
          text: 'For quick changes, you play only one game or best of three.',
        },
        {
          title: 'Tournament on club night',
          text: 'With three or more players, Klikkr creates a schedule, for example a round robin where everyone plays everyone. Between matches, you see the standings.',
        },
        {
          title: 'Your own serve rule',
          text: 'In Klikkr, you set how many serves each player has, for example two or five.',
        },
      ],
      faq: [
        {
          q: 'How many points is a game of table tennis?',
          a: 'A game goes to 11 points. At 10-10, you need a lead of 2 points. Until 2001, a game went to 21 points.',
        },
        {
          q: 'How many serves do you get in table tennis?',
          a: 'Each player serves twice in a row. From 10-10, the serve changes after every point.',
        },
        {
          q: 'Does the serve have to be diagonal in table tennis?',
          a: "Only in doubles. There, the serve goes from your right half into the opponents' right half. In singles, the ball may bounce anywhere on the opponent's side.",
        },
        {
          q: 'What happens if the serve touches the net in table tennis?',
          a: "If the ball then lands correctly on the opponent's side, you repeat the serve. Nobody gets a point.",
        },
        {
          q: 'Is there a table tennis score counter that shows who serves?',
          a: 'Yes. The Klikkr app shows who serves after every point. You keep score with a click on your wrist or with a swipe on your phone.',
        },
      ],
      source: {
        label: 'ITTF, Laws of Table Tennis',
        url: 'https://documents.ittf.sport/',
      },
    },

    pickleball: {
      name: 'Pickleball',
      seoTitle: 'Pickleball Scoring Rules Explained | Score Counter',
      seoDescription:
        'Pickleball scoring rules explained: side-out scoring, 0-0-2, serve, the kitchen and rally scoring. With Klikkr, you keep score with one click.',
      h1: 'Pickleball score counter: Klikkr keeps score of your match',
      lead: 'In pickleball, the server calls three numbers before each serve, for example “4-2-1”. New players quickly lose track. With Klikkr, you click the wristband after each rally. The app counts with side-out scoring, with server 1 and server 2.',
      klikkrTitle: 'How Klikkr keeps score in pickleball',
      klikkrIntro:
        'Klikkr knows side-out scoring with server 1 and server 2, including the start at 0-0-2. Before the match, you choose side-out scoring or rally scoring, and how many points you play to.',
      klikkrPoints: [
        {
          title: 'Wristband on your wrist',
          text: 'Whoever wins the rally clicks once. Klikkr decides if this gives a point or a change of serve.',
        },
        {
          title: 'Smartwatch or phone',
          text: 'Your Apple Watch or Wear OS watch becomes your Klikkr. Without a watch, you swipe up on your phone.',
        },
        {
          title: 'Scoreboard',
          text: 'A second phone shows the score in large digits. The phones connect over Bluetooth, without internet.',
        },
      ],
      rulesTitle: 'Pickleball scoring rules: how it works',
      rulesIntro:
        'The rules below follow the Official Rulebook of USA Pickleball.',
      rules: [
        {
          title: 'Side-out scoring',
          paragraphs: [
            'Only the serving team can score. If the receiving team wins the rally, it gets no point. It gets the serve instead. This is called a side out.',
            'A game goes to 11 points, with a lead of 2 points. Tournaments also have games to 15 or 21 points.',
          ],
        },
        {
          title: 'Match',
          paragraphs: [
            'In tournaments, the winner is usually the first to win two games to 11 points.',
          ],
        },
        {
          title: 'The score call in doubles: three numbers',
          bullets: [
            "Before each serve, the server calls the score: first the serving team's points, then the opponents' points, then the server number, 1 or 2.",
            'In doubles, both partners serve before the serve goes to the opponents. Server 1 serves first. After a lost rally, server 2 serves.',
            'Exception at the start of a game: the first serving team has only one server. That is why every game starts with the call “0-0-2”.',
          ],
        },
        {
          title: 'Serve',
          bullets: [
            'The serve goes diagonally into the opposite service court.',
            'If you serve the ball out of the air (volley serve), you serve underhand and hit the ball below your waist. With a drop serve, you let the ball bounce first. Then this restriction does not apply.',
            'In doubles, the serve after a side out always starts from the right court. In singles, you serve from the right when your own score is even, and from the left when it is odd.',
            'You have one attempt. If the ball touches the net and lands in the correct court, the serve is good and play continues.',
          ],
        },
        {
          title: 'Two-bounce rule',
          paragraphs: [
            'The receiver must let the serve bounce before playing it. After that, the serving team must also let the ball bounce once. Only from the third shot on may players hit the ball out of the air (volley).',
          ],
        },
        {
          title: 'Kitchen rule: the non-volley zone at the net',
          paragraphs: [
            'The zone right next to the net is called the non-volley zone or the kitchen. It extends 7 feet, about 2.13 metres, from the net. If you stand in the kitchen, you may not hit the ball out of the air (volley).',
          ],
        },
      ],
      variantsTitle: 'Variants for casual and club play',
      variantsIntro:
        'Casual pickleball does not always use side-out scoring. These variants are common. You set them in the app before the match.',
      variants: [
        {
          title: 'Rally scoring',
          text: 'Every rally scores a point, no matter who serves. USA Pickleball has allowed this scoring system as a provisional rule since 2025. Games then often go to 15 or 21 points.',
        },
        {
          title: 'One game instead of best of three',
          text: 'For short court times, you play only one game to 11 points.',
        },
        {
          title: 'Games to 15 or 21',
          text: 'Longer games are also possible with side-out scoring. Klikkr counts to 11, 15, 21 or a number you choose.',
        },
        {
          title: 'Singles',
          text: 'In singles, each side has only one server. If the server loses the rally, a side out follows right away.',
        },
      ],
      faq: [
        {
          q: 'How does pickleball scoring work?',
          a: "Only the serving team can score. A game goes to 11 points, with a lead of 2 points. In doubles, the server calls three numbers: their own team's points, the opponents' points and the server number.",
        },
        {
          q: 'Why does pickleball start at 0-0-2?',
          a: 'At the start of a game, the first serving team has only one server. The call “2” shows that the serve goes to the opponents after the first lost rally.',
        },
        {
          q: 'What is the kitchen in pickleball?',
          a: 'The zone right next to the net, about 2.13 metres deep. If you stand in it, you may not hit the ball out of the air (volley).',
        },
        {
          q: 'What is rally scoring in pickleball?',
          a: 'Every rally scores a point, no matter who serves. USA Pickleball has allowed this as a provisional rule since 2025. Many official tournaments still use side-out scoring.',
        },
        {
          q: 'Is there a pickleball score counter for your wrist?',
          a: 'Yes. The Klikkr wristband counts with a click. The app decides if this gives a point, a change of server or a side out.',
        },
      ],
      source: {
        label: 'USA Pickleball, Official Rulebook',
        url: 'https://usapickleball.org/what-is-pickleball/official-rules/',
      },
    },
  },
}
