const record = document.getElementById("recordButton");
const icon = document.getElementById("icon");
const textarea = document.getElementById("textArea");

if (navigator.mediaDevices.getUserMedia()) {
  function setupSuccess(stream) {
    console.log("setup success");
    mediarecorder = new MediaRecorder(stream);

    record.addEventListener("click", (e) => {
      if (mediarecorder.state == "recording") {
        mediarecorder.stop();
        if (icon.classList.contains("fa-circle-xmark")) {
          record.style.backgroundColor = "rgb(8, 201, 79)";
          icon.classList.remove("fa-circle-xmark");
          icon.classList.add("fa-solid", "fa-microphone");
        }
      } else {
        mediarecorder.start();
        if (icon.classList.contains("fa-microphone")) {
          record.style.backgroundColor = "rgb(243, 154, 12)";
          icon.classList.remove("fa-microphone");
          icon.classList.add("fa-solid", "fa-circle-xmark");
        }
      }

      let chunks = [];
      mediarecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediarecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        chunks = []; // resetting chunks on stop

        const formData = new FormData();
        formData.append("audio", blob);

        fetch("/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => (textarea.value = data.transcript));
      };
    });
  }

  function setupFailure(err) {
    console.log("setup failure");
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(setupSuccess)
    .catch(setupFailure);
} else alert("Your browzer dont support audio recording");
