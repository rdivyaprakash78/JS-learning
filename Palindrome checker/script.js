function reverseString(str) {
  return str.toLowerCase().split("").reverse().join("");
}

function handleClick() {
  const input_str = document.getElementById("inputText").value.toLowerCase();
  const reversed_str = reverseString(input_str);
  if (reversed_str == input_str) alert("PAAAALINNDROMEEEEE!!!!!");
  else alert("Try again.");
}
