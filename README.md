# Pokedex Explorer

This is a simple full stack Pokedex application built as part of an assignment.

The goal of this project was to build a small application using:

- Next.js
- TypeScript
- Prisma ORM (SQL database)
- tRPC (React Query)
- Material UI

The app allows users to search and filter Pokémon data stored in a database.

---

## Features

### 1. Search Single Pokémon
You can type a Pokémon name (for example: Bulbasaur) and fetch its details from the database.

### 2. Search Multiple Pokémon
You can enter multiple names separated by commas:
Bulbasaur, Charmander
The app will return a table containing all matching Pokémon.

### 3. Filter by Type
Using the dropdown, you can filter Pokémon by type (Fire, Grass, Water, etc.).

Only Pokémon matching the selected type will be displayed.

---

## Tech Stack Used

- Next.js (Pages Router)
- TypeScript
- Prisma ORM with SQL database
- tRPC for type-safe API routes
- Material UI for UI components

---

## Database

Pokémon data is stored using Prisma.
Mock data is seeded into the database for testing.

The model includes:
- id
- name
- types
- sprite (image URL)

---

## Project Structure

- `src/pages/index.tsx` – Main page
- `src/components/` – Reusable UI components
- `src/server/api/routers/` – tRPC routers
- `prisma/schema.prisma` – Database schema

---

## Improvements Added

- Case-insensitive search
- Loading and error states
- Clean separation of components
- Type-safe API calls using tRPC
- Removed unused authentication setup for simplicity

---

## How to Run Locally

```bash
npm install
npx prisma migrate dev
npm run dev
```

## Live Demo 
[https://pokedex-trpc-app.vercel.app/]