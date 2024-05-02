import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AddAddresspage.css";
import { useProductId } from "../Context/Context";
import { token } from "../util/Util";
import { projectId } from "../util/Util";

function AddAddressPage() {
  const { priceInfo } = useProductId();
  const { cartTotal, gst } = priceInfo;
  const { cartProductIDs } = useProductId();
  // const [divList, setDivList] = useState([])

  useEffect(() => {
    console.log(`cartTotal: ${cartTotal}`);
    console.log(`gst:${gst}`);
    console.log(cartProductIDs);
  }, [cartTotal, gst]);

  const fetchAddressDetails = async () => {
    try {
      const url = `https://academics.newtonschool.co/api/v1/ecommerce/order`;
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: `${projectId}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: `652675cddaf00355a7838107`,
          quantity: 5,
          addressType: "HOME",
          address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            country: "USA",
            zipCode: "12345",
          },
        }),
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddressDetails();
  }, []);
  // const addNewDiv = () => {
  //   setDivList([...divList,]);
  // };
  return (
    <div>
      <div className="cart_header">
        <strong>
          {" "}
          <span style={{ color: "#4F7A7A" }}> MY BAG </span>- - - - - - - - - -
          - - - - - ADDRESS - - - - - - - - - - - - - PAYMENT
        </strong>
      </div>
      <div className="cart_container">
        <div className="cart_items_container address_div">
          <div className="add_address_top">
            <p>
              <strong>Delivery To</strong>
            </p>
            {/* <button>+</button> */}
            <div className="line"></div>
          </div>
          <div className="add_address"></div>
        </div>
        <div className="place_order_div">
          <p style={{ color: "#58595B" }}>BILLING DETAILS</p>
          <div className="billing_details">
            <div>
              <p> Cart Total (Excl. of all taxes)</p> {cartTotal}
            </div>
            <div>
              <p>GST</p> {gst}
            </div>
            <div>
              <p>Shipping Charges</p> ₹0
            </div>
            <div>
              <p>Total Amount</p> {cartTotal + gst}
            </div>
          </div>
          <Link to="/delivery-address">
            <button>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddAddressPage;
