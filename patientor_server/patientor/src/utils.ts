
export const assertNever = (any: never): never => {
  throw new Error("Exhaustive type checking violated");
};