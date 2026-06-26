import {ADD_VIDEO, REMOVE_VIDEO, CHANGE_TAB} from '../actions'

const initialState = {savedVideos: [], activeTab: 'Home'}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO: {
      const exists = state.savedVideos.find(v => v.id === action.payload.id)
      if (exists) {
        return {
          ...state,
          savedVideos: state.savedVideos.filter(
            v => v.id !== action.payload.id,
          ),
        }
      }
      return {...state, savedVideos: [...state.savedVideos, action.payload]}
    }
    case REMOVE_VIDEO:
      return {
        ...state,
        savedVideos: state.savedVideos.filter(v => v.id !== action.payload),
      }
    case CHANGE_TAB:
      return {...state, activeTab: action.payload}
    default:
      return state
  }
}

export default videosReducer
