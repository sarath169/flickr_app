import React, { useEffect, useState } from "react";

import axios from "axios";

function Display(props) {
  console.log(props.results);
  
  const [favourites, setFavourites] = useState([]);
  let favourites_id = [];

  const [favouritesChanged, setFavouritesChanged] = useState(0);

  const listfavourites = () => {
    const API_URL = "http://127.0.0.1:8000/test/listfavourites/";
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response);
        setFavourites(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToFavourite = (id, secret, farm, server, title) => {
    const API_URL = "http://127.0.0.1:8000/test/addfavourite/";
    axios
      .post(API_URL, {
        id: id,
        secret: secret,
        farm: farm,
        server: server,
        title: String(title),
      })
      .then(function (response) {
        console.log(response);
        setFavouritesChanged(favouritesChanged+1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const populatefavourites = () => {
    favourites_id = []
    favourites.map((favourite) => {
      console.log(favourite.id);
      favourites_id = [...favourites_id, favourite.id];
      console.log(favourites_id)
    });
  };

  const isPresent = (id, secret, farm, server, title) => {
    console.log(favourites);
    console.log(id);
    populatefavourites()
    console.log(favourites_id);
    {
      if(favourites_id.indexOf(id) !== -1)   {
        return (
          <>
            <p>
                <a className=""
                  href = {"/addnotes/"+id}
                >
                <span className="blue-text text-darken-2" style={{fontSize: "17px"}}>Add Note</span>
                </a>
            </p>
          </>
        );
      } 
      else{
        return (
          <>
            <p>
              <label>
                <input
                  onClick={() => {
                    addToFavourite(id, secret, farm, server, title);
                  }}
                  type="checkbox"
                />
                <span>Add to favourites</span>
              </label>
            </p>
          </>
        );
      };
      }
    }
    

  useEffect(() => {
    listfavourites();
  }, [favouritesChanged]);

  // useEffect(() => {
  //   populatefavourites();
  // },[favourites]);
  // const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
  return (
    <div className="row">
      {props.results.map((image) => {
        let srcPath =
          "https://farm" +
          image.farm +
          ".staticflickr.com/" +
          image.server +
          "/" +
          image.id +
          "_" +
          image.secret +
          ".jpg";
        return (
          <div className="center">
            <div className="col s6 m4">
              <div className="card">
                <div className="card-image">
                  <img height="300" src={srcPath}></img>
                </div>
                <div className="card-action center">
                  {isPresent(
                    image.id,
                    image.secret,
                    image.farm,
                    image.server,
                    image.title
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
