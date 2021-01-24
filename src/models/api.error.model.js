export default class ApiErrorModel {
    constructor(values = {}) {
        this.code = values && values.code ? `${values.code}` : '';
        this.message = values && values.message ? values.message : '';
        this.method = values && values.method ? values.method : '';
        this.attributes = values && values.attributes ? values.attributes : [];
        this.vendor = values && values.vendor ? values.vendor : '';
        this.status = values && values.status ? values.status : 0;
    }
}
