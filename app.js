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
const areaCodeInput = document.querySelector("#areacode");

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
  const match = cities.locations.find(
    (location) => location.name === selectedOption
  );

  if (match) {
    provInput.value = match.province;
    areaCodeInput.value = "+27";
  } else {
    return;
  }
});

// ===============================================
//                 DELIVERY METHOD clicked remains
// ===============================================

const blocks = document.querySelectorAll(".price-block");
const title = document.querySelector(".delivery-title");
const price = document.querySelector(".delivery-price");
const time = document.querySelector(".delivery-time");
const blocksDiv = document.querySelector(".price-blocks-div");

blocks.forEach((block) => {
  block.addEventListener("click", () => {
    blocks.forEach((blocknr2) => {
      if (blocknr2 !== block) {
        blocknr2.classList.remove("selected");
      }
    });
    block.classList.toggle("selected");
  });
});

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

// ===============================================
//                Estimated delivery time
// ===============================================

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let getMonth = (month) => {
  return months[month];
};

const today = new Date();
let day = today.getDate();
console.log(day);
const monthIndex = today.getMonth();
const monthName = getMonth(monthIndex);
console.log(monthName);

// final date string
const currentDateString = `${day}th of ${monthName}`;

// add to innertext
const currentDate = document.querySelector(".estimated-time");
currentDate.textContent = currentDateString;

// update delivery date

const updateDate = () => {
  const standardDel = document.querySelector(".standard-delivery");
  const expressDel = document.querySelector(".express-delivery");
  expressDel.addEventListener("click", () => {
    const nextDay = day + 1;
    const updatedDateString = `${nextDay}th of ${monthName}`;
    currentDate.textContent = updatedDateString;
  });
  standardDel.addEventListener("click", () => {
    // const nextMonth = monthIndex + 1; *to calc nextmonth*
    // const monthNextName = getMonth(nextMonth);
    const standardDays = day + 4;
    const updatedDateString = `${standardDays}th of ${monthName}`;
    currentDate.textContent = updatedDateString;
    // if statement for when the days reach 30/31 days, called nextmonth
  });
};
updateDate();
