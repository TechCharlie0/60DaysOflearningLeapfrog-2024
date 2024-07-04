let btn = document.querySelector("#factButton");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () => {
  let link = await getImages();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
  console.log(link);
});
async function getImages() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error-", e);
    return "No fact found";
  }
}
