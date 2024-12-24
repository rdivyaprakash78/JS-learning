const record = document.getElementById("recordButton");

if (navigator.mediaDevices.getUserMedia) {
  function setupSuccess(stream) {
    alert("setup success");

    const mediarecorder = new MediaRecorder(stream);

    record.addEventListener("click", () => {
      if (mediarecorder.state === "recording") {
        mediarecorder.stop();
        record.style.backgroundColor = "rgb(8, 201, 79)";
      } else {
        mediarecorder.start();
        record.style.backgroundColor = "red";
      }
    });
  }
  function setupFailure() {
    alert("setup failure");
  }
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(setupSuccess, setupFailure);
} else alert("Browzer not supported");
