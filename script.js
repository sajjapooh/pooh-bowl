// 1 ทักทายตามช่วงเวลา
const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();

if (hour < 10) {
  greeting.textContent = "ร้านยังไม่เปิด เจอกัน 10 โมงนะ";
} else if (hour < 14) {
  greeting.textContent = "หิวข้าวเที่ยงแล้วใช่ไหม สั่งได้เลย";
} else if (hour < 20) {
  greeting.textContent = "แวะมากินมื้อเย็นกันนะ";
} else {
  greeting.textContent = "ร้านปิดแล้ว พรุ่งนี้มาใหม่นะ";
}

// 2 ตะกร้าเลือกเมนู
const cartList = document.querySelector("#cart-list");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const cartEmpty = document.querySelector("#cart-empty");
let count = 0;
let total = 0;

function updateCart() {
  cartCount.textContent = `${count} รายการ`;
  cartTotal.textContent = total;
  if (count === 0) {
    cartEmpty.classList.remove("hidden");
  } else {
    cartEmpty.classList.add("hidden");
  }
}

const addButtons = document.querySelectorAll(".add-btn");
for (const btn of addButtons) {
  btn.addEventListener("click", function () {
    const name = btn.dataset.name;
    const price = Number(btn.dataset.price);

    const li = document.createElement("li");
    li.className = "flex justify-between items-center border border-brand-100 px-3 py-2";
    li.textContent = `${name} ${price} บาท`;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "ลบ";
    removeBtn.className = "text-red-600 hover:underline cursor-pointer";
    removeBtn.addEventListener("click", function () {
      li.remove();
      count = count - 1;
      total = total - price;
      updateCart();
    });

    li.append(removeBtn);
    cartList.append(li);
    count = count + 1;
    total = total + price;
    updateCart();
  });
}
