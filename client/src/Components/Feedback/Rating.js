import React, {Component} from 'react';

class Rating extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <div className="rating">
                    <input type="radio" name="rating" value="5" id="5"/>
                    <label htmlFor="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4"/>
                    <label htmlFor="4">☆</label>
                    <input type="radio"  name="rating" value="3" id="3"/>
                    <label bhtmlFor="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2"/>
                    <label  htmlFor="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1"/>
                    <label htmlFor="1">☆</label>
                </div>
            </div>
        );
    }
}

export default Rating;