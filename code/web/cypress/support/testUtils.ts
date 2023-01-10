import { hasOperationName } from "./testUtils";

export const hasOperationName = (req, operationName) => {
  const { body } = req;

  return body.query.includes(operationName);
};

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};

export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};

export const setResponseLoadingState = (
  operationName: string,
  url: string = "http://localhost:8000/"
) => {
  const trigger = new Promise(() => {});

  cy.intercept(url, (req) => {
    if (hasOperationName(req, operationName)) {
      trigger.then(() => {
        req.reply();
      });
    }
  });
};
