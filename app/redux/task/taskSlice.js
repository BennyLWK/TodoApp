import {createSlice, nanoid} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {taskList: []},
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
        completed: false,
      };
      state.taskList.push(newTask);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        item => item.id !== action.payload.id,
      );
    },
    clearTask: state => {
      state.taskList = [];
    },
  },
});

export const {addTask, clearTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
