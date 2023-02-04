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
  let sendResponse: (value: unknown) => void;
  const trigger = new Promise((resolve) => {
    sendResponse = resolve;
  });

  cy.intercept(url, (req) => {
    if (hasOperationName(req, operationName)) {
      return trigger.then(() => {
        req.reply();
      });
    }
  });

  return sendResponse;
};
