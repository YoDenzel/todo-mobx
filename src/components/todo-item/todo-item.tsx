import { observer } from 'mobx-react-lite';
import { Images } from '../../shared/images';
import { TodoStore } from '../../store/todo-store';
import styles from './todo-item.module.scss';
import { TTodoItemComponent } from './types';

export const TodoItem = observer(({ todoItem }: TTodoItemComponent) => {
  return (
    <div className={styles.todo_item} key={todoItem.id}>
      <div className={styles.left_part}>
        <div className={styles.checkbox_container}>
          <input
            type="checkbox"
            className={styles.checkbox_input}
            onClick={() => TodoStore.setIsDone(todoItem)}
          />
          <span className={styles.checkbox}>
            {todoItem.isDone && <Images.Checked />}
          </span>

          <p className={styles.todo_card__title}>{todoItem.name}</p>
        </div>
      </div>
      <div className={styles.right_part}>
        <button
          className={styles.delete_button}
          onClick={() => TodoStore.deleteTodo(todoItem)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
});
