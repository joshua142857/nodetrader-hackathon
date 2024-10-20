import { applyNodeChanges, applyEdgeChanges } from "@xyflow/react";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    { id: "input", type: "in", position: {x: 100, y: 250 } },
    { id: "output", type: "out", position: {x: 100, y: 250 } }
  ],
  edges: [
  ],
  

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  createNode(type, x, y) {
    const id = nanoid();
    const position = {x: x || 0, y: y || 0};

    switch (type) {
        case "in": {
            const data = { provider: "", market: "", dateRange: "" };
            set({ nodes: [...get().nodes, { id, type, data, position }] });
            break;
        }
        case "out": {
            const data = { provider: "", market: "", dateRange: "" };
            set({ nodes: [...get().nodes, { id, type, data, position }] });
            break;
        }
    }
  },

  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id
          ? { ...node, data: Object.assign(node.data, data) }
          : node
      ),
    });
  },


  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = nanoid(6);
    const edge = { id, ...data };

    connect(edge.source, edge.target);
    set({ edges: [edge, ...get().edges] });
  },

  onEdgesDelete(deleted) {
    for (const { source, target } of deleted) {
      disconnect(source, target);
    }
  },
}));