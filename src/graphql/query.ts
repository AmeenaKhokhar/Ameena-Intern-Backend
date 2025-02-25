import { type QueryResolvers as IQuery } from "./generated/graphql";
import { Context } from "./context";
import { PrismaClient } from '@prisma/client';

// Initialize prisma
const prisma = new PrismaClient();

export const Query: IQuery<Context> = {
  hello: () => "world",

  // Get all todos
  getTodos: async () => {
    try {
      const todos = await prisma.todo.findMany();
      return todos;
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  },

  // Get all incomplete todos
  getIncompleteTodos: async () => {
    try {
      const incompleteTodos = await prisma.todo.findMany({
        where: { completed: false },
      });
      return incompleteTodos; 
    } catch (error) {
      throw new Error('Failed to fetch incomplete todos');
    }
  },

  // Get all completed todos
  getCompletedTodos: async () => {
    try {
      const completedTodos = await prisma.todo.findMany({
        where: { completed: true },
      });
      return completedTodos; 
    } catch (error) {
      throw new Error('Failed to fetch completed todos');
    }
  },

  // Get a single todo by its ID
  getTodoById: async (_parent, { id }) => {
    try {
      return await prisma.todo.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to fetch todo with the specific id: ${id}`);
    }
  },
};
