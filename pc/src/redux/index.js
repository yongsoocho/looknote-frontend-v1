import { combineReducers } from "redux"
import categoryReducer from "./slices/category"
import postsReducer from "./slices/posts"

const rootReducer = combineReducers({
  category: categoryReducer,
  posts: postsReducer
})

export default rootReducer