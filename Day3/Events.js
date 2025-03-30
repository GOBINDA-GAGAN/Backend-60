const EventEmitter = require("events");
const emitter = new EventEmitter();

//emit(eventName,Listen)

//on(eventName,[arr])

emitter.on("GREET", (args) => {
  console.log(
    "Hello " + args.userName,
    args.age,
    args.country,
    args.email,
    args.phone
  );
});

emitter.emit("GREET", {
  userName: "John",
  age: 30,
  country: "USA",
  email: "john@example.com",
  phone: "+1234567890",
});
