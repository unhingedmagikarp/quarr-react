import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

class NewArtwork extends Component {
  state = {
    modal: false,
    nestedModal: false,
    closeAll: false,
    checked: true,
    uploaded: false,
    artwork: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("artist_id", this.state.artwork.artist_id);
    data.append("collection_id", this.state.artwork.collection_id);
    data.append("description", this.state.artwork.description);
    data.append("name", this.state.artwork.name);
    data.append("category", this.state.artwork.category);
    data.append("size", this.state.artwork.size);
    data.append("price", this.state.artwork.price);

    data.append("file", this.state.artwork.image);

    axios
      .post("http://localhost:5000/api/artworks", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(response => {
        this.emptyState();
      })
      .catch(err => {
        console.log(err);
      });
  };

  emptyState = () => {
    this.setState({ artwork: {} });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/artists")
      .then(res => this.setState({ artists: res.data }));
    axios
      .get("http://localhost:5000/api/collections")
      .then(res => this.setState({ collections: res.data }));
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  };

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  };

  fileHandler = e => {
    this.setState(
      Object.assign(this.state.artwork, { image: e.target.files[0] })
    );
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  handleFormChange = e => {
    const { value, name } = e.target;
    this.setState(Object.assign(this.state.artwork, { [name]: value }));
  };

  render() {
    let artistField = null;
    let collectionField = null;
    if (this.state.artists) {
      artistField = this.state.artists.map((item, index) => {
        return (
          <option />,
          (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          )
        );
      });
    }
    if (this.state.collections) {
      collectionField = this.state.collections.map((item, index) => {
        return (
          <option />,
          (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          )
        );
      });
    }
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          +
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add artwork</ModalHeader>
          <ModalBody>
            <Form
              id="formView"
              className="row"
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <FormGroup className="col-6 artistBorder">
                <Label for="name">Artist name</Label>
                <Input
                  type="select"
                  name="artist_id"
                  id="artist_id"
                  placeholder="Artist name"
                  onChange={this.handleFormChange}
                >
                  <option />
                  {artistField}
                </Input>
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="name">Collection name</Label>
                <Input
                  type="select"
                  name="collection_id"
                  id="collection_id"
                  placeholder="Collection name"
                  onChange={this.handleFormChange}
                >
                  <option />
                  {collectionField}
                </Input>
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="examplePassword">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Artwork description"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="examplePassword">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-3 artistBorder">
                <Label for="examplePassword">Category</Label>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Product category"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-3 artistBorder">
                <Label for="examplePassword">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="peice"
                  placeholder="Price"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-3 artistBorder">
                <Label for="examplePassword">Size</Label>
                <Input
                  type="text"
                  name="size"
                  id="size"
                  placeholder="Size"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-3 artistBorder">
                <Label for="image">Thumbnail</Label>
                <Input type="file" name="image" onChange={this.fileHandler} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              form="formView"
              onClick={this.toggle}
            >
              Upload
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewArtwork;
