const Task = require('./task');
const {timeDifference} = require('../helpers/timeCalc');

class TaskList {
    constructor(){
        this.list = {};
    }

    get listArray(){
        const ls = [];
        Object.keys(this.list).map(t=>{
            ls.push(this.list[t]);
        });
        return ls;
    }

    loadList(data){
        data.map(task=>{
            this.list[task.id] = task;
        });
    }

    createTask(desc){
        const t = new Task(desc);
        this.list[t.id] = t;
    }

    deleteTask(id){
        if(this.list[id]) delete this.list[id];
    }

    completeTask(id){
        if(this.list[id]){
            this.list[id].completeDate = new Date();
        }
    }

    toggleCompleteTask(ids){
        ids.forEach(id=>{
            this.completeTask(id);
        });
        this.listArray.forEach(t=>{
            if(!ids.includes(t.id)){
                this.list[t.id].completeDate = null;
            }
        });
    }

    displayList(){
        var len = this.listArray.length;
        return this.listArray.forEach((task,i)=>{
            var isCompleted = task.completeDate;
            var isLast = i+1 === len;
            var index = `${i+1}. `.green;

            console.log(`${i===0?"\n":""} ${index} ${isCompleted ? task.desc.grey : task.desc } ${isCompleted ? "\u2705" : ""} ${isLast ? "\n": ""}`)
        });
    }

    displayByStatus(onlyCompleted){
        var list = onlyCompleted ? this.listArray.filter(t=>t.completeDate) : this.listArray.filter(t=>!t.completeDate);
        var len = list.length;

        return len ? list.forEach((task,i)=>{
            
            var isLast = i+1 === len;
            var index = `${i+1}. `.green;
            var elapsedTime = onlyCompleted ? `\u23f1 (it took ${timeDifference(new Date(task.createDate),new Date(task.completeDate))})` : `\u23f1 (created on ${task.createDate})`;

            console.log(`${i===0?"\n":""} ${index} ${onlyCompleted ? task.desc.grey : task.desc} ${elapsedTime} ${isLast ? "\n": ""}`)
        }): console.log(`\nZero ${onlyCompleted ? "completed": "pending"} tasks found \n`);;
    }
}

module.exports = TaskList;