let btn = document.querySelector("#factButton");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () => {
  let link = await getImage();
  let resultContainer = document.querySelector("#result");

  // Clear previous content
  resultContainer.innerHTML = "";

  // Create new img element
  let img = document.createElement("img");
  img.setAttribute("src", link);
  resultContainer.appendChild(img);

  console.log(link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error-", e);
    return "No image found";
  }
}
