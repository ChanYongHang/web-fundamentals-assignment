
const discographyRightArrow = document.querySelector(
    ".discography-scrollbar-box .right-arrow svg"
  );
  
  const discographyLeftArrow = document.querySelector(
    ".discography-scrollbar-box .left-arrow svg"
  );
  
  const discographyTabsList = document.querySelector(".discography-scrollbar-box ul");
  
  const discographyLeftArrowContainer = document.querySelector(".discography-scrollbar-box .left-arrow");
  const discographyRightArrowContainer = document.querySelector(".discography-scrollbar-box .right-arrow");
  
  const discographyManageIcons = () => {
    if (discographyTabsList.scrollLeft >= 20) {
      discographyLeftArrowContainer.classList.add("active");
    } else {
      discographyLeftArrowContainer.classList.remove("active");
    }
  
    let discographyMaxScrollValue = discographyTabsList.scrollWidth - discographyTabsList.clientWidth - 20;
    console.log("scroll width: ", discographyTabsList.scrollWidth);
    console.log("client width: ", discographyTabsList.clientWidth);
  
    if (discographyTabsList.scrollLeft >= discographyMaxScrollValue) {
      discographyRightArrowContainer.classList.remove("active");
    } else {
      discographyRightArrowContainer.classList.add("active");
    }
  };
  
  discographyRightArrow.addEventListener("click", () => {
    discographyTabsList.scrollLeft += 200;
    discographyManageIcons();
  });
  discographyLeftArrow.addEventListener("click", () => {
    discographyTabsList.scrollLeft -= 200;
    discographyMmanageIcons();
  });
  
  discographyTabsList.addEventListener("scroll", discographyManageIcons);
  
  