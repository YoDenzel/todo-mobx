import { action, makeObservable, observable } from 'mobx';
import { TTodoItem } from '../shared/types';

export class TodoStoreImplementation {
  todoArr = [] as TTodoItem[];

  createTodo(name: string) {
    const todoItem = {
      id: Date.now(),
      name: name,
      isDone: false,
    };
    this.todoArr.push(todoItem);
  }
  setIsDone(todo: TTodoItem) {
    this.todoArr = this.todoArr.filter(item => {
      if (todo.id === item.id) {
        item.isDone = !item.isDone;
        return item;
      } else return item;
    });
  }
  deleteTodo(todo: TTodoItem) {
    this.todoArr = this.todoArr.filter(item => !(item.id === todo.id));
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
