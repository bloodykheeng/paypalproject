import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PaypalCheckoutButton() {
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
        onCancel={() => console.log("user canceled transaction")}
        onError={(err) => {
          console.log("paypal errr is : ", err);
        }}
      />
    </div>
  );
}

export default PaypalCheckoutButton;
