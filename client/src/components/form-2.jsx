class Form_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="form-2">
        <h1>Shipping Info</h1>
        <p>Enter your shipping address</p>
        <form action="shipping" method="post">
          <div className="address1">
            <label className="field">
              Address Line 1
              <input type="text" name="address1" placeholder="Address line 1"/>
            </label>
          </div>
          <div className="address2">
            <label className="field">
              Address Line 2
              <input type="text" name="address2" placeholder="Address line 2"/>
            </label>
          </div>
          <div className="city">
            <label className="field">
              City
              <input type="text" name="city" placeholder="City"/>
            </label>
          </div>
          <div className="state">
            <label className="field">
              State
              <select id="state">
                <option value=""></option>
                <option value="CA">CA</option>
                <option value="NY">NY</option>
              </select>
            </label>
          </div>
          <div className="zip-code">
            <label className="field">
              Zip Code
              <input name="zip" placeholder="Zip Code"/>
            </label>
          </div>
          <button className="nav" type="button">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form_2;