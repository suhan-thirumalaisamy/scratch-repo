'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { TodoItem } from './TodoItem';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoListProps {
  initialTodos: Todo[];
}

export function TodoList({ initialTodos }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input }),
      });

      if (!response.ok) throw new Error('Failed to add todo');

      const newTodo = await response.json();
      setTodos([newTodo, ...todos]);
      setInput('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (!response.ok) throw new Error('Failed to update todo');

      setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete todo');

      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        {/* Input Section */}
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <Button onClick={addTodo} variant="primary">
            Add
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All ({todos.length})
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </Button>
        </div>

        {/* Todo Items */}
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              {todos.length === 0
                ? 'No todos yet. Add one to get started!'
                : `No ${filter} todos.`}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
