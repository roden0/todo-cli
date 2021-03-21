require('colors');

const { saveFile, readFile } = require('./helpers/filer');
const { menu,pause, readInput } = require('./helpers/inquirer');
const TaskList = require('./models/tasks');

const main = async()=>{
    let opt = "";

    let l = new TaskList();

    const storedData = readFile();
    if(storedData) l.loadList(storedData);
    
    do{
        opt = await menu();

            switch (opt) {
                case 1:
                    const desc = await readInput("Insert task description: ");
                    console.log(desc);
                    l.createTask(desc);
                    break;
                case 2:
                    l.displayList();
                    break;
                case 3:
                    l.displayByStatus(true);
                    break;
                case 4:
                    l.displayByStatus();
                    break;
                case 5:
            
                    break;
                case 0:
            
                    break;
                default:
                    break;
            }

        await pause();

        saveFile(l.listArray);

    } while(opt !== 0);

    console.log("\nGood bye.\n".blue);

};

main();