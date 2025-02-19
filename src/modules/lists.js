import { todoYeets } from "./todoYeet";

console.log(todoYeets);

export function listsListener(lists) {
  lists.addEventListener("click", (event) => {
    const targetID = event.target.id;
    if (targetID === "Personal") {
      console.log("Clicked Personal.");
    } else if (targetID === "Work") {
      console.log("Clicked Work");
    } else {
      console.log("Clicked School");
    }
  });
}
