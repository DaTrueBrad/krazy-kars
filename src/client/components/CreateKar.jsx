import React, { useState } from "react";
import axios from "axios";

const CreateKar = ({ userInfo }) => {
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [miles, setMiles] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_Url] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      make,
      model,
      year,
      miles,
      price,
      image_url,
      userId: userInfo.id,
    };

    axios
      .post("/api/kar", body)
      .then((res) => {
        setImage_Url("");
        setMake("");
        setMiles("");
        setModel("");
        setName("");
        setPrice("");
        setYear("");
        console.log(res);
      })
      .catch((err) => {
        alert("There was a problem");
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Add your Kar!</h1>
      <form onSubmit={handleSubmit} id="kar-form">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setMake(e.target.value)}
          value={make}
          type="text"
          placeholder="Make"
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          value={model}
          type="text"
          placeholder="Model"
        />
        <input
          onChange={(e) => setYear(e.target.value)}
          value={year}
          type="number"
          placeholder="Year"
        />
        <input
          onChange={(e) => setMiles(e.target.value)}
          value={miles}
          type="text"
          placeholder="Miles"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Price"
        />
        <input
          onChange={(e) => setImage_Url(e.target.value)}
          value={image_url}
          type="text"
          placeholder="Image URL"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateKar;
