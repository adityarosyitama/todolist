import { combineReducers } from 'redux'
import datareducer from './DetailCampaign/Reducers'
import listReducer from './Hadiah/Reducers'
import riwayatReducer from './Riwayat/Reducers'

const combiner= combineReducers({
    data: datareducer,
    list: listReducer,
    riwayat: riwayatReducer
})

export default combiner