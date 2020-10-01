import React, { Component } from 'react';
import axios from 'axios';
import '../../CSS/myStyle.css'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../Images/1.png';
import img2 from '../../Images/2.png';
import img3 from '../../Images/3.png';
import img4 from '../../Images/4.png';
import img5 from '../../Images/5.png';
import img6 from '../../Images/6.png';
import img7 from '../../Images/7.png';
import img8 from '../../Images/8.png';
import V_Navbar from '../layouts/navbar.component';

export default class EditVoucher extends Component {

    constructor(props){
        super(props)

        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onChangeRadio1 = this.onChangeRadio1.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            number: '1',
            searchField:'',
            radio1: '',
            message: '',
            note: '',
        }
    }

    componentDidMount(){

     axios.get('/api/voucher/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({

                number: res.data.number,
                searchField: res.data.searchField,
                radio1: res.data.radio1,
                message: res.data.message,
                note: res.data.note
            });
        })
        .catch(function(error){
            console.log(error);
        })
    }



    onChangeNumber = e =>{
        console.log(e.target.value)

        this.setState({
          number: e.target.value //target is textbox and value is textbox value
        })
    }

    onChangeSearch = e => {

        this.setState({
            searchField: e.target.value
        })
    }

    onChangeRadio1 = e => {

        console.log(e.target.value)

        this.setState( {
            [e.target.name]:e.target.value
        })
    }

    onChangeMessage = e => {
        console.log(e.target.value)

        this.setState({
          message: e.target.value
        })
    }

    onChangeNote = e => {
        console.log(e.target.value)
        
        this.setState({
          note: e.target.value
        })
    }

    
    onSubmit = (event) => {
        event.preventDefault();

        const Voucher = {
            number: this.state.number,
            searchField: this.state.searchField,
            phone: this.state.phone,
            radio1: this.state.radio1,
            message: this.state.message,
            note: this.state.note,
        };

        axios.post('/api/voucher/update/'+this.props.match.params.id, Voucher)
        .then(response =>
            console.log(response.data));
            this.props.history.push('/list')
            
            
    }

    render() {
        return(
            <div>
                <Navbar/>
      
                <div className="card " style= {{width:'100%', paddingLeft:'20px', paddingTop: '20px', fontSize:'16px', paddingBottom:'20px', marginTop:'10px'}}>
                <V_Navbar/>
                    <center>
                    <h3 className='h3'>
                        <b> UPDATE YOUR VOUCHER DETAILS </b>
                    </h3>
                    </center>
                  
                <br></br>
                    
                    <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                       <label>
                           <b> Number of Vouchers </b>
                        </label>

                        <select className="form-control"  
                        value = {this.state.number} 
                        style ={{maxWidth:'1050px' }}
                        onChange = {this.onChangeNumber}
                        required>

                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                        <option value = "4">4</option>
                        <option value = "5">5</option>
                        </select>
                    </div>

                    <p></p>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                        <div style = {{fontSize:'16px'}}>
                            <b>Enter amount</b>
                        <div style = {{fontSize:'13px'}}>
                            <i>up to Rs.10,000 per order</i>
                        </div>
                        </div>
                        
                        </label>
                    
                    <div className="col-sm-10">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Search Amount"
                        style ={{maxWidth:'865px' }}
                        value = {this.state.searchField} 
                        onChange = {this.onChangeSearch}
                        required/>
                    </div>
                    </div>

                    <div style = {{paddingLeft:'30px'}}>
                    <img src = {img1} alt="" width={130} height={200}/><img src = {img2} alt="" width={120} height={185}/>
                    <img src = {img3} alt="" width={130} height={200}/><img src = {img4} alt="" width={130} height={185}/>
                    <img src = {img5} alt="" width={120} height={185}/><img src = {img6} alt="" width={120} height={200}/>
                    <img src = {img7} alt="" width={130} height={185}/><img src = {img8} alt="" width={120} height={185}/>
                    </div>

                    <div style = {{paddingLeft:'50px'}}>
                        Rs.1500 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Rs.3000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        Rs.4500 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs.6000  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Rs.7000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Rs.8000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Rs.9000 &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs.10000
                     </div>

                    <p></p>

                    <div className="form-group">
                    <label>
                        <b>How would you like to receive your gift voucher? </b>
                    </label>
                    </div>
    
                    <input type="radio"
                    name="radio1"
                    value="By Post"
                    required
                    checked={this.state.radio1 ==="By Post"}
                    onChange={this.onChangeRadio1}/> By Post <br/>

                    <input type="radio" 
                    name="radio1" 
                    value="By Email" 
                    required
                    checked={this.state.radio1 ==="By Email"}
                    onChange={this.onChangeRadio1}/> By Email <br/>
                    <p></p>
          
                    <div style = {{borderBottom:'1px solid black', marginRight:'10px'}}></div>
                    <br/>

                    <div className="form-group">
                        <label >
                            <b> Add your personal message (Optional)</b>
                            <br/>
                            <i>If you choose to include a personal message it will be printed on your voucher.</i>
                        </label>

                    <textarea 
                    className="form-control"
                    rows="3"
                    placeholder="Enter personal message"
                    style ={{maxWidth:'1050px' }}
                    value = {this.state.message} 
                    onChange = {this.onChangeMessage}>
                    </textarea>
                    </div>

                    <small className="form-text text-muted">
                        <div style = { {fontSize:'12px'}}>
                            We'll never share your message with anyone else.
                        </div>
                    </small>
                    
                    <br/>

                    <div className="form-group">
                        <label >
                            <b> Special Notes</b>
                        </label>

                    <textarea 
                    className="form-control"
                    rows="3"
                    placeholder="Please specify any special requirements, e.g. voucher denominations"
                    style ={{maxWidth:'1050px' }}
                    value = {this.state.note} 
                    onChange = {this.onChangeNote}>
                    </textarea> 

                    </div>

                    <div className="form-group">
                        <center>
                            <button type="submit" onclick={this.onSubmit} className="btn btn-dark btn-lg" >Update</button>
                        </center>
                    </div>

                    </form>
                    <Footer/>
                </div>
                </div>

           
        )
    }
}