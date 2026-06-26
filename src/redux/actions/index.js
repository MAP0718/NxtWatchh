export const TOGGLE_THEME = 'TOGGLE_THEME'
export const CHANGE_TAB = 'CHANGE_TAB'
export const ADD_VIDEO = 'ADD_VIDEO'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'

export const toggleTheme = () => ({type: TOGGLE_THEME})
export const changeTab = tab => ({type: CHANGE_TAB, payload: tab})
export const addVideo = video => ({type: ADD_VIDEO, payload: video})
export const removeVideo = id => ({type: REMOVE_VIDEO, payload: id})
