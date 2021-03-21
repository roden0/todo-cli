const inquirer = require('inquirer');
require('colors');

const menuQuestions =[
    {
        type: 'list',
        name: 'option',
        message: "Welcome to the TaskBot:",
        choices: [
            {value:1 ,name:`Create task`},
            {value:2 ,name:`List tasks`},
            {value:3 ,name:`List completed tasks`},
            {value:4 ,name:`List pending tasks`},
            //{value:5 ,name:`Complete task(s)`},
            {value:0 ,name:`Exit`}
        ]
    }
];
const pauseQuestion = [
    {
        type: 'input',
        name: 'enter',
        message: `Confirm or continue with ${"ENTER".green}`
    }
];

const menu = async ()=>{
    console.clear();
    console.log("Please, select an option:".green);
    console.log("_________________________ \n".green); 

    const {option} = await inquirer.prompt(menuQuestions);

    return option;
};

const pause = async ()=>{
    return await inquirer.prompt(pauseQuestion);
};


const readInput = async (message)=>{
    const inputQuestion = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(v){
                return v.length === 0 ? "please insert a description text": true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(inputQuestion);
    return desc;
};

module.exports = {menu,pause,readInput};