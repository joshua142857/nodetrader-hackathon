import React, { useState } from "react";
import { Handle } from "@xyflow/react";
import { nodeStyles } from "./nodeStyles/styles";

const providerOptions = [
  { label: "Kalshi", value: "kalshi" },
  { label: "Polymarket", value: "polymarket" },
];

const MarketDataNode = () => {
  const [selectedProvider, setSelectedProvider] = useState();
  const [inputData, setInputData] = useState({});

  const handleProviderChange = (e) => {
    const provider = e.target.value;
    setSelectedProvider(provider);
    setInputData({});
  };

  const handleInputChange = (field, value) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
  };

  const renderProviderFields = () => {
    switch (selectedProvider) {
      case "kalshi":
      case "polymarket":
        return (
          <div>
            <label className={nodeStyles.label}>Api Key:</label>
            <input
              className={nodeStyles.inputField}
              type="text"
              value={inputData["apikey"] || ""}
              onChange={(e) => handleInputChange("apikey", e.target.value)}
            />
            <label className={nodeStyles.label}>Market:</label>
            <input
              className={nodeStyles.inputField}
              type="text"
              value={inputData["market"] || ""}
              onChange={(e) => handleInputChange("market", e.target.value)}
            />
            <label className={nodeStyles.label}>Date Range:</label>
            <input
              className={nodeStyles.inputField + " nodrag"}
              type="text"
              value={inputData["dateRange"] || ""}
              onChange={(e) => handleInputChange("dateRange", e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={nodeStyles.container}>
      <p className={nodeStyles.header("bg-blue-500")}>Market Data</p>
      <label className={nodeStyles.fieldContainer}>
        <p className={nodeStyles.label}>Provider</p>
        <select
          className={nodeStyles.inputField + " nodrag"}
          value={selectedProvider || ""}
          onChange={handleProviderChange}
        >
          <option value="">Select a Provider</option>
          {providerOptions.map((provider) => (
            <option key={provider.value} value={provider.value}>
              {provider.label}
            </option>
          ))}
        </select>
      </label>

      <hr className={nodeStyles.divider} />

      {selectedProvider && (
        <div className={nodeStyles.fieldContainer}>
          {renderProviderFields()}
        </div>
      )}
      <Handle className={nodeStyles.handle} type="source" position="right" />
    </div>
  );
};

export default MarketDataNode;
