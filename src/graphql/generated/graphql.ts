import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type CreateSomethingInput = {
  name: Scalars["String"]["input"];
};

export type CreateTodoInput = {
  completed: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
};

export type DeleteTodoInput = {
  id: Scalars["ID"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createSomething: Something;
  createTodo: Todo;
  deleteTodo: Todo;
  updateTodo: Todo;
};

export type MutationCreateSomethingArgs = {
  input: CreateSomethingInput;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: "Query";
  getCompletedTodos: Array<Todo>;
  getIncompleteTodos: Array<Todo>;
  getTodoById?: Maybe<Todo>;
  getTodos: Array<Todo>;
  hello?: Maybe<Scalars["String"]["output"]>;
};

export type QueryGetTodoByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type Something = {
  __typename?: "Something";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Todo = {
  __typename?: "Todo";
  completed: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UpdateTodoInput = {
  completed: Scalars["Boolean"]["input"];
  id: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CreateSomethingInput: CreateSomethingInput;
  CreateTodoInput: CreateTodoInput;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  DeleteTodoInput: DeleteTodoInput;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Something: ResolverTypeWrapper<Something>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Todo: ResolverTypeWrapper<Todo>;
  UpdateTodoInput: UpdateTodoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  CreateSomethingInput: CreateSomethingInput;
  CreateTodoInput: CreateTodoInput;
  DateTime: Scalars["DateTime"]["output"];
  DeleteTodoInput: DeleteTodoInput;
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  Something: Something;
  String: Scalars["String"]["output"];
  Todo: Todo;
  UpdateTodoInput: UpdateTodoInput;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createSomething?: Resolver<
    ResolversTypes["Something"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSomethingArgs, "input">
  >;
  createTodo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoArgs, "input">
  >;
  deleteTodo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTodoArgs, "input">
  >;
  updateTodo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getCompletedTodos?: Resolver<
    Array<ResolversTypes["Todo"]>,
    ParentType,
    ContextType
  >;
  getIncompleteTodos?: Resolver<
    Array<ResolversTypes["Todo"]>,
    ParentType,
    ContextType
  >;
  getTodoById?: Resolver<
    Maybe<ResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTodoByIdArgs, "id">
  >;
  getTodos?: Resolver<Array<ResolversTypes["Todo"]>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type SomethingResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Something"] = ResolversParentTypes["Something"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Todo"] = ResolversParentTypes["Todo"],
> = {
  completed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Something?: SomethingResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
};
