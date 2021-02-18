var Checkout = (props) => (
  <div className="checkout">
    <div>
      <h1>Shopping Cart</h1>
    </div>
    <div className="items">
      <div className="item">
        <img src="askYourDeveloper.jpg"/>
        <p>Ask Your Developer by Jeff Lawson</p>
        <div className="qty">
          <label>
            Qty:
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10+</option>
            </select>
          </label>
        </div>
        <p>Price: $20.49</p>
      </div>
      <div className="item">
        <img src="myYearAbroad.jpg"/>
        <p> My Year Abroad: A Novel by Lee, Chang-rae</p>
        <div className="qty">
          <label>
            Qty:
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10+</option>
            </select>
          </label>
        </div>
        <p>Price: $18.69</p>
      </div>
    </div>
    <div className="checkout-btn">
      <p className="price">Order Total: $42.51</p>
      <button className="nav" onClick={props.onClick}>Checkout</button>
    </div>
  </div>
)

export default Checkout;