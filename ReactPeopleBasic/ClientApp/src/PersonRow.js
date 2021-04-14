import React from 'react';

class PersonRow extends React.Component {

    render() {
        const { person } = this.props;
        return (
            <tr className={person.age >= 65 ? 'table-danger' : ''}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
            </tr>
        );
    }
}

export default PersonRow;