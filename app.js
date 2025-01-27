window.onload = function () {
  const topSymbol = document.getElementById("top-symbol");
  const number = document.getElementById("number");
  const bottomSymbol = document.getElementById("bottom-symbol");

  const colors = ["red", "black"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  topSymbol.style.color = randomColor;
  number.style.color = randomColor;
  bottomSymbol.style.color = randomColor;

  const symbols = ["♠", "♥", "♦", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  topSymbol.textContent = randomSymbol;
  number.textContent = randomNumber;
  bottomSymbol.textContent = randomSymbol;
};
