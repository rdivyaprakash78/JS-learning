function addTodo() {
  let todo = document.getElementById("inputArea").value;
  const textArea = document.getElementById("listArea");
  textArea.innerHTML = todo;
}
