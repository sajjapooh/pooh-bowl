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