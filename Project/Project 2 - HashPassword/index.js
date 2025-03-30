process.env.UV_THREADPOOL_SIZE=5;
let start = Date.now();
const crypto = require("crypto");

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  
  console.log(`Time taken: ${Date.now() - start}ms`);
});
crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
 
  console.log(`Time taken: ${Date.now() - start}ms`);
});
crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {

  console.log(`Time taken: ${Date.now() - start}ms`);
});
crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {

  console.log(`Time taken: ${Date.now() - start}ms`);
});
crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
 
  console.log(`Time taken: ${Date.now() - start}ms`);
});
crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
 
  console.log(`Time taken: ${Date.now() - start}ms`);
});
