import React from "react";
import { DropdownItem } from "reactstrap";

const ProductDropdown = props => {
  return (
    <DropdownItem
      className="media"
      style={{ paddingLeft: "5px", paddingRight: "5px" }}
    >
      <div className="col-3 media-left">
        <img
          src={props.item.picture}
          style={{ height: "30px", width: "30px" }}
        />
      </div>
      <div className="col-9 media-right">
        <p>{props.item.name}</p>
      </div>
    </DropdownItem>
  );
};

export default ProductDropdown;
