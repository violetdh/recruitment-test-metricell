import React, { useState, useEffect } from 'react';
import App from './App';

export default class Table {

employeesRow({name}) {
    const name = this.props.name;
    return (
        <tr>
            <td>{name}</td>
            <td>{employee.value}</td>
        </tr>
    );
}

employeesTable({employees}){
    const rows = [];
    employees.forEach((employee) => {
        rows.push(
            <employeesRow
            employee={employee}
            key = {employee.name} />
        );
    }
    )
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <tr>Value</tr>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

EMPLOYEES = [ 
{name: "Jeff", value: "sdfdsgds"},
{name: "John", value: "fdgefgfs"}
]

render() {
    return(
        <div>
            <button className="btn btn-primary" onClick={this.employeesTable(this.EMPLOYEES)}>Table</button>
        </div>
    );
}


}