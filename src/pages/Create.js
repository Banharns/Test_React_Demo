import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://dotnet.meengineer.co.th/api/Account/SaveFruitdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, thumbnailUrl }),
        }
      );

      if (response.ok) {
        console.log("Data saved successfully!");
        alert("Data saved successfully!");
        setName("");
        setThumbnailUrl("");
        navigate("/");
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    setName("");
    setThumbnailUrl("");
  };

  return (
    <div className="main">
      <div className="card">
        <div className="container">
          <h2>
            <b>Create</b>
          </h2>
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>
                <b>Name:</b>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>
                <b>Photo:</b>
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
