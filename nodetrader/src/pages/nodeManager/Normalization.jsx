import React, { useState } from "react";
import { Handle } from "@xyflow/react";
import { nodeStyles } from "./nodeStyles/styles";

const normalizationOptions = [
  { label: "Log Scaling", value: "log" },
  { label: "Linear Scaling", value: "linear" },
  { label: "Z-Score Scaling", value: "zscore" },
];

const NormalizationNode = () => {
  const [selectedNormalization, setSelectedNormalization] = useState("");
  const [parameters, setParameters] = useState({});

  const handleNormalizationChange = (e) => {
    const normalization = e.target.value;
    setSelectedNormalization(normalization);
    setParameters({});
  };

  const handleParameterChange = (field, value) => {
    setParameters((prev) => ({ ...prev, [field]: value }));
  };

  const renderNormalizationFields = () => {
    switch (selectedNormalization) {
      case "log":
        return (
          <div>
            <label className={nodeStyles.label}>Base:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={parameters["base"] || 10}
              onChange={(e) => handleParameterChange("base", e.target.value)}
            />
          </div>
        );
      case "linear":
        return (
          <div>
            <label className={nodeStyles.label}>Min Value:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={parameters["minValue"] || 0}
              onChange={(e) => handleParameterChange("minValue", e.target.value)}
            />
            <label className={nodeStyles.label}>Max Value:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={parameters["maxValue"] || 1}
              onChange={(e) => handleParameterChange("maxValue", e.target.value)}
            />
          </div>
        );
      case "zscore":
        return (
          <div>
            <label className={nodeStyles.label}>Mean:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={parameters["mean"] || 0}
              onChange={(e) => handleParameterChange("mean", e.target.value)}
            />
            <label className={nodeStyles.label}>Standard Deviation:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={parameters["stdDev"] || 1}
              onChange={(e) => handleParameterChange("stdDev", e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={nodeStyles.container}>
      <p className={nodeStyles.header("bg-green-500")}>Normalization</p>
      <label className={nodeStyles.fieldContainer}>
        <p className={nodeStyles.label}>Normalization Type</p>
        <select
          className={nodeStyles.inputField + " nodrag"}
          value={selectedNormalization}
          onChange={handleNormalizationChange}
        >
          <option value="">Select Normalization</option>
          {normalizationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <hr className={nodeStyles.divider} />

      {selectedNormalization && (
        <div className={nodeStyles.fieldContainer}>
          {renderNormalizationFields()}
        </div>
      )}
      <Handle className={nodeStyles.handle} type="source" position="right" />
      <Handle className={nodeStyles.handle} type="target" position="left" />
    </div>
  );
};

export default NormalizationNode;
