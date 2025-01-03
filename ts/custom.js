(() => {
  // ns-hugo-imp:/home/Jacky/Blog/blog/evthronblog/themes/stack/assets/ts/components/vocab.ts
  filterSelection("all");
  var btnContainer = document.getElementById("vocab-button-container");
  var btns = btnContainer.getElementsByClassName("vocab-button");
  btns[0].className = btns[0].className + " active";
  function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("vocab-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      filterSelection(this.className.replace("vocab-button ", "").replace(" active", ""));
      this.className += " active";
    });
  }

  // ns-hugo-imp:/home/Jacky/Blog/blog/evthronblog/themes/stack/assets/ts/components/clock.ts
  function displayTime() {
    var date = /* @__PURE__ */ new Date();
    var time = date.toLocaleTimeString();
    document.querySelector(".clock").innerHTML = time;
  }
  setInterval(displayTime, 1e3);

  // ns-hugo-imp:/home/Jacky/Blog/blog/evthronblog/themes/stack/assets/ts/components/progress-bar.ts
  var element_count = document.getElementsByTagName("h3").length;
  var experience = document.getElementById("component-count");
  experience.innerHTML = element_count + "/" + levelCap(element_count);
  var level = document.querySelector(".progress-bar-level");
  level.innerHTML = "Lv" + experienceToLevel(element_count);
  var bar = document.querySelector(".progress-bar-experience");
  var percentage = (element_count - levelBottom(element_count)) / (levelCap(element_count) - levelBottom(element_count)) * 100;
  bar.style.width = percentage + "%";
  function levelCap(experience2) {
    return levelToExperience(experienceToLevel(experience2) + 1);
  }
  function levelBottom(experience2) {
    return levelToExperience(experienceToLevel(experience2));
  }
  function experienceToLevel(value) {
    return Math.floor(Math.sqrt(value / 6 + 0.25) + 0.5);
  }
  function levelToExperience(level2) {
    return 6 * level2 * (level2 - 1);
  }
})();
