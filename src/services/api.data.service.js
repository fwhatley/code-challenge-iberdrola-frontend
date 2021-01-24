import ApiDataModel from '../models/api.data.model';

const BASE_URL = 'https://itunes.apple.com';

class ApiDataService {
    constructor() {
        if (!ApiDataService.instance) {
            ApiDataService.instance = this;
        }
        return ApiDataService.instance;
    }

    getApiDataByKey(apiKey) {
        const dataModel = this.getApiData()[apiKey];
        if (dataModel) {
            dataModel.apiKey = apiKey;
        }
        return dataModel || false;
    }

    getApiData() {
        return {
            getTrackRecords: new ApiDataModel({
                apiType: 'mS',
                apiName: 'TrackRecordsService',
                method: 'GET',
                path: `${BASE_URL}/search?term=rock&media=music`,
            }),
        };
    }
}

const instance = new ApiDataService();

// since there are no changing values in this class, let's lock it down
Object.freeze(instance);

export { instance as ApiDataService};
