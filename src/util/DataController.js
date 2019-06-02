import projData from './projData';

class DataController {
    constructor() {
        this.data = projData;
        this.id = this.data.id;
        this.name = this.data.name;
        this.type = this.data.type;
        this.desc = this.data.desc;
    }

    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
    
}

export default DataController;