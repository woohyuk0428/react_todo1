import { useState } from 'react';
import './MyTodo.scss';

const initTodos = [
  { id: 1, title: "과제" },
  { id: 2, title: "시험공부" },
  { id: 3, title: "코딩훈련" }
];

const MyTodo = () => {
  const [todos, setTodos] = useState(initTodos);
  const [title, setTitle] = useState('');
  const addTodo = () => {
    const n = todos.length;
    const id = n==0 ? 1 : todos[n-1].id + 1;
    setTodos([...todos, {id, title}]);
    setTitle('');
  }
  const deleteTodo = (id: number) => {
    if (confirm("삭제하시겠습니까?"))
      setTodos(todos.filter(t => t.id != id)); // immutable 하게 todos 배열에서 id 항목 삭제
  }
  return (
    <div id='MyTodo'>
      <h1>할 일</h1>
      <table>
        <thead>
          <tr><td>ID</td><td>할일</td></tr>
        </thead>
        <tbody>
          {todos.map(({id, title}) => <tr key={id}><td>{id}</td><td>{title}
            <span onClick={()=>deleteTodo(id)}>x</span></td></tr>)}
        </tbody>
      </table>
      <input type="text" onChange={e=>setTitle(e.target.value)} value={title}
        placeholder="할일을 입력하세요" />
      <button type="button" onClick={()=>addTodo()}>추가</button>
    </div>);
}
export default MyTodo;