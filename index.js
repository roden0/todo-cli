require('colors');

const { saveFile, readFile } = require('./helpers/filer');
const { menu,pause, readInput, listToDelete, confirm, listToComplete} = require('./helpers/inquirer');
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
                    const ids = await listToComplete(l.listArray);
                    l.toggleCompleteTask(ids);
                    break;
                case 6:
                    const selected = await listToDelete(l.listArray);
                    const conf = await confirm("Task will be deleted, ok?")
                    if(conf) l.deleteTask(selected);
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