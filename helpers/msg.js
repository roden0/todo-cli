 require('colors');
 const readline = require('readline');

 const pause = ()=>{
     const pl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout
    });
     return new Promise(resolve =>{
        pl.question(`\nPress ${ "ENTER".green} to continue... `,(opt)=>{
            pl.close();
            resolve(opt);
        });
     });
 };
 
 const showMenu = ()=>{
    const ml = readline.createInterface({
        input:  process.stdin,
        output: process.stdout
    });
     return new Promise(resolve =>{
        console.clear();
        console.log("Please, select an option:".green);
        console.log("_________________________ \n".green);

        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List tasks`);
        console.log(`${'3.'.green} List completed task`);
        console.log(`${'4.'.green} List pending task`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'0.'.green} Exit \n`);

        ml.question("Select an option: ",(opt)=>{
            ml.close();
            resolve(opt);
        });
     });
 };

 module.exports = {showMenu,pause}