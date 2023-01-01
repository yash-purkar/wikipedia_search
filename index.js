let formElem = document.querySelector("#form");
let inputText = document.querySelector("#inputText");


const showResult = async (searchValue) => {
  console.log(searchValue);

  let wikipediaUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch="instagram"`
  const response = await fetch(wikipediaUrl);
  const data = await response.json();
  console.log(data);
}

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Working");
  showResult(inputText.value);
})


// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch="USER_INPUT_SEARCH_TERM".