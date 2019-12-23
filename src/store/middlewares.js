const consoleMessages = (store) => (next) => (action) => {
  // eslint-disable-next-line
  console.groupCollapsed(`Dispaching action: ${action.type}`);

  // eslint-disable-next-line
  console.log(`ski days: ${store.getState().allSkiDays.length}`);

  const result = next(action);
  const { allSkiDays, goal, resortNames } = store.getState();

  // eslint-disable-next-line
  console.log(`
    State
    =============
    ski days: ${allSkiDays.length}
    goal: ${goal}
    resorts: ${JSON.stringify(allSkiDays)}
    fetching: ${JSON.stringify(resortNames.fetching)}
    suggestions: ${JSON.stringify(resortNames.suggestions)}
  `);

  // eslint-disable-next-line
  console.groupEnd();

  return result;
};

export { consoleMessages };
