let DATA = "Secret files";
class User{
    constructor(name ,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data is =",DATA);
    }
}

class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA= prompt("Edit the data");
    }
}

let info = new User;
let student1 = new User("Supriyo","suxpriyo@gmail.com");
let Admin = new admin("admin","admin@gmail.com");