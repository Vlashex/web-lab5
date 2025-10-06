document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");
  const quantityInput = document.getElementById("quantity");
  const productSelect = document.getElementById("product");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const quantity = quantityInput.value.trim();
    const regex = /^[0-9]+$/;

    // Проверка корректности ввода
    if (!regex.test(quantity)) {
      result.textContent = "Ошибка: введите только целое число!";
      result.style.color = "red";
      return;
    }

    const price = parseFloat(productSelect.value);
    const total = price * parseInt(quantity, 10);

    result.style.color = "black";
    result.textContent = `Стоимость заказа: ${total} ₽`;
  });
});
