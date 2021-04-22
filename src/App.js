import React from "react";
import EmployeeCard from "./components/EmployeeCard.js";
import SearchForm from "./components/SearchForm";
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
    this.setState({ employees: data.results });
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
    console.log(this.state);
    return (
        <div>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeCard results={this.state.results} />
        </div>
      );
    }
  }

export default App;