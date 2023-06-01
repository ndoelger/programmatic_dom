$(() => {
  function addH2() {
    const $h2 = $("<h2>").text("Just getting started");
    $("body").append($h2);
  }

  function changeH2() {
    $("h2").text("Getting warmed up");
  }

  function randColorRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  function generateSquares(numberOfSquares) {
    for (let i = 1; i <= numberOfSquares; i++) {
      const $square = $("<div>").addClass("square");
      const color = randColorRGB();
      $square.css("background-color", color);
      $square.text(i);
      $square.attr("id", "square" + i);
      $("body").append($square);
    }
  }

  generateSquares(4000);
});
