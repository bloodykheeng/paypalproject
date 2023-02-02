import logo from "./logo.svg";
import { useState } from "react";
import PaypalCheckoutButton from "./components/PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions, err) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "cool looking table",
  //               amount: { currency_code: "USD", value: 100.0 },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.capture();
  //         console.log("succesfull order : " + order);
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     })
  //     .render(mypaypal.current);
  // }, []);

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <h1>BLoody Kheengs paypal account</h1>
        <button onClick={() => setShow(true)}>Click me to pay</button>
        {show && <PaypalCheckoutButton />}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
