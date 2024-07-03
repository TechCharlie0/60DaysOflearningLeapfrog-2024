//axios:library to make http request

async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res);
  } catch (e) {
    console.log("error-", e);
  }
}
