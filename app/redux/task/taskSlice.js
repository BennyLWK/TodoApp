import {createSlice, nanoid} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {taskList: [], filteredTasks: [], searchKeyword: null},
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
        completed: false,
      };
      state.taskList.push(newTask);
      state.searchKeyword = null;
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        item => item.id !== action.payload.id,
      );
      state.filteredTasks = state.filteredTasks.filter(
        item => item.id !== action.payload.id,
      );
    },
    clearTask: state => {
      state.taskList = [];
      state.filteredTasks = [];
      state.searchKeyword = null;
    },
    completeTask: (state, {payload}) => {
      const taskSelected = state.taskList.find(item => item.id === payload.id);
      taskSelected.completed = true;
    },
    searchByCompletedStatus: (state, {payload}) => {
      const filteredTasks = state.taskList.filter(
        task => task.completed === payload.completed,
      );
      return {
        ...state,
        filteredTasks:
          typeof payload.completed === 'boolean'
            ? filteredTasks
            : [...state.taskList],
      };
    },
    setSearchKeyword: (state, {payload}) => {
      state.searchKeyword = payload.search;
    },
  },
});

export const {
  addTask,
  completeTask,
  clearTask,
  deleteTask,
  searchByCompletedStatus,
  setSearchKeyword,
} = taskSlice.actions;

export default taskSlice.reducer;
