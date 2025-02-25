import("./styles.css");
import trashSVG from "../assets/icons/trash.svg";

const plusIcons = document.querySelectorAll(".plus");

if (!window.hasAddedListeners) {
  plusIcons.forEach((plus) => {
    plus.addEventListener("click", () => {
      // check whether there is an active form in the ui
      if (document.querySelector(".category-form")) {
        return;
      }

      // if not, initialize the necessary form elements
      const container = document.createElement("div");
      container.setAttribute("class", "category-form");

      const input = document.createElement("input");
      input.setAttribute("id", "list-input");
      input.setAttribute("type", "text");

      // using the proper placeholder based on the category
      if (plus.parentElement.parentElement.parentElement.id === "lists") {
        input.setAttribute("placeholder", "Add a new list");
      } else {
        input.setAttribute("placeholder", "Add a new tag");
      }

      const addBtn = document.createElement("button");
      addBtn.setAttribute("id", "add-btn");
      addBtn.textContent = "Add";

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("id", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      const buttons = document.createElement("div");
      buttons.setAttribute("class", "btns");

      // appending elements
      buttons.append(addBtn, cancelBtn);
      container.append(input, buttons);
      plus.parentElement.parentElement.appendChild(container);
    });
  });

  window.hasAddedListeners = true;
}

// handling category addition
const categoryContainers = document.querySelectorAll(".subtitle");
categoryContainers.forEach((categoryContainer) => {
  categoryContainer.addEventListener("click", (event) => {
    if (event.target.matches("#add-btn")) {
      const input = document.querySelector("#list-input");
      const newListTitle = input.value;

      if (newListTitle) {
        const newList = document.createElement("li");
        newList.textContent = newListTitle;

        const categoryList = categoryContainer.nextElementSibling;
        categoryList.appendChild(newList);

        document.querySelector(".category-form").remove();
      } else {
        alert("You can't add a list with an empty title.");
        document.querySelector(".category-form").remove();
      }
    }
  });
});

categoryContainers.forEach((categoryContainer) => {
  categoryContainer.addEventListener("click", (event) => {
    if (event.target.matches("#cancel-btn")) {
      document.querySelector(".category-form").remove();
    }
  });
});

// handling category deletion
const categoryLists = document.querySelectorAll(".category-lists");
categoryLists.forEach((list) => {
  list.addEventListener("mouseover", (event) => {
    if (
      event.target.matches("li") &&
      !event.target.querySelector("#delete-item")
    ) {
      const deleteIcon = document.createElement("img");
      deleteIcon.setAttribute("id", "delete-item");
      deleteIcon.setAttribute("src", trashSVG);
      deleteIcon.setAttribute("width", "18px");
      deleteIcon.setAttribute("height", "auto");
      deleteIcon.setAttribute("title", "Delete");
      event.target.appendChild(deleteIcon);
    }
  });

  list.addEventListener("mouseout", (event) => {
    if (event.target.matches("li")) {
      setTimeout(() => {
        const deleteIcon = event.target.querySelector("#delete-item");
        if (
          deleteIcon &&
          !event.target.matches(":hover") &&
          !deleteIcon.matches(":hover")
        ) {
          deleteIcon.remove();
        }
      }, 200); // Delay to prevent instant removal
    }
  });

  list.addEventListener("click", (event) => {
    if (event.target.matches("#delete-item")) {
      event.target.parentElement.remove(); // Delete the entire <li>
    }
  });
});

function loadStyle(page) {
  import(`./styles/${page}.css`)
    .then(() => {
      console.log(`${page}.css loaded`);
    })
    .catch((err) => console.error(`Failed to load ${page}.css`, err));
}

// handling yeets of the day
import { loadTodayYeets } from "./modules/today-module.js";
const todayYeets = document.querySelector("#today-yeets");
todayYeets.addEventListener("click", () => {
  loadTodayYeets();
  loadStyle("today");
});

// categorical yeets logic
import { listListener } from "./modules/lists.js";
const lists = document.querySelector("#lists");
lists.addEventListener("click", (event) => {
  listListener(event);
  loadStyle("lists");
});
