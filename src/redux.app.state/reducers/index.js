import { combineReducers } from 'redux';
import { trackRecordReducers } from './track.records';

export default combineReducers({
    trackRecords: trackRecordReducers,
});

