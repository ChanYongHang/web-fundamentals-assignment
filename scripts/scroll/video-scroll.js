
const videoRightArrow = document.querySelector(
  ".video-scrollbar-box .right-arrow svg"
);

const videoLeftArrow = document.querySelector(
  ".video-scrollbar-box .left-arrow svg"
);

const videoTabsList = document.querySelector(".video-scrollbar-box ul");

const videoLeftArrowContainer = document.querySelector(".video-scrollbar-box .left-arrow");
const videoRightArrowContainer = document.querySelector(".video-scrollbar-box .right-arrow");

const videoManageIcons = () => {
  if (videoTabsList.scrollLeft >= 20) {
    videoLeftArrowContainer.classList.add("active");
  } else {
    videoLeftArrowContainer.classList.remove("active");
  }

  let videoMaxScrollValue = videoTabsList.scrollWidth - videoTabsList.clientWidth - 20;
  console.log("scroll width: ", videoTabsList.scrollWidth);
  console.log("client width: ", videoTabsList.clientWidth);

  if (videoTabsList.scrollLeft >= videoMaxScrollValue) {
    videoRightArrowContainer.classList.remove("active");
  } else {
    videoRightArrowContainer.classList.add("active");
  }
};

videoRightArrow.addEventListener("click", () => {
  videoTabsList.scrollLeft += 200;
  videoManageIcons();
});
videoLeftArrow.addEventListener("click", () => {
  videoTabsList.scrollLeft -= 200;
  videoMmanageIcons();
});

videoTabsList.addEventListener("scroll", videoManageIcons);

