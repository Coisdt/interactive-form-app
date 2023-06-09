// ===============================================
//                CHECK VALIDITY
// ===============================================

const allInputs = document.querySelectorAll(".input");
// check validity
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid grey";
    } else if (input.checkValidity()) {
      input.style.border = "2px solid green";
    } else if (!input.checkValidity()) {
      input.style.border = "2px solid red";
    } else {
      input.style.border = "2px solid grey";
    }
  });
});

// ===============================================
//                CITIES OBJECT DATA
// ===============================================
const cities = {
  locations: [
    {
      name: "Johannesburg",
      type: "City",
      province: "Gauteng",
    },
    {
      name: "Cape Town",
      type: "City",
      province: "Western Cape",
    },
    {
      name: "Durban",
      type: "City",
      province: "KwaZulu-Natal",
    },
    {
      name: "Pretoria",
      type: "City",
      province: "Gauteng",
    },
    {
      name: "Port Elizabeth",
      type: "City",
      province: "Eastern Cape",
    },
    {
      name: "Bloemfontein",
      type: "City",
      province: "Free State",
    },
    {
      name: "East London",
      type: "City",
      province: "Eastern Cape",
    },
    {
      name: "Nelspruit",
      type: "City",
      province: "Mpumalanga",
    },
    {
      name: "Polokwane",
      type: "City",
      province: "Limpopo",
    },
    {
      name: "Kimberley",
      type: "City",
      province: "Northern Cape",
    },
    {
      name: "Rustenburg",
      type: "City",
      province: "North West",
    },
    {
      name: "George",
      type: "City",
      province: "Western Cape",
    },
    {
      name: "Upington",
      type: "Town",
      province: "Northern Cape",
    },
    {
      name: "Mthatha",
      type: "Town",
      province: "Eastern Cape",
    },
    {
      name: "Mahikeng",
      type: "Town",
      province: "North West",
    },
    {
      name: "Witbank",
      type: "Town",
      province: "Mpumalanga",
    },
    {
      name: "Klerksdorp",
      type: "Town",
      province: "North West",
    },
    {
      name: "Welkom",
      type: "Town",
      province: "Free State",
    },
    {
      name: "Vryheid",
      type: "Town",
      province: "KwaZulu-Natal",
    },
    {
      name: "Uitenhage",
      type: "Town",
      province: "Eastern Cape",
    },
  ],
};

// ===============================================
//                CITIES OPTIONS
// ===============================================

const cityOptionsList = document.querySelector("#cityOptionsList");
const provOptionsList = document.querySelector("#provOptionsList");
const provInput = document.querySelector("#province");
const cityInput = document.querySelector("#city");

cities.locations.forEach((location) => {
  const option = document.createElement("option");
  option.value = location.name;
  option.textContent = location.name;
  cityOptionsList.appendChild(option);
});

// ===============================================
//                MATCH CITY TO PROVINCE
// ===============================================

cityInput.addEventListener("input", (event) => {
  const selectedOption = event.target.value;
  // console.log("Option selected:", selectedOption);
  const match = cities.locations.find(
    (location) => location.name === selectedOption
  );

  if (match) {
    console.log(match);
    // const option = document.createElement("option");
    // option.value = match.province;
    // option.textContent = match.province;
    // provOptionsList.appendChild(option);
    provInput.value = match.province;
  } else {
    return;
  }
});

// ===============================================
//                 DELIVERY METHOD clicked remains
// ===============================================

// ===============================================
//                CART TOGGLE
// ===============================================

const cartShow = document.querySelector(".cart-modal");
const cartIcon = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cartShow.classList.toggle("show");
});
// cartIcon.addEventListener("mouseout", () => {
//   cartShow.classList.remove("show");
// });

// could use mouseover and mouseout for hover
