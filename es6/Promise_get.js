import fs from 'fs';


function getFile(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf8',(err,dataStr)=>{
            if(err) return reject(err);
            resolve(dataStr);
        });
    })
}

getFile('./a.js').then((r1)=>{console.log(r1)},(err)=>{console.log(err)});