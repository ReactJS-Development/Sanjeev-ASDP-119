import React , { Component } from 'react';
import './App.css';

const EmployeeData=({onNameHandler,namevalue,salaryhandler,salaryvalue,addresshandler,addressvalue,user,onClickme}) =>{
    return(
        <div className="background">
            <div className="container1">
            <form className="form-horizontal">
                <div className="form-group">
                    <label>Name</label><input type = "text" value = {namevalue} onChange={onNameHandler} /> <br/>
                    <label>Address</label><input type = 'text' value = {addressvalue} onChange={addresshandler} /><br/>
                    <label>Salary</label><input type = 'text' value = {salaryvalue} onChange={salaryhandler} /> <br/>
                    <button className="btn btn-primary" onClick={onClickme}> Click me </button>
                </div>
            </form>
            </div>

            <div className="table-responsive">
            <table className="table">
                <tr>
                    <th>Sr. No</th>
                    <th>Name </th>
                    <th>Address </th>
                    <th>Salary </th>
                </tr>
                    {
                user.map((name, index) =>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{name.name}</td> 
                        <td>{name.address}</td>
                        <td>{name.salary}</td>
                    </tr>
                        )
                        )
                    }
            </table>
            </div>
        </div>
    )
}
export default EmployeeData;