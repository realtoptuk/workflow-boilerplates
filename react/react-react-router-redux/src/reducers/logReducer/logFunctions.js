export const setLoading = state => {
  return {
    ...state,
    loading: true,
  };
};

export const updateLogger = (state, data) => {
  return {
    ...state,
    loading: false,
    logger: [...data],
  };
};

export const goTestPage = state => {
  console.log('go to test page');
  return state;
};
