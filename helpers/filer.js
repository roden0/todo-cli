const fs = require('fs');

const file = './data/tasks.json';

const saveFile = (data)=>{
    fs.writeFileSync(file,JSON.stringify(data));
};

const readFile = ()=>{
    if(!fs.existsSync(file)) return null;
    return JSON.parse(fs.readFileSync(file,{encoding:"utf-8"}));
};

module.exports = {saveFile,readFile};