document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("order-form");
  const product = document.getElementById("product");
  const quantity = document.getElementById("quantity");
  const result = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    result.classList.remove("error");

    const qty = quantity.value.trim();
    const regex = /^[1-9][0-9]*$/;

    if (!regex.test(qty)) {
      result.textContent = "Ошибка: введите целое положительное число.";
      result.classList.add("error");
      return;
    }

    const total = parseFloat(product.value) * parseInt(qty, 10);
    const formatted = total.toLocaleString("ru-RU");

    result.innerHTML = `Стоимость заказа: <span class="price">${formatted} ₽</span>`;
  });
});
