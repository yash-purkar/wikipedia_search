let formElem = document.querySelector("#form");
let inputText = document.querySelector("#inputText");


let wikipediaUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20`;

const cratedUrl = (searchVal) => {
  return `${wikipediaUrl}&srsearch=${searchVal}`;
}

const showResult = (searchValue) => {
  // console.log(searchValue);

  fetch(cratedUrl(searchValue))
    .then((response) => response.json())
    .then((data) => console.log(data))
}

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Working");
  showResult(inputText.value);
})


// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch="USER_INPUT_SEARCH_TERM".