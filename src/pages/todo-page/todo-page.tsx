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
  const addTodoClickhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createTodoInputValue) {
      TodoStore.createTodo(createTodoInputValue);
      setCreateTodoInputValue('');
    }
  };
  const todos = computed(() => TodoStore.filterTodo(activeFilter)).get();

  const filterButtonClickhandler = (v: TFilterButtons) => {
    setActiveFilter(v);
  };
  return (
    <div className={styles.todo_wrapper}>
      <form
        className={styles.create_todo_container}
        onSubmit={e => addTodoClickhandler(e)}
      >
        <input
          className={styles.create_todo_input}
          placeholder={TODO_INPUT_PLACEHOLDER}
          value={createTodoInputValue}
          onChange={e => setCreateTodoInputValue(e.target.value)}
        />
        <button className={styles.create_todo_button} type="submit">
          Добавить
        </button>
      </form>
      <div className={styles.todo_container}>
        <TodoFilterTab
          filterButtonClickhandler={filterButtonClickhandler}
          activeFilter={activeFilter}
          isTodos={!!TodoStore.todoArr.length}
        />
        {todos.map(item => (
          <TodoItem todoItem={item} key={item.id} />
        ))}
      </div>
    </div>
  );
});
