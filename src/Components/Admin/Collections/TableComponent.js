import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const TableComponent = props => {
  return (
    <Table>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Image</th>
          <th>Artist</th>
          <th>Name</th>
          <th>Url</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.item.map((item, index) => {
          return (
            <tr key={item._id}>
              {/* <th scope="row">{item._id}</th> */}
              <th>
                <img
                  src={item.picture}
                  alt={item.name}
                  width="64px"
                  height="64px"
                />
              </th>
              <th className="fontColor">
                <Link to={`/admin/artists/${item.artist.slug}`}>
                  {item.artist.name}
                </Link>
              </th>
              <th className="fontColor">
                <Link to={`/collections/${item.slug}`}>{item.name}</Link>
              </th>
              <th className="fontColor">
                <Link to={`/collections/${item.slug}`}>{item.name}</Link>
              </th>
              <th>
                <Button
                  color="danger"
                  value={item._id}
                  name={index}
                  onClick={() => props.deleteCollection(item)}
                >
                  Delete
                </Button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
