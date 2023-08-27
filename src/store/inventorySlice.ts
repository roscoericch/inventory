import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, any> = {
  inventories: [
    { Id: "Test", type: "Bulldozers", model: "model 1", date: "12/7/22" },
    { Id: "Test", type: "Bulldozers", model: "model 1", date: "12/7/22" },
    { Id: "Test", type: "Bulldozers", model: "model 1", date: "12/7/22" },
  ],
  models: {
    Cranes: [
      {
        fact: "weight: 200lb, power: 200kw, maxWeightLift: 400lb",
        label: "model 1",
        value: "model 1",
      },
      {
        fact: "weight: 300lb, power: 300kw, maxWeightLift: 500lb",
        label: "model 2",
        value: "model 2",
      },
      {
        fact: "weight: 400lb, power: 400kw, maxWeightLift: 600lb",
        label: "model 3",
        value: "model 3",
      },
    ],
    Bulldozers: [
      {
        fact: "weight: 200lb, power: 200kw",
        label: "model 1",
        value: "model 1",
      },
      {
        fact: "weight: 300lb, power: 300kw",
        label: "model 2",
        value: "model 2",
      },
      {
        fact: "weight: 400lb, power: 400kw",
        label: "model 3",
        value: "model 3",
      },
    ],
    Chainsaws: [
      {
        fact: "weight: 200lb, power: 200kw",
        label: "model 1",
        value: "model 1",
      },
      {
        fact: "weight: 300lb, power: 300kw",
        label: "model 2",
        value: "model 2",
      },
      {
        fact: "weight: 400lb, power: 400kw",
        label: "model 3",
        value: "model 3",
      },
    ],
  },
  machineTypes: [
    {
      value: "Bulldozers",
      label: "Bulldozers",
    },
    {
      value: "Cranes",
      label: "Cranes",
    },
    {
      value: "Chainsaws",
      label: "Chainsaws",
    },
  ],
};

export const inventorySlice = createSlice({
  name: "inventories",
  initialState,
  reducers: {
    updateInventory: (state, action) => {
      state.inventories = [...state.inventories, action.payload];
    },
    editInventory: (state, action) => {
      state.inventories[action.payload._id] = action.payload.content;
      state.inventories = [...state.inventories];
    },
    deleteInventory: (state, action) => {
      state.inventories.splice(action.payload, 1);
      state.inventories = [...state.inventories];
    },
    updateMachineTypes: (state, action) => {
      state.machineTypes = [...state.machineTypes, action.payload];
    },
    editMachineTypes: (state, action) => {
      state.machineTypes[action.payload._id] = action.payload.content;
      state.machineTypes = [...state.machineTypes];
    },
    deleteMachineTypes: (state, action) => {
      state.machineTypes.splice(action.payload, 1);
      state.machineTypes = [...state.machineTypes];
    },
    updateModel: (state, action) => {
      state.models[action.payload.type] = [
        ...state.models[action.payload.type],
        action.payload.data,
      ];
      state.models = {
        ...state.models,
      };
    },
    editModel: (state, action) => {
      state.machineTypes[action.payload._id] = action.payload.content;
      state.machineTypes = [...state.machineTypes];
    },
    deleteModel: (state, action) => {
      state.machineTypes.splice(action.payload, 1);
      state.machineTypes = [...state.machineTypes];
    },
  },
});

export const {
  updateInventory,
  editInventory,
  deleteInventory,
  updateMachineTypes,
  deleteMachineTypes,
  editMachineTypes,
  updateModel,
} = inventorySlice.actions;
export default inventorySlice.reducer;
