import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  appliedJobs: [],
  show: false,
  id: "",
  image: "",
  name: "",
  description: "",
  page: "",
};

export const details = createSlice({
  name: "details",
  initialState,
  reducers: {
    handleShow: (state, action) => {
      state.id = action.payload.id;
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.page = action.payload.page;
      state.show = true;
    },
    handleClose: (state, action) => {
      state.show = false;
    },
    applyJob: (state, action) => {
      state.appliedJobs.push(action.payload);
    },
  },
});

export default details.reducer;
export const { handleShow, handleClose, applyJob } = details.actions;
