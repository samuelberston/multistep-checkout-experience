var Form_3 = (props) => (
  <div className="form-3">
    <h1>Billing Info</h1>
    <p>Enter your billing info</p>
    <form action="billing" method="post">
      <div className="credit-card-#">
        <label className="field">
          Credit Card #
          <input type="number" name="credit-card-#" placeholder="1111-2222-3333-4444"/>
        </label>
      </div>
      <div className="exp-date">
        <label className="field">
          Exp. Date
          <input type="date" name="exp-date" placeholder="mm/yyyy"/>
        </label>
      </div>
      <div className="CVV">
        <label className="field">
          CVV
          <input type="number" name="CVV" placeholder="123" />
        </label>
      </div>
      <div className="zip">
        <label className="field">
          Billing Zip Code
          <input name="billing-zip-code" placeholder="12345"/>
        </label>
      </div>
      <button className="nav">Submit</button>
    </form>
  </div>
)

export default Form_3;