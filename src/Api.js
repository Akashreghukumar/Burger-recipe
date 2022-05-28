import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const ApiComp = () => {
  const [apidata, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://burgers1.p.rapidapi.com/burgers",
    headers: {
      "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
      "X-RapidAPI-Key": "4cf6a4a128mshe5cfc932245cd71p150aedjsn517f89930999",
    },
  };

  useEffect(() => {
    console.log("useeffect data", apidata);
  }, [apidata]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log("response", response);
        console.log("data", response.data);
        console.log("body", response.data[0].name);
        setData(response.data);
        console.log("usestatedata", apidata);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      {/* <Search/> */}

      {apidata
        ? apidata.map((m, index) => {
            return (
              <React.Fragment key={index}>
                <div class="mb-5 card w-50 text-dark">
                  <div class="card-body ">
                    <h2 class="card-title fw-2">{m.name}</h2>
                    <h5 className="mb-3 text-primary">Ingredients</h5>

                    <p class="card-text d-flex justify-content-center" >
                      <ul className="text-success ">
                        {m.ingredients.map((ingredient, i) => {
                          return (
                            <>
                              <li style={{ listStyle: "none" }}>
                                {ingredient}
                                <hr></hr>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
};

export default ApiComp;
