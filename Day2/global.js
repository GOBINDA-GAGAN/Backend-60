setTimeout(()=>{
  console.log('This is after 2 seconds'+"from global scope");
},2000)


let count = 0;

const interval=setInterval(()=>{
  count++;
  console.log('This is every second'+" from global scope "+count);
  if(count === 5){
    clearInterval(interval);
  }
},100)
console.log(Object.getOwnPropertyNames(global));

