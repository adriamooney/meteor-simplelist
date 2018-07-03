import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 10;

class EmployeeList extends Component {

  componentWillMount() {
    console.log(this);
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page +1));
    this.page +=1;
  }

  render() {
    return (

      <div>
        <div className="employee-list">
            {this.props.employees.map(employee => <EmployeeDetail employee={employee} key={employee._id}/>)}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
        className="btn btn-primary">Load More</button>
      </div>
    );
  }
}

export default createContainer(() => {
    //set up subscription
    Meteor.subscribe('employees', PER_PAGE);
    // return an object. whatever we return will be sent to EmployeeList component //as props
    return { employees: Employees.find({}).fetch() }
}, EmployeeList);
