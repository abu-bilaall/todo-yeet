import("./index.css");

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
