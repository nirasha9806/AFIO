import React, {Component} from 'react';
import axios from 'axios';



export default class EditPayPal extends Component{
    constructor(props){
        super(props);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);

        this.state =   {
            cname:'',
            email:'',
            password:''
        }

    }

    componentDidMount(){
        axios.get('/api/paypal/EditPayPal' + this.props.match.params.id)
         .then(response =>{
            this.setState( { 
             cname: response.data.cname,
             email:response.data.email,
             password:response.data.password
             
            });

         })
         .catch(function(error){
             console.log(error);
         })
    }


    changeNameHandler(e){
        this.setState({cname:e.target.value});
    }
    changeEmailHandler(e){
        this.setState({email:e.target.value});
    }
    changePasswordHandler(e){
        this.setState({password:e.target.value});
    }
    

    onSubmit(e){
        e.preventDefault();
        const obj = {
            cname: this.state.cname,
            email:this.state.email,
            password:this.state.password
            
        };
        axios.post('/paypal/updatePayPal' + this.props.match.params.id,obj)
        .then(res => console.log(res.data));

        this.props.history.push('/PayPalDisplay');
    }

    
}