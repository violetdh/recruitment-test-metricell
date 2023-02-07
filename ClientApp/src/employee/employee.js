async function getEmployees() {
  return fetch("/employees").then(response => response.json());
}

async function addEmployee(name, value) {
  return fetch("/employees", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, value: value })
  });
}

const nextEmployeeId = (employees) =>
  employees.reduce((prevMax, employee) => Math.max(prevMax, employee.id), 0) +
  1;

export { getEmployees, addEmployee };
