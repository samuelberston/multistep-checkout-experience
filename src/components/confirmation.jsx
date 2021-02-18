class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="confirmation">
        <h1>Order Confirmation</h1>
        <div className="account">
          <h2>Account Info</h2>
          <p>account info dynamically rendered from the mysql database</p>
        </div>
        <div className="shipping">
          <h2>Shipping Info</h2>
          <p>shipping info dynamically rendered from the mysql database</p>
        </div>
        <div className="billing">
          <h2>Billing Info</h2>
          <p>billing info dynamically rendered from the mysql database</p>
        </div>
        <button className="nav">Purchase</button>
      </div>
    )
  }
}

export default Confirmation;