import React, {Component} from 'react';

class AdminFeedbackDisplay extends Component {
    render() {
        return (
            <div>
                <h2>Customer Ratings</h2>
                <div className="row my-4">
                    <div className="col-1">
                        <h6 className="text-center">1</h6>
                    </div>
                    <div className="col-11">
                        <div className="progress  w-75">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width:"40%"}} aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


                <div className="row my-4">
                    <div className="col-1">
                        <h6 className="text-center">2</h6>
                    </div>
                    <div className="col-11">
                        <div className="progress  w-75">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width:"50%"}} aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


                <div className="row my-4">
                    <div className="col-1">
                        <h6 className="text-center">3</h6>
                    </div>
                    <div className="col-11">
                        <div className="progress  w-75">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width:"75%"}} aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


                <div className="row my-4">
                    <div className="col-1">
                        <h6 className="text-center">4</h6>
                    </div>
                    <div className="col-11">
                        <div className="progress  w-75">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width:"80%"}} aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


                <div className="row my-4">
                    <div className="col-1">
                        <h6 className="text-center">5</h6>
                    </div>
                    <div className="col-11">
                        <div className="progress  w-75">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width:"25%"}} aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default AdminFeedbackDisplay;