
import { useRecoilValue } from 'recoil'
import { filteredTodosList } from './store/atoms'
import TodoItemCreator from './components/TodoItemCreator';
import TODOItem from './components/TODOItem';
import FilteredTodos from './components/FilteredTodos';
import TodoListsStats from './components/TodoListsStats';

function App() {
  const todoLists = useRecoilValue(filteredTodosList);

  return (
    <>
      < TodoItemCreator />
      < FilteredTodos />
      < TodoListsStats />

      {
        todoLists.map((item) => (
          <TODOItem key={todoLists.indexOf(item)} todo={item} />
        ))
      }
    </>
  )
}




export default App
