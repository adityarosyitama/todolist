import { createStore } from 'redux';
import combiner from './Combiner';

const store = createStore(combiner);

export default store;