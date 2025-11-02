const video = document.getElementById("myVideo");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  overlay.classList.add("hidden"); // Hide overlay
  video.play(); // Play video
});

// Optional: Ensure overlay disappears if the video is playing
video.addEventListener("play", () => {
  overlay.classList.add("hidden");
});

// Optional: Bring back the overlay when the video ends
video.addEventListener("ended", () => {
  overlay.classList.remove("hidden");
});
