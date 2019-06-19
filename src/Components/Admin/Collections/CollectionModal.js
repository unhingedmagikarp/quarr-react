import React from "react";
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

class CollectionModal extends React.Component {
  state = {
    modal: false,
    nestedModal: false,
    closeAll: false,
    checked: true,
    uploaded: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/artists")
      .then(response => {
        this.setState({ artists: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("artist_id", this.state.artist_id);
    data.append("name", this.state.collectionName);
    data.append("description", this.state.description);
    data.append("categoryType", this.state.categoryType);
    data.append("file", this.state.image);
    axios
      .post("http://localhost:5000/api/collections", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(response => this.props.getCollections())
      .catch(err => {
        console.log(err);
      });
  };

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
    this.setState({ image: e.target.files[0] });
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let optionField = null;

    if (this.state.artists) {
      optionField = this.state.artists.map((item, index) => {
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
          New Collection
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add new collection</ModalHeader>
          <ModalBody>
            <Form
              id="formView"
              className="row"
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <FormGroup className="col-6 ">
                <Label for="name">Artist name</Label>
                <Input
                  type="select"
                  name="artist_id"
                  id="artist_id"
                  placeholder="Artist name"
                  onChange={this.handleFormChange}
                >
                  <option />
                  {optionField}
                </Input>
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="collectionName">Collection name</Label>
                <Input
                  type="text"
                  name="collectionName"
                  id="collectionName"
                  placeholder="Collection name"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="categoryType">Category</Label>
                <Input
                  type="text"
                  name="categoryType"
                  placeholder="Category"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="image">Thumbnail</Label>
                <Input type="file" name="image" onChange={this.fileHandler} />
              </FormGroup>
            </Form>

            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>
                  Done
                </Button>
                <Button color="secondary" onClick={this.toggleAll}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
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

export default CollectionModal;
