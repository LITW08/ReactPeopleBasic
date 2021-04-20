import React from 'react';

class PersonRow extends React.Component {

    // onSelectClick = () => {
    //     const { person, onSelectClick } = this.props;
    //     onSelectClick(person);
    // }

    render() {
        const { person, onSelectClick, onUnselectClick, isSelected } = this.props;
        return (
            <tr className={person.age >= 65 ? 'table-danger' : ''}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger': 'success'}`} onClick={isSelected ? onUnselectClick : onSelectClick}>
                        {isSelected ? 'Unselect' : 'Select'}
                    </button>
                </td>
            </tr>
        );
    }
}

export default PersonRow;