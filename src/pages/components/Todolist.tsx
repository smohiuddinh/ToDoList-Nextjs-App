import React, { useState } from 'react';
import { useTodos } from '@/Store/todo';

// Define tab types
type Tab = 'all' | 'active' | 'completed';

function Todolist() {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const { todos, handleDeleteTodo, toggleTodoAsCompleted } = useTodos();

  // Function to handle tab change
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Filter todos based on the active tab
  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'active') return !todo.completed;
    if (activeTab === 'completed') return todo.completed;
    return true; // For 'all' tab
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
    {/* Tab Buttons */}
    <div className="flex justify-center mb-4 space-x-4">
      {['all', 'active', 'completed'].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab as Tab)}
          className={`py-2 px-4 rounded-lg font-semibold text-white transition-colors duration-300
            ${activeTab === tab ? 'bg-blue-500 shadow-lg' : 'bg-gray-500 hover:bg-gray-600'}
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>


      {/* Todo List */}
      <ul className="list-none p-0">
        {filteredTodos.map((todo) => (
          <li
            className="flex items-center justify-between p-3 border-b border-gray-200 text-black"
            key={todo.id}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor={todo.id} className="ml-2">{todo.task}</label>
            </div>
            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                aria-label={`Remove ${todo.task}`}
                className="text-red-500 hover:text-red-700 transition"
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
