let listVideo = document.querySelectorAll(".wrapper_video-list .vid");
let mainVideo = document.querySelector(".main-video iframe");
let wrapper_title = document.querySelector(".main-video .wrapper_title");

listVideo.forEach(iframe => {
  iframe.onclick = () => {
    listVideo.forEach(vid => vid.classList.remove("wrapper_active"));
    iframe.classList.add("wrapper_active");
    if (iframe.classList.contains("wrapper_active")) {
      let srs = iframe.children[0].getAttribute("src");
      mainVideo.src = srs;
      let text = iframe.children[1].innerHTML;
      wrapper_title.innerHTML = text;
    }
  };
});