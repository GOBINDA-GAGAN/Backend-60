const eventEmitter = require("events");
const fs = require("fs");
const userEmitter = new eventEmitter();



const eventCount={
  login: 0,
  logout: 0,
  purchase: 0,
 profile_update: 0
}

const logFile="eventlog.json"
if(fs.existsSync(logFile)){
  const data=fs.readFileSync(logFile,"utf-8");
  Object.assign(eventCount, JSON.parse(data));

}


function savaFile(){
  fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2));

}

// Define event listener
userEmitter.on("LOGIN", (username) => {
  console.log(`${username} has logged in successfully.`);
  eventCount.login++;
  savaFile();
});
userEmitter.on("LOGOUT", (username) => {
  console.log(`${username} has logout in successfully.`);
  eventCount.logout++;
  savaFile();
});
userEmitter.on("PURCHASE", (username,item) => {
  console.log(`${username} has Purchase ${item} `);
  eventCount.purchase++;
  savaFile();
});
userEmitter.on("ProfileUpdate", (username,filed) => {
  console.log(`${username} successfully updated their profile: ${filed}`);
  eventCount.profile_update++;
  savaFile();
});

userEmitter.on("summary",()=>{
  console.log("Event Summary:");
  console.log(`Login: ${eventCount.login}`);
  console.log(`Logout: ${eventCount.logout}`);
  console.log(`Purchase: ${eventCount.purchase}`);
  console.log(`Profile Update: ${eventCount.profile_update}`);
})

// Trigger events

userEmitter.emit("LOGIN", "Alok");
userEmitter.emit("LOGOUT", "Alok");
userEmitter.emit("PURCHASE", "Alok", "Laptop");
userEmitter.emit("ProfileUpdate", "Alok", "email");
;

userEmitter.emit("summary");