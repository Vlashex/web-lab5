/*jslint browser:true, devel:true, long:true */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const quantity = document.getElementById("quantity");
  const radios = document.querySelectorAll('input[name="type"]');
  const optionGroup = document.getElementById("option-group");
  const propertyGroup = document.getElementById("property-group");
  const option = document.getElementById("option");
  const extra = document.getElementById("extra");
  const result = document.getElementById("result");

  const basePrices = {
    basic: 500,
    option: 800,
    property: 1000,
  };

  function updateVisibility(type) {
    optionGroup.classList.toggle("hidden", type !== "option");
    propertyGroup.classList.toggle("hidden", type !== "property");
  }

  function calculate() {
    const qty = parseInt(quantity.value, 10) || 0;
    const type = document.querySelector('input[name="type"]:checked').value;
    let total = basePrices[type] * qty;

    if (type === "option") {
      total *= parseFloat(option.value);
    }

    if (type === "property" && extra.checked) {
      total *= parseFloat(extra.value);
    }

    result.innerHTML =
      'Стоимость: <span class="price">' +
      total.toLocaleString("ru-RU") +
      " ₽" +
      "</span>";
  }

  quantity.addEventListener("input", calculate);
  radios.forEach(function (r) {
    r.addEventListener("change", function (e) {
      updateVisibility(e.target.value);
      calculate();
    });
  });

  option.addEventListener("change", calculate);
  extra.addEventListener("change", calculate);

  updateVisibility("basic");
  calculate();
});
