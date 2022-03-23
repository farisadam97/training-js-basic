const User = class User {
    id;
    name;
    email;
    address;
    phone;
    website;
    company;

    constructor(){

    }

    searchEmp(empId){
        return fetch(`https://jsonplaceholder.typicode.com/users/${empId}`)
            .then(result => {
                return result.json();
            })
            .then(result => {
                this.id = result.id;
                this.name = result.name;
                this.email = result.email;
                this.address = result.address;
                this.phone = result.phone;
                this.website = result.website;
                this.company = result.company
                return {id: this.id, name: this.name, email: this.email, address: this.address, phone: this.phone,
                    website: this.website, company: this.company}
            })
            .catch(err => {
                throw err;
            })

    }
};

module.exports.ModelData = {
    User
};