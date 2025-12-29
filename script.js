// filepath: script.js

// ตัวแปรเก็บตัวเลขลับ
let secretNumber = 0;

// ตัวแปรนับจำนวนครั้งที่ทาย
let attemptCount = 0;

// ตัวเลขสูงที่สุด
let maxNumber = 100;

// ฟังก์ชันเริ่มเกมใหม่
function initializeGame() {
  const difficultySelect = document.getElementById("difficulty");
  maxNumber = parseInt(difficultySelect.value);

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  attemptCount = 0;

  document.getElementById(
    "rangeText"
  ).textContent = `ทายตัวเลขตั้งแต่ 1 ถึง ${maxNumber}`;

  updateDisplay();
}


// ฟังก์ชันอัปเดตจำนวนครั้งที่ทาย
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}

// ฟังก์ชันรีเซ็ตเกม
function resetGame() {
  initializeGame(); // เริ่มเกมใหม่
  document.getElementById("resultContainer").innerHTML = ""; // ล้างผลลัพธ์เก่า
  document.getElementById("guessInput").value = ""; // ล้างช่อง input
  document.getElementById("guessInput").focus(); // โฟกัสกลับไปที่ input
}

// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");

  // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
  if (isNaN(guessValue) || guessInput.value === "") {
    resultContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        กรุณาใส่ตัวเลข!
      </div>
    `;
    return; // ออกจากฟังก์ชันทันที
  }

  // Validation: ตรวจสอบว่าอยู่ในช่วง 1-100 หรือไม่
  if (guessValue < 1 || guessValue > maxNumber) {

    resultContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        กรุณาใส่ตัวเลขระหว่าง 1 ถึง ${maxNumber}!

      </div>
    `;
    return; // ออกจากฟังก์ชันทันที
  }

  attemptCount++; // เพิ่มจำนวนครั้งที่ทาย

  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
      <div class="alert alert-success" role="alert">
        <h5>✓ ถูกต้อง!</h5>
        <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
      </div>
    `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
      <div class="alert alert-warning" role="alert">
        ↓ ตัวเลขสูงไป
      </div>
    `;
  } else {
    resultContainer.innerHTML = `
      <div class="alert alert-info" role="alert">
        ↑ ตัวเลขต่ำไป
      </div>
    `;
  }

  updateDisplay();
  guessInput.value = "";
  guessInput.focus();
}

// เริ่มเกมเมื่อโหลดหน้า
window.addEventListener("load", initializeGame);

// เพิ่มการ select text เมื่อคลิก input และรองรับ Enter key
document.addEventListener("DOMContentLoaded", function () {
  const guessInput = document.getElementById("guessInput");

  // select text เมื่อโฟกัส
  guessInput.addEventListener("focus", function () {
    this.select();
  });

  // รองรับ Enter key
  guessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });
});
