import { db } from '../src/lib/db';

async function main() {
  console.log('Seeding database...');

  const todos = await db.todo.createMany({
    data: [
      { title: 'Learn Next.js' },
      { title: 'Build a todo app' },
      { title: 'Add dark mode support' },
      { title: 'Deploy to production' },
    ],
  });

  console.log(`Created ${todos.count} todos`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
