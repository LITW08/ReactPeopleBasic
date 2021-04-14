import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age } = this.props.person;
        const { onFirstNameChange, onLastNameChange,
            onAgeChange, onAddClick, onClearClick } = this.props;
        return (
            <div className="row jumbotron">
                <div className="col-md-3">
                    <input type="text" placeholder="First Name"
                        name="firstName" className="form-control"
                        value={firstName}
                        onChange={onFirstNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Last Name"
                        name="lastName" className="form-control"
                        value={lastName}
                        onChange={onLastNameChange} />
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Age"
                        name="age" className="form-control"
                        value={age}
                        onChange={onAgeChange} />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button className="btn btn-warning ml-3" onClick={onClearClick}>Clear All</button>
                </div>
            </div>
        );
    }
}

export default PersonForm;