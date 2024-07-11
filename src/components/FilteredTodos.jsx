import { useRecoilState, useSetRecoilState } from "recoil";
import { filterSearchState, todoFilteredState, todoList } from "../store/atoms";


export default function FilteredTodos() {
    const [filterOption, setFilterOption] = useRecoilState(todoFilteredState)

    const setFilterSearch = useSetRecoilState(filterSearchState);

    function updateFilter(e) {
        setFilterOption(e.target.value)
    }

    function updateSearchFilter(e) {
        setFilterSearch(e.target.value);
    }

    return (
        <div>
            <select value={filterOption} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Incompleted">Incompleted</option>
            </select>

            <input type="search" onChange={updateSearchFilter} placeholder="search"/>
        </div>
    )

}