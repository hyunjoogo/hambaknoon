import React, { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
const todoListState = atom({
    key: 'todoListState',
    default: [],
});
const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});
const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});
function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };
    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", value: inputValue, onChange: onChange }),
        React.createElement("button", { onClick: addItem }, "Add")));
}
let id = 0;
function getId() {
    return id++;
}
function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, Object.assign(Object.assign({}, item), { text: value }));
        setTodoList(newList);
    };
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, Object.assign(Object.assign({}, item), { isComplete: !item.isComplete }));
        setTodoList(newList);
    };
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", value: item.text, onChange: editItemText }),
        React.createElement("input", { type: "checkbox", checked: item.isComplete, onChange: toggleItemCompletion }),
        React.createElement("button", { onClick: deleteItem }, "X")));
}
function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };
    return (React.createElement(React.Fragment, null,
        "Filter:",
        React.createElement("select", { value: filter, onChange: updateFilter },
            React.createElement("option", { value: "Show All" }, "All"),
            React.createElement("option", { value: "Show Completed" }, "Completed"),
            React.createElement("option", { value: "Show Uncompleted" }, "Uncompleted"))));
}
function TodoListStats() {
    const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted, } = useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);
    return (React.createElement("ul", null,
        React.createElement("li", null,
            "Total items: ",
            totalNum),
        React.createElement("li", null,
            "Items completed: ",
            totalCompletedNum),
        React.createElement("li", null,
            "Items not completed: ",
            totalUncompletedNum),
        React.createElement("li", null,
            "Percent completed: ",
            formattedPercentCompleted)));
}
const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    return (React.createElement(React.Fragment, null,
        React.createElement(TodoListStats, null),
        React.createElement(TodoListFilters, null),
        React.createElement(TodoItemCreator, null),
        todoList.map((todoItem) => (React.createElement(TodoItem, { key: todoItem.id, item: todoItem })))));
};
export default TodoList;
