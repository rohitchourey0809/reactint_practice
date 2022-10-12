import axios from "axios";
import React from "react";
import FileItem from "./FileItem";

const FileList = ({ files, removeFile}) => {
  const deleteFilehandler = ({ _name }) => {
    axios
      .delete(`http://localhost:8080/upload?name=${_name}`)
      .then((res) => {
        removeFile(_name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul className="file-list">
      {files &&
        files.map(f => (
          <FileItem key={f.name} file={f} deleteFile={deleteFilehandler} />
        ))}
    </ul>
  );
};

export default FileList;
