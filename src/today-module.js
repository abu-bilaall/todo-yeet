function clearPage() {
  // clear contents
  const content = document.querySelector("#content");

  if (content.firstChild) {
    while (content.firstChild) {
      content.firstChild.remove();
    }
  }
}

export function loadTodayYeets() {
  const content = document.querySelector("#content");
  if (content.firstChild) clearPage();

  const dateContainer = document.createElement("div");
  dateContainer.setAttribute("id", "date-container");
  dateContainer.textContent = "February 15, Saturday";

  const yeetInput = document.createElement("input");
  yeetInput.setAttribute("id", "yeet-input");
  yeetInput.setAttribute("type", "text");
  yeetInput.setAttribute('placeholder', '+ Add a new task');

  content.append(dateContainer, yeetInput);
}
