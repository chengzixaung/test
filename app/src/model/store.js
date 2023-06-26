import { legacy_createStore as createStore} from 'redux'
import myreducers from './reducer'
const store = createStore(myreducers)
export default store