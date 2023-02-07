import { useEffect, useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import { addEmployee, getEmployees } from "./employee";
import EmployeeList from "./EmployeeList";


const EmployeesSection = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((employees) => setEmployees(employees))
      .catch(() => setError(true)); 
  }, []); 

  return (
    <div>
      {error ? (
        <p>Unable to fetch employees</p>
      ) : (
        <div>
          <AddEmployeeForm
            addNewEmployee={(newEmployeeName, newEmployeeRole) =>
              setEmployees(
                addEmployee(employees, newEmployeeName, newEmployeeRole)
              )
            }
          />
          <EmployeeList employees={employees} />
        </div>
      )}
    </div>
  );
};

export default EmployeesSection;
