let Data = require('./Data');

class DataList {
    constructor() {
        console.log('List created.');
        this.list = [];
        this.count = 0;
    }

    createProject(id, name, type, desc) {
        let temp = new Data(id, name, type, desc);
        this.list.push(temp);
        this.count++;
    }

    printList() {
        for(let i = 0; i < this.count; i++) {
            console.log(this.list[i]);
        }
    }
};

// let aList = new DataList();
// aList.createProject(1, 'Test 1', ['a type', 'another type'], 'A description for a test project');
// aList.printList();

export default DataList;

