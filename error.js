// Try catch
function fail() {
  try {
    console.log("this works");
    throw new Error("oopsie!!!");
  } catch (e) {
    console.log("we have made an oopsie", e);
  } finally {
    console.log("still good");
    return "returning fail";
  }
}

fail();

// Catch in promises
Promise.resolve("asyncfail")
  .then((res) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch(console.log);
    return 5;
  })
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("Final error", err);
  });

// Async try catch
(async function () {
  try {
    await Promise.reject("oopsie");
  } catch (e) {
    console.log(e);
  }
  console.log("Is this still good?");
})();
