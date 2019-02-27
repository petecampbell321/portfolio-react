class Data {
    constructor(id, name, type, desc) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.desc = desc;

        console.log(this.name + ' was created');
    }
}

export default Data;


// let array = [];
// for(i = 0; i < 6; i++) {
//     let id = i + 1;
//     let temp = new Data(id, "Test: " + id, ["type1", "type2"], "A test description for project " + id);
//     array.push(temp);
// }

// console.log(array[3]);