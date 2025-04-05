const fs = require('fs');

function bhaveshReads() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) { //this run after below because this is an Async func;
            resolve(data);
        })
    })
}

function onData(cb) {
    console.log(cb);
}

bhaveshReads().then(onData);