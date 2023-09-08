const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
};

const colorTheme = {
  blue: 'Blue',
  purple: 'Purple',
  green: 'Green',
  orange: 'Orange',
};

const todoStatus = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

const bottom_tabs = [
  {
    id: 0,
    label: colorTheme.blue,
  },
  {
    id: 1,
    label: colorTheme.purple,
  },
  {
    id: 2,
    label: colorTheme.green,
  },
  {
    id: 3,
    label: colorTheme.orange,
  },
];

export default {
  screens,
  bottom_tabs,
  colorTheme,
  todoStatus,
};
