import { type MutationResolvers as IMutation } from "./generated/graphql";
import { Context } from "./context";
import { PrismaClient } from '@prisma/client';

// Initialize prisma
const prisma = new PrismaClient();

export const Mutation: IMutation<Context> = {

  // Create a new Todo
  createTodo: async (_, { input }) => {
    // Validation of the input: Need a title & completed & correct data types.
    if (!input.title || typeof input.title !== 'string') {
      throw new Error('Title is required and must be a valid string');
    }
    if (typeof input.completed !== 'boolean') {
      throw new Error('Completed must be a boolean');
    }

    try {
      const newTodo = await prisma.todo.create({
        data: {
          title: input.title,
          completed: input.completed,
        },
      });
      return newTodo; 
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to create a new todo: ${error.message}`);
      } else {
        throw new Error('Failed to create a new todo: Unknown error occurred');
      }
    }
  }, 
};
