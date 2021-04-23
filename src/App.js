import React from "react";
// import EmployeeCard from "./components/EmployeeCard.js";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";

class App extends React.Component {
    state = {
        employees: [],
        search:""

    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        const { data } = await API.getUsers();
        const employees = data.results.map(item => ({
            image: item.picture.thumbnail,
            name: `${item.name.first} ${item.name.last}`,
            email: item.email,
            phone: item.cell,
            dob: item.dob.date,

        }))
        this.setState({ employees });
    };
    filterEmployees = () => {
        console.log(this.state.employees)
        const employees =this.state.employees.filter(employee => employee.name.includes(this.state.search))
        this.setState({employees})
        
       
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
        this.filterEmployees();
    };

    render() {
        // console.log(this.state);
        const { employees } = this.state;
        return (
            <>
            <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} search={this.state.search}/>
            <table>
                <thead>
                    <th>image</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                {employees.length === 0 ? (
                    <td> No employees!</td>
                ) : (
                    employees.map((employee =>
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
            </>
        );

    }
}

export default App;

