
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedHelloWorld() {
  console.log("Hello");
  await delay(2000); // Wait for 2 seconds
  console.log("World");
}

delayedHelloWorld();
