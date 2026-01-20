import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";
import classesReducer from "../../features/classesSlice";
import meetingsReducer from "../../features/meetingsSlice";
import notesReducer from "../../features/notesSlice";
import tasksReducer from "../../features/tasksSlice";
import materialsReducer from "../../features/materialsSlice";
import mentorsReducer from "../../features/mentorsSlice";
import menteesReducer from "../../features/menteesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  classes: classesReducer,
  meetings: meetingsReducer,
  notes: notesReducer,
  tasks: tasksReducer,
  materials: materialsReducer,
  mentors: mentorsReducer,
  mentees: menteesReducer,
});

export default rootReducer;
