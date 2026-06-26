import {createStore, combineReducers} from 'redux'
import themeReducer from './reducers/themeReducer'
import videosReducer from './reducers/videosReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  videos: videosReducer,
})

const store = createStore(rootReducer)

export default store
