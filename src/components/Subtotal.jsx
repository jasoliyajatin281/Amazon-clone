import React from "react";
import CurrencyFormate from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormate
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain gift
            </small>
          </>
        )}
        decmalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
