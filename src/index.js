import "./styles.scss";

const BUTTONS = [
  "😎 Encore",
  "Fais moi rêver",
  "Un de plus 😇",
  "Donne moi de l’amour 😊",
  "C’est tout ?",
  "Et le prochain ? 😏",
  "OUI ! ENCORE !",
  "Continue",
  "J’aime qu’on m’aime, continue",
  "OH! Trop gentil. Encore",
  "Ca ne peut pas être le dernier 😈",
  "Vas-y",
  "😍 GO GO GO",
  "Reste sur ta lancée",
];

const COMPLIMENTS = [
  "Tu es beau comme un camion",
  "Tu fais du bien comme un kebab à 5h du mat",
  "Tu es beau comme un jour férié un lundi",
  "Tu es le soleil de mon cœur et je suis bien bronzé",
  "Si tu n'existais pas, je piquerais quand même pas tes frites",
  "Ta peau est tellement douce que je pourrai m'en faire un dessus de lit",
  "T'as le teint rose comme un petit jambon",
  "Tes yeux brillent comme la lunette de mes WC que je viens de laver grâce à Canard WC 3 en 1, 50% de promo au rayon surgelés",
  "Sur une île déserte, je serais bien embêté de devoir te manger",
  "Tes yeux vont super bien avec la couleur de mon slip",
  "Quand j'entends ta voix, j'ai le cérumen qui fond",
  "Tu brilles tellement qu'on dirait du strass",
  "J'aime bien tes doigts de pieds",
  "J'ai envie d'aller voir Les Tuche 3 avec toi (et ma mère)",
  "Je te laisserai la dernière part de pizza",
  "Si je devais choisir entre le rayon alcool de mon supermarché et toi, je choisirais toi (mais on irait quand même au rayon alcool)",
  "T'es aussi douce que du PQ ultra-moelleux",
  "Pour toi j'arrêterais de couper mes spaghettis",
  "Si on avait une voiture qui roulerait à l'amitié, on irait au bout du monde toi et moi",
  "C'est pas possible d'être aussi beau, t'es forcément une fake news",
  "Si t'étais un chien, tu serais un labrador",
  "Tu remplis mon coeur comme un spam remplit ma boite mail",
  "Tes cheveux sont des champs de houblon auxquels on n'oserait pas toucher pour faire de la bière",
  "Je suis prêt à graver ton image à l'encre noire sous mes paupières",
  "Tu sens bon comme un paquet de fraise tagada",
  "Sans toi, je suis comme Jul sans vocodeur : rien",
  "Ton père a volé le respect pour te le donner",
  "T'es beau comme un coup droit de Roger Federer",
  "J'adore que tu me ronfles dans l'oreille",
  'Si on change 5 lettres à ton nom, ça fait "je t\'aime"',
  "Tu me fais autant rêver qu'un menu Golden",
  "Tu es le numéro 1 du Top 100 de mon coeur",
  "T'es aussi rare qu'une potatoe dans un paquet de frites",
  "T'es mignon, mais t'es un tout petit breton",
  "T'es tellement intelligent que tu pourrais jouer dans un biopic sur Einstein",
  "Sur ma vie t'es grave charmante",
  "J'aimerais être la chaise sur laquelle tu t'assois",
  "J'ai envie de m'allonger près de toi même s'il n'est pas l'heure de la sieste",
  "Je préfère presque passer du temps avec toi plutôt qu'avec mon chat",
  "Tu es aussi belle qu'Aphrodite et t'as un meilleur prénom",
  "T'es beaucoup moins con que t'en as l'air",
  "T'es un tableau de Picasso sans le côté zarbi des formes",
  "Quand tu chantes, j'oublie, j'ai plus le moindre souci, j'ai le mal qui fuit, tu donnes un son à ma vie",
  "Je t'aime plus que tes fringues",
  "Ton regard est tellement profond que j'ai vu le Commandant Cousteau en sortir",
  "De dos t'es ouf",
  "Quand je vois ta mère, j'ai envie de passer les 20 prochaines années avec toi",
  "Même ton filet de bave nocturne est mignon",
  "J'aimerais que tu sois une tranche de pain, et que je sois un grille-pain",
  "Si uN gRaIn dE SabLe SigNifaIt L'aMouR, jE t'OffRirAis lE sAhaRa",
];

const wordsHTML = document.querySelector(".words");
const actionButtonHTML = document.querySelector(".button-action");
const stopButtonHTML = document.querySelector(".button-stop");

const createRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const generateCompliment = () => {
  const index = createRandomIndex(COMPLIMENTS.length);
  const text = COMPLIMENTS[index];

  wordsHTML.innerText = text;
};

const generateButton = () => {
  const index = createRandomIndex(BUTTONS.length);
  const text = BUTTONS[index];

  actionButtonHTML.innerText = text;
};

export const generateColor = () => {
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * hexValues.length);
    var hexValue = hexValues[randomIndex];
    newColor += hexValue;
  }

  document.body.style.backgroundColor = newColor;
};

const stopItNow = () => {
  wordsHTML.innerText = "C'est tout pour toi, reviens bientôt 😘";
  actionButtonHTML.innerText = "NOOOON ENCORE !";
  stopButtonHTML.style.display = "none";
};

const goForTheComplimentAndStyle = () => {
  generateColor();
  generateCompliment();
  generateButton();
  if (stopButtonHTML.style.display === "none") {
    stopButtonHTML.style.display = "inline-block";
  }
};

const init = () => {
  goForTheComplimentAndStyle();
  actionButtonHTML.addEventListener("click", goForTheComplimentAndStyle);
  stopButtonHTML.addEventListener("click", stopItNow);
};

init();
