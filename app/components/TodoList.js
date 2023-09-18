import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SIZES, icons} from '../constants';
import {deleteTask} from '../redux/task/taskSlice';
import {selectTheme} from '../redux/theme/themeSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  const appTheme = useSelector(selectTheme);

  // Delete item by checking if id is equal to the id of the item
  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  // RenderItem function with a delete button
  const renderItem = ({item}) => {
    return (
      <View
        style={[styles.item, {borderBottomColor: appTheme.backgroundColor}]}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Image
            tintColor={appTheme.iconColor}
            source={icons.delete_icon}
            style={{width: SIZES.base * 2, height: SIZES.base * 2}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos.taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    padding: SIZES.base,
    marginVertical: SIZES.base,
    marginHorizontal: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.body3,
  },
});
