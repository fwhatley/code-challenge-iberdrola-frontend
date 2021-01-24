
class ApiMocksService {

    constructor() {
        if (!ApiMocksService.instance) {
            ApiMocksService.instance = this;
        }
        return ApiMocksService.instance;
    }

    enableApiMocks() {
        return localStorage.setItem('appMock', 'ANY_VALUE_GOES_HERE');
    }

    disableApiMocks() {
        return localStorage.removeItem('appMock');
    }

    isApiMocksEnabled() {
        return !!localStorage.getItem('appMock') || '';
    }

}

const instance = new ApiMocksService();

export {instance as ApiMocksService};
