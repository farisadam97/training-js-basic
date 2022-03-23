let { User } = require('./user/user').ModelData


module.exports = {
    searchEmp: (empId, empInfo) => {
        let elm  = document.getElementById(empId);
        let employee = new User();

        employee.searchEmp(empId)
            .then(result => {
                console.log(employee)
                console.log(result)
                const emp = document.querySelector('.empInfo')
                emp.innerHTML = `Id : ${employee.id}` + "<br>" +`Name : ${employee.name}` + "<br>" + `Email : ${employee.email}`
                    + "<br>" + `Address : ${employee.address.suite}, ${employee.address.street}, ${employee.address.city}, ${employee.address.zipcode}` 
                    + "<br>" + `Phone : ${employee.phone}`+ "<br>" + `Website : ${employee.website}`
                    + "<br>" + `Company : ${employee.company.name}`;
               
            });
        
    }
};