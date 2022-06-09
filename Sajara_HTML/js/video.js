let listVideo = document.querySelectorAll(".video-list .vid .video__mrx2__img");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach(video => {
  video.onclick = () => {
    listVideo.forEach(vid => vid.classList.remove("video__mrx2__active"));
    video.classList.add("video__mrx2__active");
    if (video.classList.contains("video__mrx2__active")) {
      let srs = video.children[0].getAttribute("src");
      mainVideo.src = srs;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});