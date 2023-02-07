import { useState } from "react";

const ROLES = ["Apprentice", "Director", "CEO"];

const AddEmployeeForm = ({ addNewEmployee }) => {
  const defaultRole = ROLES[0];
  const [employeeName, setEmployeeName] = useState("");
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [formError, setFormError] = useState(false);

  // Using state to manage form values rather than attempting to parse the onSubmit event
  const applyFormValueChange = (event, applyFunction) =>
    applyFunction(event.target.value);
  const onEmployeeNameChange = (event) =>
    applyFormValueChange(event, setEmployeeName);
  const onEmployeeRoleChange = (event) =>
    applyFormValueChange(event, setSelectedRole);

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const validInputs = employeeName && selectedRole;
    if (validInputs) {
      addNewEmployee(employeeName, selectedRole);
    }
    setFormError(!validInputs);
  };

  return (
    <div>
      <h2>Add Employee</h2>
      {formError && <p>Error: Employee name and role must be set</p>}
      <form onSubmit={onSubmit}>
        <label>
          Employee name:
          <input
            type="text"
            name="employee_name"
            placeholder="Employee name"
            onChange={onEmployeeNameChange}
          />
        </label>
        <br />
        <label>
          Employee role:
          <select
            name="emplyoee_role"
            defaultValue={defaultRole}
            onChange={onEmployeeRoleChange}
          >
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Add Employee" />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
