import { combineReducers } from "@reduxjs/toolkit";

import {
  authReducer,
  classesReducer,
  meetingsReducer,
  materialsReducer,
  menteesReducer,
  mentorsReducer,
  notesReducer,
  tasksReducer,
} from "./slices";

const rootReducer = combineReducers({
  auth: authReducer,
  classes: classesReducer,
  meetings: meetingsReducer,
  materials: materialsReducer,
  mentees: menteesReducer,
  mentors: mentorsReducer,
  notes: notesReducer,
  tasks: tasksReducer,
});

export default rootReducer;
