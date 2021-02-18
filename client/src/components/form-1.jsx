class Form_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('submit');
    event.preventDefault();
    
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return(
      <div className="form-1">
        <h1>Sign Up</h1>
        <form action="/users" method="post" onSubmit={this.handleSubmit}>
        <p>Enter your account information</p>
          <div className="name">
            <label >
              Name
              <input type="text" name="name"id="name" placeholder="Full name" value={this.state.name}onChange={this.handleChange} required />
            </label>
          </div>
          <div className="email">
            <label >
              Email
              <input type="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange} required />
            </label>
          </div>
          <div className="password">
            <label >
              Password
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required />
            </label>
          </div>
        <button className="nav">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form_1;