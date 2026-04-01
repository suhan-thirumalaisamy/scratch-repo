import { db } from '@/lib/db';
import { createTodoSchema } from '@/lib/validations';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const todos = await db.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createTodoSchema.parse(body);

    const todo = await db.todo.create({
      data: {
        title: validatedData.title,
      },
    });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 400 });
  }
}
