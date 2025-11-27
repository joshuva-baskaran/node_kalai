const EventEmitter = require("events");
const event = new EventEmitter();

event.on("start", () => {
  console.log("Process started!");
});

event.on("progress", (p) => {
  console.log(`Processing: 20%`);
  
  console.log(`Processing: ${p}%`);
  console.log(`Processing: 80%`);
  console.log(`Processing: 99%`);


});

event.on("end", () => {
  console.log("Process finished!");
});

event.on("failed", () => {
  console.log("Process failed");
});

event.on("login",(name)=>{
    console.log("hello",name);
})


// Trigger events
// event.emit("start");
// event.emit("progress", 50);
// event.emit("end")

event.emit("login","josh")
event.emit("login","kalai")
