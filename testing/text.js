const inputText = document.querySelector("label");
const form = document.querySelector("form");
const button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  const value = e.target.text.value;
  const testing = /^[a-zA-Z]{3,15}/;
  const check = testing.test(value);
  e.preventDefault();
  console.log(check);
  console.log(e.target.text.value);
  if (check) {
    console.log("you are valid");
  } else {
    alert("not valid");
  }
});
