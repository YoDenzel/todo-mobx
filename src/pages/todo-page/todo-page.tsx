import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { computed } from 'mobx';
import { TodoStore } from '../../store/todo-store';
import styles from './todo-page.module.scss';
import { TODO_INPUT_PLACEHOLDER } from './constants';
import { TodoItem } from '../../components';
import { TodoFilterTab } from '../../components/todo-filter-tab';
import { TFilterButtons } from '../../shared/types';

export const TodoPage = observer(() => {
  const [createTodoInputValue, setCreateTodoInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState<TFilterButtons>('Все');
  const addTodoClickhandler = () => {
    TodoStore.createTodo(createTodoInputValue);
    setCreateTodoInputValue('');
  };
  const todos = computed(() => TodoStore.filterTodo(activeFilter)).get();

  const filterButtonClickhandler = (v: TFilterButtons) => {
    setActiveFilter(v);
  };
  console.log(todos);
  return (
    <div className={styles.todo_wrapper}>
      <div className={styles.create_todo_container}>
        <input
          className={styles.create_todo_input}
          placeholder={TODO_INPUT_PLACEHOLDER}
          value={createTodoInputValue}
          onChange={e => setCreateTodoInputValue(e.target.value)}
        />
        <button
          className={styles.create_todo_button}
          onClick={addTodoClickhandler}
        >
          Добавить
        </button>
      </div>
      <div className={styles.todo_container}>
        <TodoFilterTab
          filterButtonClickhandler={filterButtonClickhandler}
          activeFilter={activeFilter}
        />
        {todos.map(item => (
          <TodoItem todoItem={item} key={item.id} />
        ))}
      </div>
    </div>
  );
});
