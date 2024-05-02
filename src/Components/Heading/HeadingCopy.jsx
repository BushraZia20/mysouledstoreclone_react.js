// import React, { useState, useEffect } from "react";
// import "./Heading.css";
// import Logo from "../../Assets/Logo.png";
// import Search from "../../Assets/Search.png";
// import { FaRegUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { CiHeart } from "react-icons/ci";
// import { SlHandbag } from "react-icons/sl";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";
// // import { useProductId } from "../Context/Context";
// const Heading = () => {
//   const [showInputField, setShowInputField] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const token = localStorage.getItem("JWT_token");
/////////
//   //   const [selectedCategory, setSelectedCategory] = useState("men");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value); // Update searchTerm as the user types
//   };

//   const handleSubmitSearch = () => {
//     if (searchTerm.trim()) {
//       navigate(`/getsinglecategorydetails/${searchTerm}`);
//     }
//   };

//   const topWear = [
//     "hoodie",
//     "Casual Shirts",
//     "All T-shirts",
//     "Polos",
//     "kurta",
//     "shirt",
//     "sweater",
//     "tshirt",
//     "Oversized T-shirts",
//     "Jackets",
//     "Classic Fit T-shirts",
//   ];

//   const bottomWaer = [
//     "All Cargos",
//     "Jeans",
//     "Cotton Pants",
//     "Joggers",
//     "Shorts",
//     "Boxers & Innerwear",
//     "Pyjamas",
//     "Tracksuit",
//     "trouser",
//   ];

//   const accessories = [
//     "All Accessories",
//     "Bags",
//     "Sneakers",
//     "Sandals",
//     "Sneakers",
//     "Sneakers",
//     "Sneakers",
//   ];

//   const collections = [
//     "All Collections",
//     "New Arrivals",
//     "Best Selling",
//     "Trending",
//     "Sale",
//   ];

//   const profileMenu = [
//     "Orders",
//     "Gift Vouchers",
//     "TSS Money",
//     "TSS Points",
//     "Saved Cards",
//     "Profile",
//     "FAQs",
//     "Submit Design",
//     "Logout",
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem("JWT_token");
//     console.log("logged out succesful");
//     navigate("/");
//     // setShowLogoutPopup(true);
//     // toast.success("Logged out successfully!");
//     toast.success("Logged out successfully!", {
//       // toastId: "logoutToast",
//       className: "red-toast",
//     });
//   };
//   console.log(token);

//   const handleCategoryClick = (category) => {
//     let simplifiedCategory = category.toLowerCase().replace(/ /g, "");

//     if (["Casual Shirts", "shirt"].includes(category)) {
//       simplifiedCategory = "shirt";
//     } else if (
//       [
//         "Casual Shirts",
//         "All T-shirts",
//         "Polos",
//         "tshirt",
//         "Oversized T-shirts",
//         "Classic Fit T-shirts",
//         "Jackets",
//       ].includes(category)
//     ) {
//       simplifiedCategory = "tshirt";
//     } else if (["All Cargos", "Jeans", "Joggers"].includes(category)) {
//       simplifiedCategory = "jeans";
//     } else if (["Tracksuit", "trouser", "Cotton Pants"].includes(category)) {
//       simplifiedCategory = "trouser";
//     } else if (["Shorts", "Boxers & Innerwear"].includes(category)) {
//       simplifiedCategory = "shorts";
//     }

//     navigate(`/getsinglecategorydetails/${simplifiedCategory}`);
//   };

