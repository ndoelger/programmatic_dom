const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" },
];

for (let i = 0; i < data.length; i++) {}

function populateData() {
  for (let i = 0; i < data.length; i++) {
    const $infoContainer = $("<div>").addClass("info-container");
    $("body").append($infoContainer);

    const $nameDiv = $("<div>").addClass("name").text(data[i].name);
    const $addressDiv = $("<div>").addClass("address").text(data[i].address);

    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
  }
}

function addData(nameParam, addressParam) {
  data.push({ name: nameParam, address: addressParam });
  const $infoContainer = $("<div>").addClass("info-container");
  const $nameDiv = $("<div>").addClass("name").text(nameParam);
  const $addressDiv = $("<div>").addClass("address").text(addressParam);

  $infoContainer.append($nameDiv);
  $infoContainer.append($addressDiv);

  $("body").append($infoContainer);
}

$(() => {
  populateData();

  $("#submit").on("click", function () {
    const newName = $("#name").val(); //.val() returns text not a jquery element, hence why it's not $newName
    const newAddress = $("#address").val();
    addData(newName, newAddress);
  });
});
