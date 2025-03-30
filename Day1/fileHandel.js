const fs=require("fs");

//write 
//read
//update
//delete

// sync->Blocking,   async->non-blocking

// fs.writeFileSync("./simple1.txt","Hello World this is sync write");
// fs.writeFile("./simple2.txt","Hello World this is async write",(err)=>{
//   if(err) throw err;
//   console.log("File written successfully");
// })


//* read file
const data=fs.readFileSync("./simple1.txt","utf-8");
console.log(data);
const data2=fs.readFile("./simple2.txt","utf-8",(err,data2)=>{
  if(err) throw err;
  console.log(data2);
});

// update file // append
fs.appendFile("./simple2.txt","\nThis is appended data",(err)=>{
  if(err) throw err;
  console.log(`File updated successfully${"\nNew line added: "+new Date().toISOString()}`);
});

fs.appendFileSync("./simple1.txt",`\nThis is appended data ${new Date().toISOString()}`);


// 1.cp Sync
// 2.unlinkSync
// 3.mkdirSync
// 4.statSync

