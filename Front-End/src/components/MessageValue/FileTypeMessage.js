import React from "react";
import pdf from "../../assets/pdf.png";
import rar from "../../assets/file.png";
import ppt from "../../assets/ppt.png";
import doc from "../../assets/doc.png";
import txt from "../../assets/txt.png";
import xls from "../../assets/xls.png";
import unknown from "../../assets/unknown.png";
import { ServerURI } from "../../services/config";

function FileTypeMessage({ message }) {
  const extension = message.Value.match(/\.[a-z]+/gi)[0];
  console.log(extension);
  switch (extension) {
    case ".pdf":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pdf} alt="MessageFile" width="100px" />
        </a>
      );
    case ".txt":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={txt} alt="MessageFile" width="100px" />
        </a>
      );
    case ".doc" || ".docx":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={doc} alt="MessageFile" width="100px" />
        </a>
      );
    case ".rar" || ".zip":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rar} alt="MessageFile" width="100px" />
        </a>
      );
    case ".ppt" || ".pptx":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ppt} alt="MessageFile" width="100px" />
        </a>
      );
    case ".xls" || ".xlsx":
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={xls} alt="MessageFile" width="100px" />
        </a>
      );

    default:
      return (
        <a
          href={`${ServerURI}/${message.Value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={unknown} alt="MessageFile" width="100px" />
        </a>
      );
  }
}

export default FileTypeMessage;
