const eventemitter = require("events")

const emitter =new eventemitter()

emitter.on("greet",()=>{
    console.log("hello")
})


emitter.emit("greet")