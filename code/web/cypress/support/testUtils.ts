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

export const getReactFiber = (el: any) => {
  const key = Object.keys(el).find((key) => {
    return key.startsWith("__reactInternalInstance$"); // react <17
  });
  if (!key) {
    return;
  }
  return el[key];
};

export const getComponent = (fiber: any) => {
  let parentFiber = fiber.return;
  while (typeof parentFiber.type == "string") {
    parentFiber = parentFiber.return;
  }
  return parentFiber;
};

export const setComponentState = (
  componentSelector: string,
  setStateMethod: string,
  count: number = 1
) => {
  cy.get(`[data-cy="${componentSelector}"]`).then((el$) => {
    const fiber = getReactFiber(el$[0]);
    const component = getComponent(fiber);
    for (let i = 0; count !== i; i++) {
      cy.log(`Invoked ${setStateMethod} ${i + 1} time`);
      component.stateNode[setStateMethod]();
    }
  });
};
