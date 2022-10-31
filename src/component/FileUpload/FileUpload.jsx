import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FileUpload.css";
import React from "react";
import axios from "axios";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    //passes to backened
    const formData = new FormData();

    formData.append(file.name, file, file.name);

    axios
      .post("http://localhost:8080/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.log(err);
        removeFile(file.name);
      });
  };
  return (
    <div>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
        </div>
        <button className="button">
          <i>
            <FontAwesomeIcon icon={faPlus} />
            Upload
          </i>
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
