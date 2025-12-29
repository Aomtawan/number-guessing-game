// filepath: script.js
// Refactor: improve readability and variable naming

// ตัวแปรเก็บเลขคำตอบ (สุ่มตั้งแต่ 1 - 100)
let targetNumber = Math.floor(Math.random() * 100) + 1;

/**
 * ฟังก์ชันตรวจสอบตัวเลขที่ผู้ใช้ทาย
 */
function checkGuess() {
  // รับค่าที่ผู้ใช้กรอก และแปลงเป็นตัวเลข
  let userGuess = parseInt(document.getElementById("txt").value);

  // element สำหรับแสดงผลลัพธ์
  let resultElement = document.getElementById("result");

  if (userGuess === targetNumber) {
    resultElement.textContent = "✓ ถูกต้อง!";
  } else if (userGuess > targetNumber) {
    resultElement.textContent = "↓ ตัวเลขสูงไป";
  } else {
    resultElement.textContent = "↑ ตัวเลขต่ำไป";
  }
}
