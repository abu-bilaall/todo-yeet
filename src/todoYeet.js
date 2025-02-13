class todoYeet {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.category = 'Default';
    }

    updateDueDate(date) {
        this.dueDate = date;
    }

    setCategory(category) {
        this.category = category;
    }

    status = 'pending';
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

function createTodo (title, date) {
    return todoYeet (title, date);
}

export { createTodo };
