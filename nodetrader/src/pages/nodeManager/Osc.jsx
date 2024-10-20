import React from "react";
import { Handle } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import { useStore } from "../store";
import { nodeStyles } from "./style/styles";

const selector = (id) => (store) => ({
  setFrequency: (e) => store.updateNode(id, { frequency: +e.target.value }),
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Osc({ id, data }) {
  const { setFrequency, setType } = useStore(selector(id), shallow);

  return (
    <div className={nodeStyles.container}>
      <p className={nodeStyles.header("bg-pink-500")}>Osc</p>
      <label className={nodeStyles.fieldContainer}>
        <p className={nodeStyles.label}>Frequency</p>
        <input
          className={nodeStyles.inputField}
          type="range"
          min="10"
          max="1000"
          value={data.frequency}
          onChange={setFrequency}
        />
        <p className="text-right text-xs">{data.frequency} Hz</p>
      </label>
      <hr className={nodeStyles.divider} />
      <label className={nodeStyles.fieldContainer}>
        <p className={nodeStyles.label}>Waveform</p>
        <select
          className={nodeStyles.inputField}
          value={data.type}
          onChange={setType}
        >
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>
      <Handle className={nodeStyles.handle} type="source" position="bottom" />
    </div>
  );
}
