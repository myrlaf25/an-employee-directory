import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

class App extends React.Component {
    state = {
        employees: [],
        search: ""

    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        const { data } = await API.getUsers();
        const employees = data.results.map(item => ({
            image: item.picture.large,
            name: `${item.name.first} ${item.name.last}`,
            email: item.email,
            phone: item.cell,
            dob: item.dob.date,

        }))
        this.setState({ employees });
    };
    filterEmployees = (employee) => {
        for (const key in employee) {
            if (key === "image") continue;
            if (employee[key].toLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                return true;
            }
        }
        return false;
        // console.log(this.state.employees)
        // const employees = this.state.employees.filter(employee => employee.name.includes(this.state.search))
        // this.setState({ employees })


    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the randomuser API for `this.state.search`
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.filterEmployees();
    // };

    render() {
        // console.log(this.state);
        const { employees } = this.state;
        return (
           
            <>
            <div>
                <Header />
            </div>
            <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} search={this.state.search} />
            <Wrapper>

                    {employees.length === 0 ? (
                        <td> No employees!</td>
                    ) : (
                        employees.filter(this.filterEmployees).map((employee => <EmployeeCard {...employee} />)
                        ))}
                      
                </Wrapper>
            </>
        );

    }
}

export default App;


