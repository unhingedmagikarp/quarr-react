import React from "react";
import "./Basket.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Ionicon from "react-ionicons";
// IosBasketOutline

class Basket extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <Ionicon
            icon="ios-basket-outline"
            className="icon"
            color="#fff"
            style={{ marginTop: "5px" }}
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Show all</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Basket;

//   <ul className="nav navbar-nav navbar-right">
//     <li className="dropdown">
//       <a
//         href="#"
//         className="dropdown-toggle"
//         data-toggle="dropdown"
//         role="button"
//         aria-expanded="false"
//       >
//         <span className="glyphicon glyphicon-shopping-cart" /> 7 - Items
//         <span className="caret" />
//       </a>
//       <ul className="dropdown-menu dropdown-cart" role="menu">
//         <li>
//           <span className="item">
//             <span className="item-left">
//               <img src="http://lorempixel.com/50/50/" alt="" />
//               <span className="item-info">
//                 <span>Item name</span>
//                 <span>23$</span>
//               </span>
//             </span>
//             <span className="item-right">
//               <button className="btn btn-xs btn-danger pull-right">
//                 x
//               </button>
//             </span>
//           </span>
//         </li>
//         <li>
//           <span className="item">
//             <span className="item-left">
//               <img src="http://lorempixel.com/50/50/" alt="" />
//               <span className="item-info">
//                 <span>Item name</span>
//                 <span>23$</span>
//               </span>
//             </span>
//             <span className="item-right">
//               <button className="btn btn-xs btn-danger pull-right">
//                 x
//               </button>
//             </span>
//           </span>
//         </li>
//         <li>
//           <span className="item">
//             <span className="item-left">
//               <img src="http://lorempixel.com/50/50/" alt="" />
//               <span className="item-info">
//                 <span>Item name</span>
//                 <span>23$</span>
//               </span>
//             </span>
//             <span className="item-right">
//               <button className="btn btn-xs btn-danger pull-right">
//                 x
//               </button>
//             </span>
//           </span>
//         </li>
//         <li>
//           <span className="item">
//             <span className="item-left">
//               <img src="http://lorempixel.com/50/50/" alt="" />
//               <span className="item-info">
//                 <span>Item name</span>
//                 <span>23$</span>
//               </span>
//             </span>
//             <span className="item-right">
//               <button className="btn btn-xs btn-danger pull-right">
//                 x
//               </button>
//             </span>
//           </span>
//         </li>
//         <li className="divider" />
//         <li>
//           <a className="text-center" href="">
//             View Cart
//           </a>
//         </li>
//       </ul>
//     </li>
//   </ul>
