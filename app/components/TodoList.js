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
import {completeTask, deleteTask} from '../redux/task/taskSlice';
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

  // Complete item by checking if id is equal to the id of the item
  const onComplete = id => {
    dispatch(
      completeTask({
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
        <View style={styles.itemRightView}>
          {!item.completed && (
            <TouchableOpacity
              onPress={() => onComplete(item.id)}
              style={{marginRight: SIZES.base}}>
              <Image
                tintColor={appTheme.iconColor}
                source={icons.correct}
                style={styles.iconView}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Image
              tintColor={appTheme.iconColor}
              source={icons.cross}
              style={styles.iconView}
            />
          </TouchableOpacity>
        </View>
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
  itemRightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: SIZES.body3,
    width: '85%',
  },
  iconView: {
    width: SIZES.padding,
    height: SIZES.padding,
  },
});
