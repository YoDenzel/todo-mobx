import styles from './todo-page.module.scss';

export function TodoPage() {
  return (
    <div className={styles.container}>
      <input
        className={styles.create_todo_input}
        placeholder="Введите действие"
      />
    </div>
  );
}
