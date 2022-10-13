import {useState} from 'react';

const Employees = () => {

    const [employees , setEmployees]=useState([
    {id:1,
     fullName:"Jey",
     designation:"JS Dev",
     gender:"male",
     teamName:"TeamA"},
    {id:2,
     fullName:"Sohini",
     designation:"Node Dev",
     gender:"female",
     teamName:"TeamB"},
    {id:1,
     fullName:"Gayathri",
     designation:"Java Dev",
     gender:"female",
     teamName:"TeamC"},
    {id:1,
     fullName:"Vihi",
     designation:"React Dev",
     gender:"female",
     teamName:"TeamD"}
    ]);

  return (
    <main>
      {
      employees.map((employee) =>(
        <p>{employee.fullName}</p>
      ))
      }
    </main>
  )
  
}

export default Employees