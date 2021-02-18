import Checkout from './checkout.js';
import Form_1 from './form-1.js';
import Form_2 from './form-2.js';
import Form_3 from './form-3.js';
import Confirmation from './confirmation.js';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      current: 0
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCheckoutClick = this.onCheckoutClick.bind(this);
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

  onFormSubmit(e) {
    e.preventDefault();
  }

  Render(props) {
    const current = this.state.current
    console.log(current);
    if (current === 0) {
      return <Checkout onClick={this.onCheckoutClick}/>
    } else if (current === 1) {
      return <Form_1 onFormSubmit={this.onFormSubmit}/>
    } else if (current === 2) {
      return <Form_2 onFormSubmit={this.onFormSubmit}/>
    } else if (current === 3) {
      return <Form_3 onFormSubmit={this.onFormSubmit}/>
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