//   return (
//     <div className="main_div">
//       <div className="sub_div_1">
//         <div className="sub_div_1_categories">
//           <div
//             className={`small_div sm_div_color ${
//               selectedCategory === "women" ? "selected" : ""
//             }`}
//           >
//             WOMEN
//           </div>
//           {/* <div className="small_div sm_div_color">MEN</div> */}
//           <div
//             className={`small_div sm_div_color ${
//               selectedCategory === "men" ? "selected" : ""
//             }`}
//             onClick={() => handleCategoryClick("men")}
//           >
//             MEN
//           </div>
//           {/* <div className="small_div sm_div_color">KIDS</div> */}
//           <div
//             className={`small_div sm_div_color ${
//               selectedCategory === "kids" ? "selected" : ""
//             }`}
//           >
//             KIDS
//           </div>
//         </div>
//         <div className="sub_div_2_menu">
//           <div className="small_div">TRACK ORDER</div>
//           <div className="small_div">CONTACT US</div>
//           <div className="small_div">DOWNLOAD APP</div>
//         </div>
//       </div>
//       <div className="sub_div_2">
//         <Link to="/" className="logo">
//           <img src={Logo} alt="" />
//         </Link>
//         <div className="sub_div_2_categories">
//           <div
//             className="sub_div_2_small_divs"
//             onMouseEnter={() => setActiveDropdown("topWear")}
//           >
//             <strong>TOP WEAR</strong>
//             {activeDropdown === "topWear" && (
//               <div
//                 className="dropdown"
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {topWear.map((item, index) => (
//                   <div
//                     key={index}
//                     className="dropdown_contenr"
//                     onClick={() => handleCategoryClick(item)}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div
//             className="sub_div_2_small_divs"
//             onMouseEnter={() => setActiveDropdown("bottomWear")}
//           >
//             <strong>BOTTOM WEAR</strong>
//             {activeDropdown === "bottomWear" && (
//               <div
//                 className="dropdown"
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {bottomWaer.map((item, index) => (
//                   <div
//                     key={index}
//                     className="dropdown_contenr"
//                     onClick={() => handleCategoryClick(item)}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="sub_div_2_small_divs">
//             <strong>SNEAKERS</strong>
//           </div>

//           <div
//             className="sub_div_2_small_divs"
//             onMouseEnter={() => setActiveDropdown("accessories")}
//           >
//             <strong>ACCESSORIES</strong>
//             {activeDropdown === "accessories" && (
//               <div
//                 className="dropdown"
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {accessories.map((item, index) => (
//                   <div key={index} className="dropdown_contenr">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div
//             className="sub_div_2_small_divs"
//             onMouseEnter={() => setActiveDropdown("collections")}
//           >
//             <strong>COLLECTIONS</strong>
//             {activeDropdown === "collections" && (
//               <div
//                 className="dropdown"
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {collections.map((item, index) => (
//                   <div key={index} className="dropdown_contenr">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="sub_div_2_small_divs">
//             <strong>SHOP BY THEMES</strong>
//           </div>
//           <div className="sub_div_2_small_divs">
//             <strong>MEMBERSHIP</strong>
//           </div>
//         </div>
//         <div className="sub_div_icons">
//           <div
//             className="search"
//             onMouseEnter={() => setShowInputField(true)}
//             onMouseLeave={() => setShowInputField(false)}
//           >
//             {/* <input type="text" /> */}
//             {showInputField && (
//               <input
//                 type="text"
//                 placeholder="What are you looking for?"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 onKeyPress={(e) => e.key === "Enter" && handleSubmitSearch()}
//               />
//             )}
//             <div className="search_icons" onClick={handleSubmitSearch}>
//               <img src={Search} alt=".." />
//             </div>
//           </div>

//           <div
//             className="sub_div_2_small_divs"
//             // onMouseEnter={() => setActiveDropdown("profileMenu")}
//             onMouseEnter={() => {
//               if (token) {
//                 setActiveDropdown("profileMenu");
//               }
//             }}
//           >
//             <div
//               onClick={() => {
//                 if (!token) {
//                   navigate("/login");
//                 }
//               }}
//             >
//               {" "}
//               <FaRegUser
//                 style={{ height: "100%", width: "100%", color: "black" }}
//               />
//             </div>
//             {activeDropdown === "profileMenu" && (
//               <div
//                 className="dropdown"
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 {profileMenu.map((item, index) => (
//                   <div
//                     key={index}
//                     className="dropdown_content"
//                     onClick={() => {
//                       if (item === "Logout") {
//                         handleLogout();
//                       }
//                     }}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           {/* <ToastContainer /> */}
//           <ToastContainer
//             toastClassName="red-toast"
//             // bodyClassName="red-toast-body"
//           />
//           <Link to="/wishlist">
//             <CiHeart />
//           </Link>
//           <Link to="/cart">
//             <SlHandbag />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heading;

////////////////////////

// MY HEADING COMPONENT

///////////////////////////
import React, { useState } from "react";
import "./Heading.css";
import Logo from "../../Assets/Logo.png";
import Search from "../../Assets/Search.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

const Heading = () => {
  const [showInputField, setShowInputField] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("JWT_token");
  console.log(token);
  const handleLogout = () => {
    localStorage.removeItem("JWT_token");
    console.log("logged out succesful");
    navigate("/");
  };

  const topWear = [
    "Oversized T-shirts New",
    "All T-Shirts",
    "All Shirts",
    "Polos",
    "Oversized Full Sleeve",
    "Jackets",
    "Classic Fit T-shirts",
    "Hoodies & Sweatshirts",
    "Full-Sleeve Shirts",
    "Solid T-shirts",
    "Dropcut T-shirts",
    "Co-ord Sets",
  ];
  const bottomWear = [
    "All Bottoms",
    "Pants",
    "Cargos",
    "Jeans",
    "Joggers",
    "Shorts",
    "Boxers & Innerwear",
  ];
  const collections = [
    "All Collections",
    "New Arrivals",
    "Best Selling",
    "Trending",
    "Sale",
  ];
  const profileMenu = [
    "Orders",
    "Gift Vouchers",
    "TSS Money",
    "TSS Points",
    "Saved Cards",
    "Profile",
    "FAQs",
    "Submit Design",
    "Logout",
  ];

  return (
    <div className="main_div">
      <div className="sub_div_1">
        <div className="sub_div_1_categories">
          <Link to="/women" className="small_div sm_div_color">
            WOMEN
          </Link>
          <Link to="/" className="small_div sm_div_color">
            MEN
          </Link>
          <div className="small_div sm_div_color">KIDS</div>
        </div>
        <div className="sub_div_2_menu">
          <div className="small_div">TRACK ORDER</div>
          <div className="small_div">CONTACT US</div>
          <div className="small_div">DOWNLOAD APP</div>
        </div>
      </div>
      <div className="sub_div_2">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="sub_div_2_categories">
          <div
            className="sub_div_2_small_divs"
            onMouseEnter={() => setActiveDropDown("topWear")}
          >
            <strong>TOP WEAR</strong>
            {activeDropDown === "topWear" && (
              <div
                className="dropdown"
                onMouseLeave={() => setActiveDropDown(null)}
              >
                {topWear.map((item, index) => (
                  <div key={index} className="dropdown_items">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="sub_div_2_small_divs"
            onMouseEnter={() => setActiveDropDown("bottomWear")}
          >
            <strong>BOTTOM WEAR</strong>
            {activeDropDown === "bottomWear" && (
              <div className="dropDownBox">
                {bottomWear.map((item, index) => (
                  <div key={index} className="dropdown_items">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="sub_div_2_small_divs"
            onMouseEnter={() => setActiveDropDown("collections")}
          >
            <strong>COLLECTIONS</strong>
            {activeDropDown === "collections" && (
              <div className="dropDownBox">
                {collections.map((item, index) => (
                  <div key={index} className="dropdown_items">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <div className="sub_div_2_small_divs">
            <strong>SNEAKERS</strong>
          </div>
          <div className="sub_div_2_small_divs">
            <strong>ACCESSORIES</strong>
          </div> */}

          {/* <div className="sub_div_2_small_divs">
            <strong>SHOP BY THEMES</strong>
          </div>
          <div className="sub_div_2_small_divs">
            <strong>MEMBERSHIP</strong>
          </div> */}
        </div>
        <div className="sub_div_icons">
          <div
            className="search"
            onMouseEnter={() => setShowInputField(true)}
            onMouseLeave={() => setShowInputField(false)}
          >
            {/* <input type="text" /> */}
            {showInputField && (
              <input type="text" placeholder="What are you looking for?" />
            )}
            <div className="search_icons">
              <img src={Search} alt=".." />
            </div>
          </div>
          <Link to="/login/" style={{ height: "30px", width: "30px" }}>
            <FaRegUser
              style={{ height: "100%", width: "100%", color: "black" }}
            />
          </Link>
          <button onClick={handleLogout}>Log out</button>
          <Link to="/wishlist">
            <CiHeart />
          </Link>
          <Link to="/cart">
            <SlHandbag />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
