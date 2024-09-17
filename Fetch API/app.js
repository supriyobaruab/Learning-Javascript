let URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
let btn = document.querySelector(".fact");
let text = document.querySelector(".text");
console.log(promise);

const getFacts = async () => {
  console.log("Getting data........");
  let response = fetch(URL);
  console.log(response); // JSON format
  let data = await response.json();
  btn.addEventListener("click", () => {
    text.innerText = data[1].text;
  });
};
btn.addEventListener("click", getFacts);
