import Checkout from './checkout.js';
import Form_1 from './form-1.js';
import Form_2 from './form-2.js';
import Form_3 from './form-3.js';
import Confirmation from './confirmation.js';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      current: 0
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.postUser = this.postUser.bind(this);
    this.Render = this.Render.bind(this);
  }

  onNextClick() {
    if (this.state.current < 4) {
      console.log('click');
      this.setState({
        current: this.state.current + 1
      })
    }
  }

  onPrevClick() {
    console.log('click');
    if (this.state.current > 0) {
      this.setState({
        current: this.state.current - 1
      })
    }
  }

  onCheckoutClick() {
    this.setState({
      current: this.state.current + 1
    })
  }

  postUser() {
    var user = {
      name: '',
      email: '',
      password: ''
    }
    axios.post('127.0.0.1:3000/users', user)
    .then((result) => { console.log(result); })
    .catch((err) => { console.error(err); })
  }

  postShippingInfo(shippingInfo, callback) {
    axios.post('/shippingInfo', shippingInfo)
    .then((result) => { callback(result); })
    .catch((result) => { callback(result); })
  }

  postBillingInfo(billingInfo, callback) {
    axios.post('/billingInfo', billingInfo)
    .then((result) => { callback(result); })
    .catch((result) => { callback(result); })
  }

  Render(props) {
    const current = this.state.current
    console.log(current);
    if (current === 0) {
      return <Checkout onClick={this.onCheckoutClick}/>
    } else if (current === 1) {
      return <Form_1 postUser={this.postUser}/>
    } else if (current === 2) {
      return <Form_2 />
    } else if (current === 3) {
      return <Form_3 />
    } else if (current === 4) {
      return <Confirmation />
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Checkout</h1>
        {this.Render()}
        <button className="next nav" onClick={this.onNextClick}>Next</button>
        <button className="prev nav" onClick={this.onPrevClick}>Previous</button>
      </div>
    );
  }
}

export default App;