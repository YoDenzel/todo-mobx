import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

type TTodoItem = {
  id: number;
  name: string;
  isDone: boolean;
};

class TodoStore {
  todoArr = [] as TTodoItem[];

  createTodo(item: TTodoItem) {
    this.todoArr.push(item);
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new TodoStore();
