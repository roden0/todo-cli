require('colors');

const { menu,pause, readInput } = require('./helpers/inquirer');
const TaskList = require('./models/tasks');

const main = async()=>{
    let opt = "";
    let l = new TaskList();
    do{
        opt = await menu();

            switch (opt) {
                case 1:
                    const desc = await readInput("Insert task description: ");
                    console.log(desc);
                    l.createTask(desc);
                    break;
                case 2:
                    console.log(l.list);
                    break;
                case 3:
            
                    break;
                case 4:
            
                    break;
                case 5:
            
                    break;
                case 0:
            
                    break;
                default:
                    break;
            }

        await pause();
    } while(opt !== 0);

    console.log("\nGood bye.\n".blue);

};

main();