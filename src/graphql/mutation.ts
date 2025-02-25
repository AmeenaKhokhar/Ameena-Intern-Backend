import { type MutationResolvers as IMutation } from "./generated/graphql";
import { Context } from "./context";
import { PrismaClient } from '@prisma/client';

// Initialize prisma
const prisma = new PrismaClient();

export const Mutation: IMutation<Context> = {

  createSomething: async (_, { input }, { prisma }) => {
    const something = await prisma.something.create({
      data: {
        name: input.name,
      },
    });

    return {
      id: something.id,
      name: something.name,
    };
  },

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

  // Update an existing Todo
  updateTodo: async (_, { input }) => {
    const { id, title, completed } = input;

    // Validate inputs for id, title, and completed
    if (!id || typeof id !== 'string') {
      throw new Error('ID is required and must be a valid string');
    }
    if (!title || typeof title !== 'string') {
      throw new Error('Title is required and must be a valid string');
    }
    if (typeof completed !== 'boolean') {
      throw new Error('Completed is required and must be a boolean');
    }

    try {
      // Check if the todo exists
      const existingTodo = await prisma.todo.findUnique({
        where: { id },
      });

      // Validate 
      if (!existingTodo) {
        throw new Error(`Todo with ID ${id} does not exist`);
      }

      // Update the todo if it exists
      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: {
          title,
          completed,
        },
      });

      return updatedTodo; 
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to update todo with id: ${id}. Error: ${error.message}`);
      } else {
        throw new Error('Failed to update todo: Unknown error occurred');
      }
    }
  },

  // Delete a Todo
  deleteTodo: async (_, { input }) => {
    const { id } = input;
    // Validate input: ID must be a non-null string
    if (!id || typeof id !== 'string') {
      throw new Error('ID is required and must be a valid string');
    }

    try {
      // Check if the todo exists
      const existingTodo = await prisma.todo.findUnique({
        where: { id },
      });

      if (!existingTodo) {
        throw new Error(`Todo with ID ${id} does not exist`);
      }

      // Proceed with deletion
      const deletedTodo = await prisma.todo.delete({
        where: { id },
      });

      return deletedTodo; 
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete todo with id: ${id}. Reason: ${error.message}`);
      } else {
        throw new Error('Failed to delete todo: Unknown error occurred');
      }
    }
  }
};
