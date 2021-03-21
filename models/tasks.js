const Task = require('./task');

class TaskList {
    constructor(){
        this.list = {};
    }
    createTask(desc){
        const t = new Task(desc);
        this.list[t.id] = t;
    }
}

module.exports = TaskList;