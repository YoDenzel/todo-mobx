import { action, makeObservable, observable } from 'mobx';
import { TFilterButtons, TTodoItem } from '../shared/types';

export class TodoStoreImplementation {
  todoArr = [] as TTodoItem[];

  createTodo(name: string) {
    const todoItem = {
      id: Math.random() * 10000,
      name: name,
      isDone: false,
    };
    this.todoArr.push(todoItem);
  }
  setIsDone(todo: TTodoItem) {
    this.todoArr = this.todoArr.map(item => {
      if (todo.id === item.id) {
        item.isDone = !item.isDone;
        return item;
      } else return item;
    });
  }
  deleteTodo(todo: TTodoItem) {
    this.todoArr = this.todoArr.filter(item => !(item.id === todo.id));
  }

  filterTodo(filter: TFilterButtons) {
    if (filter === 'Выполненные') {
      return this.todoArr.filter(item => item.isDone);
    } else if (filter === 'Невыполненные') {
      return this.todoArr.filter(item => !item.isDone);
    } else return this.todoArr;
  }

  constructor() {
    makeObservable(this, {
      todoArr: observable,
      createTodo: action,
      setIsDone: action,
      deleteTodo: action,
    });
  }
}

export const TodoStore = new TodoStoreImplementation();
