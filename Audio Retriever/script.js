const record = document.getElementById("recordButton");
const icon = document.getElementById("icon");

if (navigator.mediaDevices.getUserMedia) {
  let setupSuccess = (stream) => {
    const mediarecorder = new MediaRecorder(stream);

    // Add event listener to the record button
    record.addEventListener("click", () => {
      if (mediarecorder.state === "recording") {
        mediarecorder.stop();
        record.style.backgroundColor = "rgb(8, 201, 79)";
      } else {
        mediarecorder.start();
        record.style.backgroundColor = "red";
      }
    });

    mediarecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediarecorder.onstop = () => {
      let blob = new Blob([chunks, { type: "audio/webm" }]);
      chunks = [];

      let formData = new FormData();
      formData.append("audio", blob);

      fetch("/audio", {
        method: "POST",
        body: formData,
      });
    };

    let setupFailure = () => {
      alert("Error accessing audio input.");
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(setupSuccess, setupFailure);
  };
} else {
  alert("Your browser does not support audio recording.");
}
