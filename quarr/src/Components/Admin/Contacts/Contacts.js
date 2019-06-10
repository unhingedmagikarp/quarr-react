import React, { Component } from "react";
import axios from "axios";
import { Table, Button, Container } from "reactstrap";
import moment from "moment";

class AdminContacts extends Component {
  state = {};

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    axios
      .get("http://localhost:5000/api/admin/contacts")
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:5000/api/admin/contacts/${item}`)
      .then(res => this.fetchContacts())
      .catch(err => console.log(err));
  };

  render() {
    let listLength = null;
    if (this.state.contacts) {
      listLength = (
        <div>
          <div>
            <h2 className="text-center">Contacts</h2>
          </div>
          <p>Number of contacts: {this.state.contacts.length}</p>
        </div>
      );
    }

    return (
      <Container style={{ minHeight: "600px" }}>
        {listLength}
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          {this.state.contacts && (
            <tbody>
              {this.state.contacts.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{(index += 1)}</th>
                    <th>{item.name}</th>
                    <th>{item.subject}</th>
                    <th>{item.email}</th>
                    <th>
                      {moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}
                    </th>
                    <th>{item.message}</th>
                    <th>
                      <Button
                        color="danger"
                        value={item._id}
                        name={index}
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          )}
        </Table>
      </Container>
    );
  }
}

export default AdminContacts;
