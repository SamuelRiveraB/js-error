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
