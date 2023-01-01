let formElem = document.querySelector("#form");
let inputText = document.querySelector("#inputText");
let outputBox = document.querySelector("#output-box");


let wikipediaUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20`;

const cratedUrl = (searchVal) => {
  return `${wikipediaUrl}&srsearch=${searchVal}`;
}



const showResult = (searchValue) => {
  // console.log(searchValue);

  fetch(cratedUrl(searchValue))
    .then((response) => response.json())
    .then((data) => displayResult(data.query.search))
    .catch((err) => console.log("Error Occured"));


}

const displayResult = (resultArr) => {
  // console.log(resultArr);


  resultArr.forEach((item) => {
    let itemTitle = item.title;
    let itemDescription = item.snippet;
    let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${itemTitle}`);

    console.log(itemTitle);
    console.log(itemDescription);
    console.log(itemUrl)
  })
}

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("Working");
  showResult(inputText.value);
})


// encodeURI see this -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI