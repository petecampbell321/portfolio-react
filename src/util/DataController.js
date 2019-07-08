import projData from './projData';

class DataController {
    constructor() {
        this.data = projData;
    }

    getList() {
        for (let i = 0; i < this.data.length; i++) {
            
        }
    }

    // // ID Getter & Setter
    // get Id() {
    //     return this.id;
    // }
    // set Id(value) {
    //     this.id = value;
    // }

    // // Name Getter & Setter
    // get Name() {
    //     return this.name;
    // }
    // set Name(value) {
    //     this.name = value;
    // }
    
}

export default DataController;