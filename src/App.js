import React, { useState, useRef } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  let ref = useRef(null);
  const [value, setvalue] = useState("");
  let [valueimg, setvalueimg] = useState("");
  const [info, addinfo] = useState([]);

  return (
    <>
      <NavBar />
      <main>
        <div className="deck">
          {info.map((item) => {
            return <Welcome info={item.name} imgs={item.imgs} />;
          })}
          <div className="Add">
            <input
              className="in-img"
              type="text"
              placeholder=" Image link"
              onChange={(event) => setvalueimg(event.target.value)}
            ></input>
            <input
              ref={(el) => (ref = el)}
              className="in-add"
              type="text"
              placeholder=" Name"
              onChange={(event) => setvalue(event.target.value)}
            ></input>

            <button
              className="btn-add"
              onClick={() => {
                if (value.length > 0) {
                  if (valueimg === "") {
                    valueimg =
                      "http://unsplash.it/200/200?random&gravity=center";
                  }
                  addinfo([...info, { name: value, imgs: valueimg }]);
                  ref.value = "";
                  setvalue("");
                }
              }}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
