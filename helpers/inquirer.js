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
            {value:5 ,name:`Complete task(s)`},
            {value:6 ,name:`Delete task`},
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

const listToDelete = async(list)=>{
    const choices = list.map((t,i)=>{
        var index = `${i+1+". "}`.green;
        var isCompleted = t.completeDate;
        return {
            value: t.id,
            name: `${index} ${t.desc} ${isCompleted ? "\u2705" : ""}`
        }
    });

    const deleteQuestions = [
        {
            type: 'list',
            name: 'id',
            message: 'Select to delete',
            choices
        }
    ];

    const {id} = await inquirer.prompt(deleteQuestions);

    return id;
};

const listToComplete = async (list)=>{

    const choices = list.map((t,i)=>{
        var index = `${i+1+". "}`.green;
        return {
            value: t.id,
            name: `${index} ${t.desc}`,
            checked: !!t.completeDate
        }
    });

    const completeQuestions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select to complete',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(completeQuestions);

    return ids;
};

const confirm = async (message)=>{
    const confirmQuestion = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(confirmQuestion);
    return ok;
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

module.exports = {menu,pause,readInput,listToDelete, confirm, listToComplete};