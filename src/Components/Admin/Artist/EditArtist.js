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
import Switch from "react-switch";

class EditArtist extends React.Component {
  state = {
    modal: false,
    nestedModal: false,
    closeAll: false,
    checked: true,
    uploaded: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    try {
      data.append("description", this.state.description);
      data.append("name", this.state.name);
    } catch (err) {
      console.log(err);
    }
    if (this.state.image) {
      data.append("file", this.state.image);
    }

    axios
      .post(`http://localhost:5000/api/artists${this.props.artist._id}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(response => {
        this.props.getArtists();
      })
      .catch(err => {
        console.log(err);
      });
  };

  emptyState = () => {
    this.setState({
      description: "",
      name: "",
      image: ""
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
    return (
      <div>
        <Button
          color="success"
          onClick={this.toggle}
          style={{
            marginLeft: "10px",
            width: "70px",
            marginBottom: "5px"
          }}
        >
          Edit
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit artist</ModalHeader>
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
                  type="text"
                  name="name"
                  id="name"
                  placeholder={this.props.artist.name}
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="examplePassword">Description</Label>
                <Input
                  placeholder={this.props.artist.description}
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.handleFormChange}
                />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label for="image">Thumbnail</Label>
                <Input type="file" name="image" onChange={this.fileHandler} />
              </FormGroup>
              <FormGroup className="col-6 artistBorder">
                <Label className="col-12" for="copyright">
                  Copyright
                </Label>

                <Switch
                  name="copyright"
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
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

export default EditArtist;
