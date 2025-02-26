import { todoYeets } from "./todoYeet";
import { clearPage } from "./clearPage";

export function listListener(event) {
  const content = document.querySelector("#content");
  if (content.firstChild) clearPage();

  const targetID = event.target.id;

  // list title
  const listTitle = document.createElement("h2");
  listTitle.setAttribute("id", "list-title");
  listTitle.textContent = targetID;

  // list of yeets container
  const categoryContainer = document.createElement("div");
  categoryContainer.id = "yeet-category-container";

  // list of yeets
  const listOfYeets = document.createElement("ul");
  listOfYeets.classList.add("yeetsList");

  // adding yeets to page
  const yeets = todoYeets.filter((yeet) => yeet.category === targetID);
  yeets.forEach((yeet) => {
    let yeetEntry = document.createElement("input");
    yeetEntry.type = "checkbox";

    let customCheckbox = document.createElement("span");
    customCheckbox.classList.add("custom-checkbox");

    let yeetItem = document.createElement("li");
    let yeetLabel = document.createTextNode(`${yeet.title}`);
    yeetItem.append(yeetEntry, customCheckbox, yeetLabel);

    listOfYeets.append(yeetItem);
  });

  categoryContainer.appendChild(listOfYeets);
  content.append(listTitle, categoryContainer);
}

export function toggleCheckbox() {
  const customCheckboxes = document.querySelectorAll(".custom-checkbox");
  customCheckboxes.forEach((customCheckbox) => {
    customCheckbox.addEventListener("click", (event) => {
      const yeetEntry = event.target.previousSibling;
      if (yeetEntry.checked) {
        yeetEntry.checked = false;
      } else {
        yeetEntry.checked = true;
      }
    });
  });
}