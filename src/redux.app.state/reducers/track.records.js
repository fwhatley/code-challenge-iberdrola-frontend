import { ACTION_TYPES } from '../actions/action.types';
import { TRACK_RECORDS } from './initial.state';

export const trackRecordReducers = (trackRecords = TRACK_RECORDS, action) => {
    if (action.type === ACTION_TYPES.SET_TRACK_RECORDS) {
        return action.payload;
    }
    return trackRecords;
};
