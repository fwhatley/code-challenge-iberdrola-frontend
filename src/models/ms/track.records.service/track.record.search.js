import TrackRecordResult from './track.record.result';

export default class TrackRecordSearch {
    constructor(values = {}) {
        this.resultCount = values.resultCount || 0;
        this.results = (values.results || []).map((item) => new TrackRecordResult(item));
    }
}
