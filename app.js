//  =============================================================
//                    Job Application form                  //============================================================-->

// const name = document.getElementById('name')
// const emailInput = document.getElementById("email");
// const phoneInput = document.getElementById("phone");
// const submit = document.querySelector(".submit");
// const form = document.querySelector(".form");
// const allInputs = document.querySelectorAll("input");
//check validity
// allInputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     if (input.value.trim() === "") {
//       input.style.border = "4px solid var(--text-clr";
//     } else if (input.checkValidity()) {
//       input.style.border = "4px solid var(--approved-clr)";
//     } else {
//       input.style.border = "4px solid var(--denied-clr)";
//     }
//   });
// });

// submit btn loading

// submit.addEventListener("click", () => {
//   submit.textContent = "Loading...";
//   setTimeout(() => {
//     form.innerHTML = "hey";
//   }, 2500);
// });

const priceBlock = document.querySelectorAll(".price-block");

priceBlock.forEach((block) => {
  block.addEventListener("click", () => {
    block.classList.add("active");
  });
  block.addEventListener("click", () => {
    block.classList.remove("active");
  });
  // if(block.contains('active')){
  //   block.classList.remove('active')
  // }
});
