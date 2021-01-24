import { ACTION_TYPES } from './action.types';

export const setTrackRecords = (trackRecords = null) => {
    return {
        type: ACTION_TYPES.SET_TRACK_RECORDS,
        payload: trackRecords
    };
};

// MORE ACTIONS BELOW HERE
