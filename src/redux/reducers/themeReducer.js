import {TOGGLE_THEME} from '../actions'

const initialState = {isDarkTheme: false}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {isDarkTheme: !state.isDarkTheme}
    default:
      return state
  }
}

export default themeReducer
