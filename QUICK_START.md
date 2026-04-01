# Todo App - Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Database
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your PostgreSQL connection:
```
DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
```

### Step 3: Initialize Database
```bash
npm run db:push
```

### Step 4: Start Development
```bash
npm run dev
```

### Step 5: Open in Browser
Visit: **http://localhost:3000**

---

## 🎯 What You Can Do

### Create a Todo
1. Type in the input field
2. Press Enter or click "Add"

### Complete a Todo
- Click the checkbox next to any todo

### Delete a Todo
- Click the "Delete" button

### Filter Todos
- Click "All", "Active", or "Completed" buttons

### Toggle Theme
- Click the 🌙/☀️ button in the top right

---

## 📚 Key Files to Know

| File | What It Does |
|------|-------------|
| `src/app/page.tsx` | Home page with todo list |
| `src/components/features/TodoList.tsx` | Main todo container |
| `src/hooks/useTheme.ts` | Dark/light theme logic |
| `src/app/api/todos/route.ts` | Create/read todos |
| `src/app/api/todos/[id]/route.ts` | Update/delete todos |
| `prisma/schema.prisma` | Database structure |

---

## 🛠️ Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run db:studio    # Open database GUI
npm run db:seed      # Add sample todos
npm run lint         # Check code quality
```

---

## 🎨 Customization Ideas

### Change Colors
Edit `tailwind.config.ts` and `src/components/ui/*.tsx`

### Add Features
- Categories/tags
- Due dates
- Recurring todos
- Todo sharing

### Styling
- Modify Tailwind classes in components
- Update `src/app/globals.css`

---

## 🐛 Troubleshooting

**Database connection error?**
- Check PostgreSQL is running
- Verify DATABASE_URL in .env.local

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Prisma issues?**
```bash
npx prisma generate
```

---

## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## ✅ Features Included

- ✅ Create, read, update, delete todos
- ✅ Dark and light theme
- ✅ Responsive design
- ✅ Type-safe with TypeScript
- ✅ Database persistence
- ✅ Input validation
- ✅ Accessible UI

---

**Ready to build?** Start with `npm run dev` and open http://localhost:3000!
