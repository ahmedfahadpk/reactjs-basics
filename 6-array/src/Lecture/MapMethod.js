/* import React from 'react';

const MapMethod = () => {

    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listItems = myArray.map((mynumber) => <li>{mynumber}</li>);

    return (
        <div>
            {listItems}
        </div>
    );
}

export default MapMethod; */

import React, { Component } from 'react';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class MapMethod extends Component {
    state = {
        numberslist: myArray
    };

    removeHandler = (listindex) => {
        // mutating directly
        //const myOldArray = this.state.numberslist;

        // using slice method without passing any methods creating a copy
        //const myOldArray = this.state.numberslist.slice();

        // copy old array and then edit it
        const myOldArray = [...this.state.numberslist];

        myOldArray.splice(listindex, 1);
        this.setState({ numberslist: myOldArray});

        console.log('wow', listindex);
    };

    render() {
        // Render every element seperately
    const listItems = this.state.numberslist.map((number, index) => (
    <li key={index} onClick={this.removeHandler.bind(this, index)}>{number}</li>
    ));

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default MapMethod;

