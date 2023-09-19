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
    completeTask: (state, {payload}) => {
      const taskSelected = state.taskList.find(item => item.id === payload.id);
      taskSelected.completed = true;
    },
  },
});

export const {addTask, completeTask, clearTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
