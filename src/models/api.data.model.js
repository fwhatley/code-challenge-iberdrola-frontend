export default class ApiDataModel {

    constructor(values = {}) {
        this.apiType = values.apiType || '';
        this.apiName = values.apiName || '';
        this.apiKey = values.apiKey || '';
        this.method = values.method || '';
        this.path = values.path || '';
    }

}
