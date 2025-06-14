import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const JSONData = ({ modifiedData }) => {
  return (
    <div className="overflow-x-auto bg-gray-100 p-4 rounded-md">
      <SyntaxHighlighter language="json" style={vscDarkPlus} wrapLines={true}>
        {JSON.stringify(modifiedData, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default JSONData;
