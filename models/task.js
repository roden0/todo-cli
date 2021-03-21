const {v4:uid} = require('uuid');

class Task {
    id = '';
    desc = '';
    createDate = null;
    completeDate = null;
    tookLong = null;

    constructor(desc){
        this.id = uid();
        this.desc = desc;
        this.createDate = new Date();
    }
}

module.exports = Task;