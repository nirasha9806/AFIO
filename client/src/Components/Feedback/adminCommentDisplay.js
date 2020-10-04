import React, {Component} from 'react';
import axios from "axios";

class AdminCommentDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbacks: [],

        };
    }

    //retrieve data
    componentDidMount() {
        axios.get('/api/feedback/feedbackAdmin')
        .then(res => {
            const feedbacks = res.data;
            this.setState({ feedbacks });
          })
      }

    render() {
        return (
            <div>
                <div className="w-50 mx-auto my-5">
                    <h2 className="text-center my-4">Customer Comments</h2>

                    {
                        this.state.feedbacks.map((field, key) =>

                            <div className="my-3">
                                <p>Username {key+1}</p>
                                <p>{field.Comment}</p>
                                <div className="form-check form-check-inline text-secondary ">
                                    <label className="form-check-label buttons" >Reply</label>
                                </div>
                                <hr/>
                            </div>



                        )
                    }



                </div>
            </div>
        );
    }
}

export default AdminCommentDisplay;