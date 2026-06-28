import Chart from "chart.js/auto";
import { notice, success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const config = {
  type: "line",
  data: chartData,
  options: {},
};
const salesChart = new Chart(document.getElementById("sales-chart"), config);

const keys = ["a", "s", "d", "f", "j", "k", "l", "q", "w", "e"];

let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
const newGameButton = document.getElementById("newGame");

function startGame() {
  currentKeyIndex = 0;
  const randomIndex = Math.floor(Math.random() * keys.length);
  currentKeyIndex = randomIndex;
  keyElement.textContent = keys[currentKeyIndex];
  notice({ text: "Гра почалась!" });
}

document.addEventListener("keydown", function (event) {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    notice({ text: "Правильно!" });

    currentKeyIndex = Math.floor(Math.random() * keys.length);

    keyElement.textContent = keys[currentKeyIndex];
  } else {
    notice({ text: "Неправильна клавіша!" });
  }
});

document.addEventListener("keypress", function (event) {
  event.preventDefault();
});

newGameButton.addEventListener("click", function () {
  startGame();
});

startGame();
