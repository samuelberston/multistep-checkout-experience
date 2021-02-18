class Form_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="form-1">
        <h1>Sign Up</h1>
        <form action="/users" method="post">
        <p>Enter your account information</p>
          <div className="name">
            <label for="name">
              Name
              <input type="text" name="name"id="name" placeholder="Full name" required />
            </label>
          </div>
          <div className="email">
            <label for="email">
              Email
              <input type="email" name="email" placeholder="Email address" required />
            </label>
          </div>
          <div className="password">
            <label for="password">
              Password
              <input type="password" name="password" placeholder="password" required />
            </label>
          </div>
        <input className="nav" type="submit" name="submit" value="Submit" onSu/>
        </form>
      </div>
    )
  }
}

export default Form_1;