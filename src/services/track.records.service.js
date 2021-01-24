import { ApiCallService } from './api.call.service';
import ApiErrorModel from '../models/api.error.model';
import TrackRecordSearch from '../models/ms/track.records.service/track.record.search';

class TrackRecordsService {

    constructor() {
        TrackRecordsService.instance = TrackRecordsService.instance || this;
        return TrackRecordsService.instance;
    }

    getTrackRecords = () => {
        return new Promise((resolve, reject) => {
            ApiCallService.callService('getTrackRecords')
                .then((res) => {
                    if (res.hasOwnProperty('code') && res.hasOwnProperty('message')) {
                        reject(new ApiErrorModel(res));
                    } else {
                        resolve(new TrackRecordSearch(res));
                    }
                })
                .catch((err) => {
                    reject(new ApiErrorModel(err.error));
                });
        });
    };
}

const instance = new TrackRecordsService();
export { instance as TrackRecordsService };
