export function clearPage() {
    // clear contents
    const content = document.querySelector("#content");
  
    if (content.firstChild) {
      while (content.firstChild) {
        content.firstChild.remove();
      }
    }
  }