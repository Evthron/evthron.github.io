(() => {
  // <stdin>
  var tagButtonsContainer = document.querySelector(".tagSearch-tags");
  var tagButtons = document.getElementsByClassName("tag-button");
  tagButtonsContainer.searchTags = [];
  for (const button of tagButtons) {
    button.addEventListener("click", function() {
      const word = this.innerHTML.toLowerCase().trim();
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        if (!tagButtonsContainer.searchTags.includes(word)) {
          tagButtonsContainer.searchTags.push(word);
        }
      } else {
        tagButtonsContainer.searchTags = tagButtonsContainer.searchTags.filter(
          (tag) => tag !== word
        );
      }
    });
  }
})();
