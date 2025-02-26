import { clearPage } from "./clearPage";

export function loadTodayYeets() {
  const content = document.querySelector("#content");
  content.classList.remove(...content.classList);
  content.classList.add("today");
  if (content.firstChild) clearPage();

  const dateContainer = document.createElement("div");
  dateContainer.setAttribute("id", "date-container");
  dateContainer.textContent = "February 15, Saturday";

  const yeetsContainer = document.createElement("div");
  yeetsContainer.setAttribute("id", "yeets-container");

  const yeetInput = document.createElement("input");
  yeetInput.setAttribute("id", "yeet-input");
  yeetInput.setAttribute("type", "text");
  yeetInput.setAttribute("placeholder", "+ Add a new task");

  content.append(dateContainer, yeetsContainer, yeetInput);
}

function generateYeetCard(yeetTitle) {
  const yeetsContainer = document.querySelector("#yeets-container");

  const yeetCard = document.createElement("div");
  yeetCard.classList.add("yeets");
  yeetCard.textContent = yeetTitle;

  yeetsContainer.append(yeetCard);
}

import { createYeet, addToYeets } from "./todoYeet";
document.querySelector("#content").addEventListener("keydown", (event) => {
  const yeetInput = document.querySelector("#yeet-input");
  if (yeetInput && event.target === yeetInput && event.key === "Enter") {
    let yeet = createYeet(yeetInput.value);
    addToYeets(yeet);
    generateYeetCard(yeet.title);
    yeetInput.value = "";
  }
});
