// src/nodes/MachineLearningNode.tsx
import React, { useState } from "react";
import { Handle } from "@xyflow/react";
import { nodeStyles } from "./nodeStyles/styles";
import axios from "axios";  // For making API requests

const modelOptions = [
  { label: "RNN", value: "rnn" },
  { label: "Linear Regression", value: "linear" },
  { label: "Logistic Regression", value: "logistic" },
];

const MachineLearningNode = ({ id, data, updateNode }) => {
  const [selectedModel, setSelectedModel] = useState(data.modelType || "");
  const [modelParams, setModelParams] = useState(data.parameters || {});

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    setModelParams({});
    updateNode(id, { modelType: model });
  };

  const handleParamChange = (field, value) => {
    const updatedParams = { ...modelParams, [field]: value };
    setModelParams(updatedParams);
    updateNode(id, { parameters: updatedParams });
  };

  const handleRunModel = async () => {
    try {
      const response = await axios.post("http://localhost:8000/train", {
        model_type: selectedModel,
        parameters: modelParams,
      });
      updateNode(id, { results: response.data.results });
    } catch (error) {
      console.error("Failed to run the model:", error);
    }
  };

  const renderModelFields = () => {
    switch (selectedModel) {
      case "rnn":
        return (
          <div>
            <label className={nodeStyles.label}>Number of Layers:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={modelParams["layers"] || 1}
              onChange={(e) => handleParamChange("layers", e.target.value)}
            />
            <label className={nodeStyles.label}>Units per Layer:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={modelParams["units"] || 32}
              onChange={(e) => handleParamChange("units", e.target.value)}
            />
          </div>
        );
      case "linear":
        return (
          <div>
            <label className={nodeStyles.label}>Learning Rate:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              step="0.001"
              value={modelParams["learningRate"] || 0.01}
              onChange={(e) => handleParamChange("learningRate", e.target.value)}
            />
          </div>
        );
      case "logistic":
        return (
          <div>
            <label className={nodeStyles.label}>Regularization Strength:</label>
            <input
              className={nodeStyles.inputField}
              type="number"
              value={modelParams["regStrength"] || 1}
              onChange={(e) => handleParamChange("regStrength", e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={nodeStyles.container}>
      <p className={nodeStyles.header("bg-purple-500")}>Machine Learning Model</p>
      <label className={nodeStyles.fieldContainer}>
        <p className={nodeStyles.label}>Model Type</p>
        <select
          className={nodeStyles.inputField + " nodrag"}
          value={selectedModel}
          onChange={handleModelChange}
        >
          <option value="">Select Model</option>
          {modelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <hr className={nodeStyles.divider} />

      {selectedModel && (
        <div className={nodeStyles.fieldContainer}>
          {renderModelFields()}
        </div>
      )}

      <button onClick={handleRunModel} className={nodeStyles.button}>
        Run Model
      </button>

      <Handle className={nodeStyles.handle} type="source" position="right" />
      <Handle className={nodeStyles.handle} type="target" position="left" />
    </div>
  );
};

export default MachineLearningNode;
