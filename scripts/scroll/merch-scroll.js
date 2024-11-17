
const merchRightArrow = document.querySelector(
  ".merch-scrollbar-box .right-arrow svg"
);

const merchLeftArrow = document.querySelector(
  ".merch-scrollbar-box .left-arrow svg"
);

const merchTabsList = document.querySelector(".merch-scrollbar-box ul");

const merchLeftArrowContainer = document.querySelector(".merch-scrollbar-box .left-arrow");
const merchRightArrowContainer = document.querySelector(".merch-scrollbar-box .right-arrow");

const merchManageIcons = () => {
  if (merchTabsList.scrollLeft >= 20) {
    merchLeftArrowContainer.classList.add("active");
  } else {
    merchLeftArrowContainer.classList.remove("active");
  }

  let merchMaxScrollValue = merchTabsList.scrollWidth - merchTabsList.clientWidth - 20;
  console.log("scroll width: ", merchTabsList.scrollWidth);
  console.log("client width: ", merchTabsList.clientWidth);

  if (merchTabsList.scrollLeft >= merchMaxScrollValue) {
    merchRightArrowContainer.classList.remove("active");
  } else {
    merchRightArrowContainer.classList.add("active");
  }
};

merchRightArrow.addEventListener("click", () => {
  merchTabsList.scrollLeft += 200;
  merchManageIcons();
});
merchLeftArrow.addEventListener("click", () => {
  merchTabsList.scrollLeft -= 200;
  merchMmanageIcons();
});

merchTabsList.addEventListener("scroll", merchManageIcons);

