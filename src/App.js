import React from "react";
// import EmployeeCard from "./components/EmployeeCard.js";
// import SearchForm from "./components/SearchForm";
import API from "./utils/API";

class App extends React.Component {
    state = {
        employees: [],
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        const { data } = await API.getUsers();
        const employees = data.results.map(item => ({
            image: item.picture.thumbnail,
            name: `${item.name.first} ${item.name.first}`,
            email: item.email,
            phone: item.cell,
            dob: item.dob.date,

        }))
        this.setState({ employees });
    };
    filterEmployees = (employee) => {
        if (employee.name.includes(this.state.search)) {
            return true;
        }
        return false;
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the randomuser API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployees(this.state.search);
    };

    render() {
        // console.log(this.state);
        const { employees } = this.state;
        return (
            <table>
                <thead>
                    <th>image</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                {employees.length === 0 ? (<td> No employees!</td>
                ) : (
                    employees.filter(this.filterEmployees).map((employee =>
                    (<tr>
                        <td><img src={employee.image} alt={''}/></td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.dob}</td>
                    </tr>
                    ))))}
                    </tbody>

            </table>
        );

    }
}

export default App;

// <div>
        //   <SearchForm
        //     search={this.state.search}
        //     handleFormSubmit={this.handleFormSubmit}
        //     handleInputChange={this.handleInputChange}
        //   />
        //   <EmployeeCard results={this.state.results} />
        // </div>