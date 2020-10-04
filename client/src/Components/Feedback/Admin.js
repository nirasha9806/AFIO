import React, {Component} from 'react';
import AdminFeedbackDisplay from "./adminFeedbackDisplay";
import AdminCommentDisplay from "./adminCommentDisplay";
class Admin extends Component {
    render() {
        return (
            <div>
                <AdminFeedbackDisplay/>
                <AdminCommentDisplay/>
            </div>
        );
    }
}

export default Admin;