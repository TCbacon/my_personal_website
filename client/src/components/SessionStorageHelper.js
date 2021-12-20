export const isPersistedState = stateName_Any => {
    const sessionState = sessionStorage.getItem(stateName_Any)
    return sessionState && JSON.parse(sessionState);
  };