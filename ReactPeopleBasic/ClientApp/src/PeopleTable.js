import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        },

        selectedPeople: []
    }

    onTextChange = e => {
        // const copy = { ...this.state.person };
        // copy[e.target.name] = e.target.value;
        // this.setState({ person: copy }, () => {
        //     console.log(this.state.person.firstName);
        // });
        
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });

        this.setState(nextState);

    }

    onAddClick = () => {
        const personCopy = {...this.state.person, id: uuidv4()};
        const nextState = produce(this.state, draftState => {
            draftState.people.push(personCopy);
            draftState.person.firstName = '';
            draftState.person.lastName = '';
            draftState.person.age = '';
        });
        this.setState(nextState);

        // const people = [...this.state.people, this.state.person];
        // this.setState({
        //     people,
        //     person: {
        //         firstName: '',
        //         lastName: '',
        //         age: ''
        //     }
        // });
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    onPersonSelectClick = (person) => {
        const nextState = produce(this.state, draftState => {
            draftState.selectedPeople.push(person);
        });

        this.setState(nextState);
    }

    onPersonUnselectClick = person => {
        const filtered = this.state.selectedPeople.filter(p => p.id !== person.id);
        this.setState({selectedPeople: filtered});
    }

    isPersonSelected = person => {
        const found = this.state.selectedPeople.find(p => p.id === person.id);
        return !!found;
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
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map((p, i) => {
                    const currentPerson = p;
                    return <PersonRow key={i} 
                            person={p} 
                            onSelectClick={() => this.onPersonSelectClick(currentPerson) } 
                            onUnselectClick={() => this.onPersonUnselectClick(currentPerson)}
                            isSelected={this.isPersonSelected(p)}
                            />
                })}
            </tbody>
        </table>;
    }

    render() {
        const { people } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    person={this.state.person}
                    onFirstNameChange={this.onTextChange}
                    onLastNameChange={this.onTextChange}
                    onAgeChange={this.onTextChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick} />
                {/* {!!this.state.people.length && <h1>WHAT??</h1>}*/}

                {!!this.state.selectedPeople.length && <h2>Currently selected amount: {this.state.selectedPeople.length}</h2>}
                {this.generateBody()}

                {/* {!people.length && <h1>No people added yet! Add some people!</h1>}
                {!!people.length && <table className="table table-hover table-striped table-bordered">
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
                </table>} */}



            </div>);
    }
}

export default PeopleTable;