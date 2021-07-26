import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddNotes() {
  const { id } = useParams();
  const [text, setText] = useState("");
  console.log(id)
  const addNote = (event) => {
    event.preventDefault();
    const API_URL = "http://127.0.0.1:8000/test/addnote/";

    axios
      .post(API_URL, {
        image_id: id,
        text: text,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                value={text}
                onChange={handleTextChange}
              ></textarea>
              <label for="textarea1">Notes</label>
            </div>
            <div className="center">
            <a className="waves-effect waves-light btn" onClick={addNote} >
              Submit
            </a>
            
            <a className="waves-effect waves-light btn" href = {"/notes/"+id} >
              ViewNotes
            </a>
            

            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
