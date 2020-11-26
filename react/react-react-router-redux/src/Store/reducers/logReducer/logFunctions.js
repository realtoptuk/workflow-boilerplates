export const updateLogger = (state, data) => {
  return {
    ...state,
    logger: [...data],
  };
};

export const goTestPage = (state) => {
  console.log('go to test page');
  return state;
};
