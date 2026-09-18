// JavaScript practical question 42
const wait = value => new Promise(resolve => setTimeout(() => resolve(value), 100)); wait("Done").then(console.log); async function run() { console.log(await wait("Async complete")); } run();

