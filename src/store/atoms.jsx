import { atom, selector } from "recoil";
import { v4 as uuidv4} from 'uuid';

export const todoList = atom({
    key: 'todoLists',
    default: [{
        id: uuidv4(),
        title: 'Finish coding assignment',
        desc: 'Write Js code for the assignment',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'Go to the gym/running',
        desc: 'Work out for 1.5 hour',
        isCompleted: true,
    },
    {
        id: uuidv4(),
        title: 'Buy groceries',
        desc: 'Buy fruits, vegetables, milk and cookies',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'Read a book',
        desc: 'Read any self development book you like',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'Prepare for interview',
        desc: 'Unserstand your codebase good enogh so that you can explain it to other line by line',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'Call Mom',
        desc: 'Catch up with your mom and ask how she is doing',
        isCompleted: true,
    }]
})

export const todoFilteredState = atom({
    key: 'todoFilteredState',
    default: 'Show All'
})

export const filterSearchState = atom({
    key: 'filterSearchState',
    default: '',
})

export const filteredTodosList = selector({
    key: 'filteredTodosState',
    get: ({ get }) => {
        const filter = get(todoFilteredState);
        const myList = get(todoList);

        const search = get(filterSearchState);
        const list = myList.filter((item) => (item.desc.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase())))

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isCompleted)
            case 'Show Incompleted':
                return list.filter((item) => !item.isCompleted)
            default:
                return list;
        }
    }
})


export const todoListsStatsState = selector({
    key: 'todoListsStats',
    get: ({ get }) => {
        const totalTodos = get(todoList).length;
        const completedTodos = get(todoList).filter(item => item.isCompleted).length;
        const incompletedTodos = totalTodos - completedTodos;
        const percentageCompleted = (totalTodos === 0) ? 0 : (completedTodos / totalTodos) * 100;

        return {
            totalTodos,
            completedTodos,
            incompletedTodos,
            percentageCompleted
        }
    }
})