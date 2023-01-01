let formElem = document.querySelector("#form");
let inputText = document.querySelector("#inputText");


const showResult = (searchValue) => {
  console.log(searchValue);
}

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Working");
  showResult(inputText.value);
})