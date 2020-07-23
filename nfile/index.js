const fs = require('fs');

//const n=5;
let filename="";
let fileChar="";
let i=0;
const createFile=(n)=>{
    for(i=1; i<=n;i++){
        filename=`./sampleFile/hello${i}.txt`;
        fileChar="Hello "+ i
        fs.writeFile(filename, fileChar,(err, data)=>{
            if(err){
                console.log("err",err);
            }
        });
    }
    console.log("Generated successfully in the console");
}
createFile(5)
