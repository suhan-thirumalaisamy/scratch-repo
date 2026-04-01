# Todo App

A modern todo application with dark and light theme support, built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- ✅ Create, read, update, and delete todos
- 🌙 Dark and light theme support with persistent preference
- 📱 Responsive design
- 🎨 Beautiful UI with Tailwind CSS
- 🔒 Type-safe with TypeScript
- 📦 Database persistence with PostgreSQL and Prisma

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 12+

### Installation

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy the env template and fill in your database URL:
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your PostgreSQL connection string:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
   ```

3. Set up the database:
   ```bash
   npm run db:push
   npm run db:seed   # optional - adds sample todos
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Sync Prisma schema with database |
| `npm run db:migrate` | Create and run database migration |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run db:seed` | Seed database with sample data |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Checkbox.tsx
│   └── features/          # Feature-specific components
│       ├── TodoList.tsx
│       ├── TodoItem.tsx
│       └── ThemeToggle.tsx
├── hooks/
│   └── useTheme.ts        # Theme management hook
├── lib/
│   ├── db.ts              # Prisma client
│   ├── utils.ts           # Utility functions
│   └── validations.ts     # Zod schemas
└── types/                 # TypeScript types

prisma/
├── schema.prisma          # Database schema
└── seed.ts                # Seed script
```

## Theme Support

The app automatically detects your system's theme preference and allows manual switching via the theme toggle button in the header. Your preference is saved to localStorage.

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/[id]` - Update a todo
- `DELETE /api/todos/[id]` - Delete a todo

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **Package Manager**: npm

## License

MIT
