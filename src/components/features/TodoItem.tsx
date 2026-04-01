'use client';

import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { cn } from '@/lib/utils';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border transition-colors',
        'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700',
        todo.completed && 'bg-gray-50 dark:bg-gray-900'
      )}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Toggle ${todo.title}`}
      />
      <span
        className={cn(
          'flex-1 text-gray-900 dark:text-gray-100',
          todo.completed && 'line-through text-gray-500 dark:text-gray-500'
        )}
      >
        {todo.title}
      </span>
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.title}`}
      >
        Delete
      </Button>
    </div>
  );
}
