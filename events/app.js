$(() => {
  const $btn = $("#btn");
  $btn.on("click");

  $btn.on("click", function () {
    $("body").append("It seems as if it has been clicked!");
  });
});

//This combines the event and the listener in pseudocode
function addText() {
  $("body").append("It seems as if it has been clicked!");
}

$btn.on("click", addText);
//NO PARENTHESIS
