import React from "react";
import JSONData from "./JSONData";
import RebuildedQuestion from "./RebuildedQuestion";

const DigitizedData = ({ allQuestion }) => {
  const keysToKeepOnlyInFirstObject = [
    "_id",
    "institution_name",
    "exam_name",
    "subject",
    "paper",
    "class_name",
    "exam_duration",
    "global_instructions",
  ];
  console.log("allQuestion", allQuestion);
  const modifiedData = allQuestion.map((item, index) => {
    if (index === 0) return item;

    // Remove the specified keys from all other objects
    const newItem = { ...item };
    keysToKeepOnlyInFirstObject.forEach((key) => {
      delete newItem[key];
    });
    return newItem;
  });

  console.log(modifiedData);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4">Generated Data</h1>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="JSON Data"
          defaultChecked
        />

        {/* table content  */}
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <JSONData modifiedData={modifiedData}></JSONData>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Rebuilded Questions"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <RebuildedQuestion modifiedData={modifiedData}></RebuildedQuestion>
        </div>
      </div>
    </div>
  );
};

export default DigitizedData;
