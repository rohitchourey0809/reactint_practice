import { faFileAlt, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FormItem.css"

const FileItem = ({ file, deleteFile }) => {
  return (
    <li className="list-item" key={file.name}>
      <FontAwesomeIcon icon={faFileAlt} />
      <p>{file.name}</p>
      <div className="actions">
        {file.isUploading && (
          <FontAwesomeIcon
            className="fa-spin"
            icon={faSpinner}
            onClick={() => deleteFile(file.name)}
          />
        )}
        {!file.isUploading && (
          <FontAwesomeIcon
            className="fa-spin"
            icon={faTrash}
            onClick={() => deleteFile(file.name)}
          />
        )}
      </div>
    </li>
  );
};

export default FileItem;
