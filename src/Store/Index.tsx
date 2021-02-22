import { combineReducers, createStore } from 'redux'
import reducerCategories from './Ducks/categories/reducer'
import reducerCartItem from './Ducks/cartItem/reducer'
import reducerBudget from './Ducks/budget/reducer'

const createRootReducer = () => combineReducers({
    categories: reducerCategories,
    cartItem: reducerCartItem,
    budgetItem: reducerBudget
})

const store = createStore(createRootReducer())

export { store }