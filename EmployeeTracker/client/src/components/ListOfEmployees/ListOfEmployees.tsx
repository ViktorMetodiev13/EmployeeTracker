import './listOfEmployees.css';

import React from "react"

export const ListOfEmployees: React.FC = () => {
    return (
        <div className="employees-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th scope="col">Started Working In</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Viktor Metodiev</td>
                        <td>metodievviktor1@gmail.com</td>
                        <td>+0987654321</td>
                        <td>Team Lead</td>
                        <td>December 2021</td>
                        <td>
                            <button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Stefan Yordanov</td>
                        <td>stYordanov@gmail.com</td>
                        <td>+1234567890</td>
                        <td>Senior Web Dev</td>
                        <td>March 2022</td>
                        <td><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Yordan Vladimirov</td>
                        <td>yoVladimirov@gmail.com</td>
                        <td>+1234567890</td>
                        <td>CEO</td>
                        <td>November 2018</td>
                        <td><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}