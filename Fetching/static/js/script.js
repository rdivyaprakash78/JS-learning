const form = document.getElementById("Form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("age", 45);

  for (item of formData) {
    console.log(item[0], item[1]);
  }

  const dataObject = {};
  formData.forEach((value, key) => {
    dataObject[key] = value;
  });

  json_object = JSON.stringify(dataObject);

  fetch("http://127.0.0.1:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json_object,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data received from Flask:", data); // Log the response from Flask
    });
  return true;
});
