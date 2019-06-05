import React from "react";
import axios from "axios";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      userInput: "",
      showNote: false,
      editHandleChange: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitNote = this.submitNote.bind(this);
    this.changeNote = this.changeNote.bind(this);
    this.editHandleChange = this.editHandleChange.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
    this.doAlter = this.doAlter.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: "CLICK HERE TO EDIT!     " + val });
  }

  editHandleChange(val) {
    this.setState({ editHandleChange: "CLICK HERE TO EDIT!     " + val });
  }

  submitNote() {
    axios
      .post("/api/notes", { note: this.state.userInput })
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log("There was an error"));
  }

  changeNote(id) {
    axios
      .put("/api/notes/" + id, { newNote: this.state.editHandleChange })
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log("There was an error"));
  }

  toggleInput() {
    this.setState({ showNote: true });
  }

  doAlter() {
    axios.post("/api/alter");
  }

  componentDidMount() {
    axios
      .get("/api/notes")
      .then(res => {
        this.setState({
          notes: res.data
        });
      })
      .catch(err => console.log("There was an error"));
  }

  render() {
    const { notes, showNote } = this.state;
    const viewNotes = notes.map(note => {
      return (
        <div>
          <p onClick={() => this.toggleInput()}>{note.note}</p>
          {showNote ? (
            <div>
              <input
                class="edit-input"
                onChange={event => {
                  this.editHandleChange(event.target.value);
                }}
              />
              <button
                class="edit-button"
                onClick={() => {
                  this.changeNote(note.id);
                }}
              >
                Edit
              </button>
            </div>
          ) : null}
        </div>
      );
    });
    return (
      <div class="notes-box">
        <h3 class="notes-header">Notes</h3>
        <input
          class="notes-input"
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button
          class="notes-button"
          onClick={() => {
            this.submitNote();
          }}
        >
          Submit
        </button>
        <p class="notes">{viewNotes}</p>
        <button onClick={this.doAlter}>ALTER A TABLE</button>
      </div>
    );
  }
}
