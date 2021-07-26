import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import Display from "./Display";

function Input() {
  const history = useHistory();
  
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [images, setImages] = useState([]);
  
  const [pageIndex, setPageIndex] = useState(0);

  const Search = () => {
    const API_URL = "http://127.0.0.1:8000/test/search/";
    console.log(latitude, longitude);
    console.log(pageIndex)
    axios
      .get(API_URL, {
        params: {latitude:latitude, longitude: longitude, page: pageIndex+1}
      })
      .then(function (response) {
        setImages(response.data.photos.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await Search();
      displayImages();
    } catch (e) {
      alert(`Search failed! ${e.message}`);
    }
  };


  const nextPage = () => {
    setPageIndex(pageIndex+1)
    console.log(pageIndex)
  };
  const prevPage = () => {
    setPageIndex(pageIndex-1)
    console.log(pageIndex)
  };

  const handleLatitudeChange = (event) => {
      setLatitude(event.target.value);
  };
  const handleLongitudeChange = (event) => {
      setLongitude(event.target.value);
  };
  
  const displayImages = () => {
    return (
      <React.Fragment>
        {images.length > 0 && (
          <>
            <Display results={images}/>
            <div className="container center " style={{padding: "0, 10px"}}>
              {pageIndex != 0 ? (
                <button
                  className="btn waves-effect waves-light"
                  onClick={prevPage}
                  
                >
                  Prev
                </button>
              ) : (
                <></>
              )}

              {
                <button
                  className="btn waves-effect waves-light"
                  onClick={nextPage}
                >
                  Next
                </button>
              }

              {/* <button onClick = {prevPage}>Prev</button>
         <button className = "btn waves-effect waves-light" onClick = {nextPage}>next</button> */}
            </div>
          </>
        )}
      </React.Fragment>
    );
  };

  useEffect(() => {
    if (pageIndex) {
    Search()
    displayImages()
  }
  },[pageIndex])
  
  return (
    <div className="container">
      <div>
        <h2 className="center">Picture Search By Geolocation</h2>
        <br />
      </div>
      <form onSubmit={onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Latitude"
              id="latitude"
              value={latitude}
              onChange={handleLatitudeChange}
            />
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Longitude"
              id="longitude"
              value={longitude}
              onChange={handleLongitudeChange}
            />
          </div>
        </div>
        <div className="center">
          <button className="btn waves-effect waves-light" name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
      <div>{displayImages()}</div>
      <br/>
    </div>
  );
}

export default Input;
