const initialState = { 
  q:null,
  a:null
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_QUOTE':
        return {
          ...action.payload
        }
      default: 
        return state
  }
}