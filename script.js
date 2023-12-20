let button = document.getElementById("play-video");
let modal = document.getElementById("video-modal");
let iframe = document.getElementById("video-frame");
let modalBox = document.getElementsByClassName("modal-content");



// When the user clicks the button, open the modal and play the video
button.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks the close button, close the modal and stop the video
// closee.onclick = function() {
//   modal.style.display = "none";
//   closee.style.display="none"
//   // iframe.src = "";
// }

// When the user clicks anywhere outside of the modal, close it and stop the video
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // iframe.src = "";
  }
}

