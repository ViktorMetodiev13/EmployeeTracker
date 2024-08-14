import './addEmployee.css';

import React from "react"

export const AddEmployee: React.FC = () => {
    return (
        <div className='add-employee'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                    <select className="form-select">
                        <option>CEO/CTO</option>
                        <option>Team Lead</option>
                        <option>Senior</option>
                        <option>Mid</option>
                        <option>Junior</option>
                        <option>Intern</option>
                        <option>Contract</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}