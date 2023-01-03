// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

const init_h = document.querySelector("#bodyHeight")
const init_w = document.querySelector("#bodyWeight")
const BMIbtn = document.querySelector("#btn")
const showResult = document.querySelector("#resultText")

BMIbtn.addEventListener("click", () => {
  const height = Number(init_h.value) / 100.0
  const calcu = Number(init_w.value / (height * height))
  showResult.textContent = calcu.toFixed(2)
})

// showBMIinform()

// function showBMIinform() {
//   showResult.textContent = calcu
// }
