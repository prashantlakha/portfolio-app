import React from "react";
import { Document, Page } from "react-pdf";
import pdf from "../assets/PrashantSingh-Resume.pdf";

const Resume = () => {
  const [numPages, setNumPages] = React.useState(1);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Resume;
