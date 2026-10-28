// Filter chips: show only cards whose data-cats include the chosen category.
(function () {
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".card[data-cats]");
  var empty = document.getElementById("empty");

  function apply(filter) {
    var shown = 0;
    cards.forEach(function (card) {
      var cats = (card.getAttribute("data-cats") || "").split(/\s+/);
      var match = filter === "all" || cats.indexOf(filter) !== -1;
      card.hidden = !match;
      if (match) shown += 1;
    });
    chips.forEach(function (chip) {
      chip.setAttribute("aria-pressed", chip.getAttribute("data-filter") === filter ? "true" : "false");
    });
    if (empty) empty.hidden = shown !== 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      apply(chip.getAttribute("data-filter"));
    });
  });
})();
