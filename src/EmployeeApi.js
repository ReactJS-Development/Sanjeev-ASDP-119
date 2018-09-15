import React , { Component } from 'react';
import EmployeeData from './EmployeeData';

class EmployeeApi extends Component{    
        constructor(props){
        super(props);
        this.state={user:[]
      };
    }

    componentDidMount(){
      fetch('http://localhost:4000/api/userdetails')
      .then(response => response.json())
      .then(data =>  this.setState({user : data}));
    }

    onChangeNameHandler = (event) => {
        this.setState({name :event.target.value});
    };
    onchangeSalaryhandler=(event)=>{
        this.setState({salary:event.target.value});
    };
    onchangeaddresshandler=(event)=>{
        this.setState({address:event.target.value});
    };
    onClickme=()=>{
      const name=this.state.name;
      const address=this.state.address; 
      const salary=this.state.salary;
      const newUser = this.state.user.concat({ name, address,salary});
      this.setState({user : newUser, name: "", address : "",  salary : "" });

        fetch('http://localhost:4000/api/userdetails/', {
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
              },
        body: JSON.stringify({
        name: this.state.name,
        address:this.state.address,
        salary:this.state.salary
          })
        })
         fetch('http://localhost:4000/api/userdetails')
          .then(response => response.json())
          .then(data =>  this.setState({user : data}));
    }

    render(){
        return(
            <div>
                <EmployeeData user={this.state.user} onNameHandler={this.onChangeNameHandler} namevalue={this.state.name}    salaryhandler={this.onchangeSalaryhandler} salaryvalue={this.state.salary} addresshandler={this.onchangeaddresshandler} addressvalue={this.state.address} onClickme={this.onClickme}/>
            </div>
        );
    }
}
export default EmployeeApi;