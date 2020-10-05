// import React, {Component} from 'react';
// import axios from 'axios';



// export default class Edit extends Component{
//     constructor(props){
//         super(props);
//         this.changeNameHandler = this.changeNameHandler.bind(this);
//         this.changeCardTypeHandler = this.changeCardTypeHandler.bind(this);
//         this.handleCVC = this.handleCVC.bind(this);
//         this.changeBankName = this.changeBankName(this);
//         this.handleExpiryDate = this.handleExpiryDate.bind(this);
//         this.handlePinNumber = this.handlePinNumber.bind(this);
//         this.cardNameHandler = this.cardNameHandler.bind(this);
        

//         this.onSubmit = this.onSubmit.bind(this);

//         this.state =   {
//             cname:'',
//             cardType:'',
//             bankname:'',
//             CVC:'',
//             expiry:'',
//             pin_number:'',
//             cardName:''
//         }

//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/credit/Edit' + this.props.match.params.id)
//          .then(response =>{
//             this.setState( { 
//              cname: response.data.cname,
//              cardType: response.data.cardType,
//              bankname: response.data.bankname,
//              CVC: response.data.CVC,
//              expiry:response.data.expiry,
//              pin_number:response.data.pin_number,
//              cardName:response.data.cardName
             
//             });

//          })
//          .catch(function(error){
//              console.log(error);
//          })
//     }


//     changeNameHandler(e){
//         this.setState({cname:e.target.value});
//     }
//     changeCardTypeHandler (e){
//         this.setState({cardType:e.target.value});
//     }
//     changeBankName(e){
//         this.setState({bankname: e.target.value});
//     }
//     handleCVC(e){
//         this.setState({CVC: e.target.value});
//     }
//     handleExpiryDate(e){
//         this.setState({month: e.target.value});
//     }
//     handlePinNumber(e){
//         this.setState({pin_number: e.target.value});
//     }
//     cardNameHandler(e){
//         this.setState({cardName: e.target.value});
//     }
    

//     onSubmit(e){
//         e.preventDefault();
//         const obj = {
//             cname: this.state.cname,
//             cardType:this.state.cardType,
//             bankname:this.state.bankname,
//             CVC:this.state.CVC,
//             expiry:this.state.expiry,
//             pin_number:this.state.pin_number,
//             cardName:this.state.cardName,
//             baddress:this.state.baddress
//         };
//         axios.post('http://localhost:5000/credit/update' + this.props.match.params.id,obj)
//         .then(res => console.log(res.data));

//         this.props.history.push('/CreditDisplay');
//     }

    
// }