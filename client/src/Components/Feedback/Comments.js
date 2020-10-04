import React, {Component} from 'react';
import axios from 'axios';
import Rating from "./Rating";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbacks: [],
            Comment : '',
            cusId:'',

        };
    }
    

    onSubmit = (event) => {
        event.preventDefault();

        const Feedback = {
            Comment: this.state.Comment,
            cusId:this.props.match.params.id
        };

        axios.post('/api/feedback/insertFeedback/'+this.props.match.params.id,Feedback)
            .then(response => {
                if(response.data.success){
                    alert('succeful')
                
                } else {
                    alert('Failed')
                }
            })
        
    }

    handleCommentChange = event => {
        this.setState({
            Comment: event.target.value
        })
    }
   
    //retrieve data
    componentDidMount() {
        axios.get('/api/feedback/displayFeedback/'+this.props.match.params.id)
        .then(res => {
            const feedbacks = res.data;
            this.setState({ feedbacks });
          })
      }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customer Feedback</h2>
                <Rating/>
            <div className="w-50 mx-auto">

                {
                    this.state.feedbacks.map(field =>

                        <div className="my-5">
                            <p>{field.Comment}</p>
                            <div className="form-check form-check-inline text-secondary ">
                                <label className="form-check-label buttons" >Edit</label>
                                <label className="form-check-label mx-4 buttons" >Delete</label>
                                <label className="form-check-label mx-4 buttons" >Reply(0)</label>
                            </div>
                            <hr/>
                        </div>


                    )
                }



                <form onSubmit={this.onSubmit}>
                <div className="my-5">
                    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.Comment} placeholder="Enter your comment here..." onChange={this.handleCommentChange}/>
                    <button type="button" className="btn btn-primary my-2" onClick={this.onSubmit}>Comment</button>
                </div>
                </form>



            </div>
            </div>
        );
    }
}

export default Comments;