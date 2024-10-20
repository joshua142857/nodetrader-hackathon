import React, { useState } from 'react';
import { ReactFlow, ReactFlowProvider, Background, Panel } from '@xyflow/react';
import { shallow } from 'zustand/shallow';
import { useStore } from './nodeManager/store';
import MarketDataNode from './nodeManager/Input';
import Out from './nodeManager/Output';
import NormalizationNode from './nodeManager/Normalization';
import Sidebar from './../components/Sidebar';import MachineLearningNode from "./nodeManager/MachineLearning";
import { tw } from 'twind';
import '@xyflow/react/dist/style.css';

const nodeTypes = {
  in: MarketDataNode,
  out: Out,
  normalize: NormalizationNode, 
  ml: MachineLearningNode
};

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onNodesDelete: store.onNodesDelete,
  onEdgesChange: store.onEdgesChange,
  onEdgesDelete: store.onEdgesDelete,
  addEdge: store.addEdge,
  createNode: store.createNode,
});

export default function App() {
  const store = useStore(selector, shallow);
  const [expandedBox, setExpandedBox] = useState(null);

  const handleExpand = (box) => {

    setExpandedBox(box === expandedBox ? null : box); // Toggle expand/collapse behavior
  };

  return (
    <div className="relative flex">
      {/* Sidebar Component */}
      <Sidebar handleExpand={handleExpand} />

      <div className="flex-grow p-5">
        {/* ReactFlow Graph Area */}
        <ReactFlowProvider>
          <div className="w-full h-screen">
            <ReactFlow
              nodeTypes={nodeTypes}
              nodes={store.nodes}
              edges={store.edges}
              onNodesChange={store.onNodesChange}
              onNodesDelete={store.onNodesDelete}
              onEdgesChange={store.onEdgesChange}
              onEdgesDelete={store.onEdgesDelete}
              onConnect={store.addEdge}
              fitView
            >
              <Panel className={tw('space-x-4')} position="center">
                <button
                  className={tw('px-2 py-1 rounded bg-white shadow')}
                  onClick={() => store.createNode('in')}
                >
                  Add Market Data (Input)
                </button>
                <button
                  className={tw('px-8 py-3 rounded bg-white shadow')}
                  onClick={() => store.createNode('out')}
                >
                  Submit Trades (Output)
                </button>
                <button
                  className={tw('px-8 py-3 rounded bg-white shadow')}
                  onClick={() => store.createNode('normalize')}
                >
                  Normalize Data
                </button>
                <button
              className={tw('px-8 py-3 rounded bg-white shadow')}
              onClick={() => store.createNode('ml')}
            >
               Machine Learning
            </button>
          </Panel>
              <Background />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
}
