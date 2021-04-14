import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onAddClick = () => {
        const people = [...this.state.people, this.state.person];
        this.setState({
            people,
            person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    generateBody = () => {
        if (this.state.people.length === 0) {
            return <h1>No people added yet! Add some people!</h1>;
        }

        return <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map((p, i) => <PersonRow key={i} person={p} />)}
            </tbody>
        </table>;
    }

    onSelectClick = person => {
        const { selectedPeople } = this.state;
        this.setState({ selectedPeople: [...selectedPeople, person] });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    person={this.state.person}
                    onFirstNameChange={this.onTextChange}
                    onLastNameChange={this.onTextChange}
                    onAgeChange={this.onTextChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick} />
                {this.generateBody()}
                

            </div>);
    }
}

export default PeopleTable;