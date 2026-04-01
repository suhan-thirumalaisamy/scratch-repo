import { db } from '@/lib/db';
import { ThemeToggle } from '@/components/features/ThemeToggle';
import { TodoList } from '@/components/features/TodoList';

export default async function Home() {
  const todos = await db.todo.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Todos</h1>
          <ThemeToggle />
        </div>

        {/* Todo List */}
        <TodoList initialTodos={todos} />
      </div>
    </main>
  );
}
