let btn = document.querySelector("#factButton");
btn.addEventListener("click", async () => {
  btn.innerText = "Fetching...";
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
  btn.innerText = "Show new fact";
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error-", e);
    return "No fact found";
  }
}
