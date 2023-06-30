// ===============================================
//                VALIDATION
// ===============================================
const allInputs = document.querySelectorAll(".input");
const orderBtn = document.querySelector(".confirm-order-btn");
const form = document.querySelector("form");

function checkValidity(input) {
  const isValid = input.checkValidity();
  // is all inputs valid
  if (input.value.trim() === "") {
    input.style.border = "2px solid grey";
  } else if (isValid) {
    input.style.border = "2px solid green";
  } else if (!isValid) {
    input.style.border = "2px solid red";
  } else {
    input.style.border = "2px solid red";
  }
}

function checkValidInput() {
  const allInputsValid = [...allInputs].every((input) => input.checkValidity());

  orderBtn.disabled = !allInputsValid;
  orderBtn.classList.toggle("confirm-order-btn-active", allInputsValid);
}
// all inputs filled
function checkAllFilled() {
  const allInputsFilled = [...allInputs].every(
    (input) => input.value.trim() !== ""
  );

  orderBtn.disabled = !allInputsFilled;
  orderBtn.classList.toggle("confirm-order-btn-active", allInputsFilled);
}

checkAllFilled();
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    // move this up
    checkValidity(input);
    checkValidInput(input);
  });
});

// const form = document.querySelector('form')
// const firstName = document.getElementById('firstName')
// const lastName = document.getElementById('lastName')
// const ID = document.getElementById('ID')
// const email = document.getElementById('email')
// const address = document.getElementById('address')
// const suburb = document.getElementById('suburb')
// const city = document.getElementById('city')
// const province = document.getElementById('province')
// const zip = document.getElementById('zip')
// const areacode = document.getElementById('areacode')
// const phonenumber = document.getElementById('phonenumber')

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
const areaCodeOptionsList = document.querySelector("#areaCodesList");

cities.locations.forEach((location) => {
  const option = document.createElement("option");
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
    const option = document.createElement("option");
    option.value = match.province;
    provOptionsList.appendChild(option);
    const optionNr = document.createElement("option");
    optionNr.value = "+27";
    areaCodeOptionsList.appendChild(optionNr);
  } else {
    provOptionsList.innerHTML = "";
  }
});

// ===============================================
//           DELIVERY METHOD BLOCKS SELCT
// ===============================================

const blocks = document.querySelectorAll(".price-block");
const title = document.querySelector(".delivery-title");
const price = document.querySelector(".delivery-price");
const time = document.querySelector(".delivery-time");
const blocksDiv = document.querySelector(".price-blocks-div");

const checkBlock = blocks.forEach((block) => {
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
//                      FINAL COST
// ===============================================

const finalPrice = () => {
  const cartFinalCost = 3150;
  const standardDeliveryCost = 200;
  const expressDeliveryCost = 350;
  const finalCost = document.querySelector(".final-cost");
  // from cart
  finalCost.textContent = cartFinalCost;
  // standard
  const standardDelivery = document.querySelector(".standard-delivery");
  standardDelivery.addEventListener("click", () => {
    finalCost.textContent = cartFinalCost + standardDeliveryCost;
  });
  // express
  const expressDelivery = document.querySelector(".express-delivery");
  expressDelivery.addEventListener("click", () => {
    finalCost.textContent = cartFinalCost + expressDeliveryCost;
  });
};

finalPrice();
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
//            ESTIMATED DELIVERY TIME
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
const monthIndex = today.getMonth();
const monthName = getMonth(monthIndex);

// final date string
const currentDateString = `${day}th of ${monthName}`;

// add to innertext
const currentDate = document.querySelector(".estimated-time");
// currentDate.textContent = currentDateString;
currentDate.textContent = "--";

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
    const standardDays = day + 5;
    // if statement for when the days reach 30/31 days, called nextmonth
    if (standardDays > 30) {
      const dayOverflow = standardDays - 30;
      const nextMonthName = getMonth(monthIndex + 1);
      // current bug is that its 30 days hardcoded

      // change the number place name like th, rd, st
      let placename = "";
      if (dayOverflow === 1 && 21 && dayOverflow === 31) {
        placename = "st";
      } else if (dayOverflow === 2 && dayOverflow === 22) {
        placename = "nd";
      } else if (dayOverflow === 3 && dayOverflow === 23) {
        placename = "rd";
      } else {
        placename = "th";
      }
      return (currentDate.textContent = `${dayOverflow}${placename} of ${nextMonthName}`);
    }
  });
};
updateDate();

// ===============================================
//               Confirm my order btn loading
// ===============================================
