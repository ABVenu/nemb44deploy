const Redis = require("ioredis");
/// connecting redis db with nodejs
const redis = new Redis();

redis.set("mytodo",JSON.stringify({title:"Learn Redis",status:false}), "EX", 15);


// let data = redis.get("mytodo");

// setInterval(()=>{
//     data.then((d)=>{
//         console.log(JSON.parse(d))
       
//     })   
// },1000)