var carousel=document.querySelector(".carousel"),imgs=carousel.querySelectorAll("img"),intervalTime=3e3,activeImg=0;function changeImg(){imgs[activeImg].classList.remove("active"),++activeImg===imgs.length&&(activeImg=0),imgs[activeImg].classList.add("active")}setInterval(changeImg,intervalTime);
//# sourceMappingURL=index.8b822b77.js.map
