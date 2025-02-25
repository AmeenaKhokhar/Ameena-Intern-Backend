export const typeDefs = /* GraphQL */ `
  scalar DateTime

  # Input for creating a Todo, when creating, should only include string and completed status
  input CreateTodoInput {
    title: String!
    completed: Boolean!
  }

  # Input for updating a Todo, to update a todo u need id, string or boolean update status
  input UpdateTodoInput {
    id: ID!
    title: String!
    completed: Boolean!
  }

  # Input for deleting a Todo (need todo ID)
  input DeleteTodoInput {
    id: ID!
  }

  # Type definition of a todo, should have id, title, completed, createdAt and nullable updatedAt 
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime
  }

  # CUD operations, the inputs are necessary and return the specified TODO to CUD
  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(input: UpdateTodoInput!): Todo!
    deleteTodo(input: DeleteTodoInput!): Todo!
  }

  # READ operations to get infos, it always returns an array of TODO's OR EMPTY. For getting todo, if there's no, returns null.
  type Query {
    getTodos: [Todo!]!
    getIncompleteTodos: [Todo!]!
    getCompletedTodos: [Todo!]!
    getTodoById(id: ID!): Todo
  }
`;
