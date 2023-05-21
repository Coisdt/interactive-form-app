
//  ============================================================
//                         Job Application form 
//============================================================-->

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

emailInput.addEventListener("input", () => {
  if (emailInput.checkValidity()) {
    emailInput.style = "border: 2px solid green";
  } else {
    emailInput.style = "border: 2px solid red";
  }
});

phoneInput.addEventListener("input", () => {
  if (phoneInput.checkValidity()) {
    phoneInput.style.border = "2px solid green";
  } else if (phoneInput.value === "") {
    phoneInput.style.border = "1px solid grey";
  } else {
    phoneInput.style.border = "2px solid red";
  }
});
