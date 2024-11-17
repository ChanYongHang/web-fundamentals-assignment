
const alikeArtistRightArrow = document.querySelector(
  ".alike-artist-scrollbar-box .right-arrow svg"
);

const alikeArtistLeftArrow = document.querySelector(
  ".alike-artist-scrollbar-box .left-arrow svg"
);

const alikeArtistTabsList = document.querySelector(".alike-artist-scrollbar-box ul");

const alikeArtistLeftArrowContainer = document.querySelector(".alike-artist-scrollbar-box .left-arrow");
const alikeArtistRightArrowContainer = document.querySelector(".alike-artist-scrollbar-box .right-arrow");

const alikeArtistManageIcons = () => {
  if (alikeArtistTabsList.scrollLeft >= 20) {
    alikeArtistLeftArrowContainer.classList.add("active");
  } else {
    alikeArtistLeftArrowContainer.classList.remove("active");
  }

  let alikeArtistMaxScrollValue = alikeArtistTabsList.scrollWidth - alikeArtistTabsList.clientWidth - 20;
  console.log("scroll width: ", alikeArtistTabsList.scrollWidth);
  console.log("client width: ", alikeArtistTabsList.clientWidth);

  if (alikeArtistTabsList.scrollLeft >= alikeArtistMaxScrollValue) {
    alikeArtistRightArrowContainer.classList.remove("active");
  } else {
    alikeArtistRightArrowContainer.classList.add("active");
  }
};

alikeArtistRightArrow.addEventListener("click", () => {
  alikeArtistTabsList.scrollLeft += 200;
  alikeArtistManageIcons();
});
alikeArtistLeftArrow.addEventListener("click", () => {
  alikeArtistTabsList.scrollLeft -= 200;
  alikeArtistManageIcons();
});

alikeArtistTabsList.addEventListener("scroll", alikeArtistManageIcons);

