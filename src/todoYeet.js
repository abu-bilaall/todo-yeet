let todoYeets = [];
class todoYeet {
  constructor(title) {
    this.title = title;
    this.dueDate = ""; // today's date
    this.category = "Personal";
  }

  updateDueDate(date) {
    this.dueDate = date;
  }

  setCategory(category) {
    this.category = category;
  }

  status = "pending";
  setStatus(state) {
    this.status = state;
  }

  setDescription(descriptionText) {
    return descriptionText;
  }

  yeetTags = [];
  setTags(tag) {
    this.yeetTags.push(tag);
  }
}

function createYeet(title) {
  return new todoYeet(title);
}

function addToYeets(yeet) {
  todoYeets.push(yeet);
}

export { createYeet, addToYeets, todoYeets };
