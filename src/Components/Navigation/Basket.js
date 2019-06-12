import React from "react";
import "./Basket.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

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
    const { basketContent } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={{ marginTop: "5px" }}>
          <Ionicon
            icon="ios-basket-outline"
            className="icon"
            color="#fff"
            style={{ marginRight: "3px" }}
          />
          {basketContent ? basketContent.length : null}
        </DropdownToggle>
        {this.props.basketContent && (
          <DropdownMenu>
            <DropdownItem header>In basket</DropdownItem>
            {basketContent.length >= 3
              ? basketContent.slice(0, 3).map((item, index) => {
                  return (
                    <DropdownItem
                      key={`${item._id}-${index}`}
                      className="media"
                      style={{ paddingLeft: "5px", paddingRight: "5px" }}
                    >
                      <div className="col-3 media-left">
                        <img
                          src={item.picture}
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                      <div className="col-9 media-right">
                        <p>{item.name}</p>
                      </div>
                    </DropdownItem>
                  );
                })
              : null}

            <DropdownItem divider />
            <DropdownItem>
              <Link to="/cart">View all {basketContent.length} items</Link>
            </DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
    );
  }
}

export default Basket;
