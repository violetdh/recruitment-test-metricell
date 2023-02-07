const EmployeeList = ({ employees }) => (
  <div>
    <h2>Employees List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>{employees.map((employee) => EmployeeListEntry(employee))}</tbody>
    </table>
  </div>
);

const EmployeeListEntry = ({ id, name, role }) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{role}</td>
    </tr>
  );
};

export default EmployeeList;
