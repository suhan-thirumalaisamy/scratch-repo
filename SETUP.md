# Todo App - Setup Instructions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database

First, ensure PostgreSQL is running. Then:

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local and add your PostgreSQL connection string
# Example: DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
```

### 3. Initialize Database
```bash
# Create database schema
npm run db:push

# (Optional) Seed with sample data
npm run db:seed
```

### 4. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Features Implemented

### Core Functionality
- ✅ Create todos with title validation
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Filter todos (All, Active, Completed)
- ✅ Real-time todo counts

### Theme Support
- ✅ Dark mode toggle button
- ✅ Automatic system preference detection
- ✅ Persistent theme preference (localStorage)
- ✅ Smooth transitions between themes
- ✅ Tailwind CSS dark mode classes

### UI/UX
- ✅ Responsive design (mobile-friendly)
- ✅ Accessible components (ARIA labels)
- ✅ Smooth animations and transitions
- ✅ Visual feedback for interactions
- ✅ Empty state messaging

### Technical
- ✅ Type-safe with TypeScript
- ✅ API routes for CRUD operations
- ✅ Database persistence with Prisma
- ✅ Input validation with Zod
- ✅ Component composition pattern
- ✅ Custom React hooks

## Project Structure

```
todo-app/
├── src/
│   ├── app/
│   │   ├── api/todos/          # API routes
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   └── features/           # Feature components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and database
│   └── types/                  # TypeScript types
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Seed script
├── public/                     # Static assets
├── .env.example                # Environment template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── next.config.js              # Next.js config
└── README.md                   # Documentation
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Sync schema with database
npm run db:migrate   # Create migration
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database
```

## Database Schema

```prisma
model Todo {
  id        String   @id @default(cuid())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## API Endpoints

### Get All Todos
```
GET /api/todos
```

### Create Todo
```
POST /api/todos
Content-Type: application/json

{
  "title": "My new todo"
}
```

### Update Todo
```
PATCH /api/todos/[id]
Content-Type: application/json

{
  "completed": true,
  "title": "Updated title"
}
```

### Delete Todo
```
DELETE /api/todos/[id]
```

## Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env.local
- Verify database exists or create it manually

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Prisma Client Issues
```bash
# Regenerate Prisma client
npx prisma generate
```

## Next Steps

- Add user authentication
- Implement todo categories/tags
- Add due dates and reminders
- Create todo sharing functionality
- Add export/import features
- Implement undo/redo functionality

## Support

For issues or questions, check the README.md or Next.js documentation.
