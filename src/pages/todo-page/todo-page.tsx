import styles from './todo-page.module.scss';

export function TodoPage() {
  return (
    <div className={styles.todo_wrapper}>
      <input
        className={styles.create_todo_input}
        placeholder="Введите действие"
      />
      <div className={styles.todo_container}>
        {[1, 2, 3, 4, 5].map(item => (
          <div className={styles.todo_card} key={item}>
            <p className={styles.todo_card__title}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
