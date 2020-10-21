export class Client {
    constructor(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    alertAll() {
        let url_ = this.baseUrl + "/Alert";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAlertAll(_response);
        });
    }
    processAlertAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Alert.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    alert(body) {
        let url_ = this.baseUrl + "/Alert";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAlert(_response);
        });
    }
    processAlert(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    getLatest() {
        let url_ = this.baseUrl + "/Alert/GetLatest";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processGetLatest(_response);
        });
    }
    processGetLatest(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Alert.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    alert2(id) {
        let url_ = this.baseUrl + "/Alert/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAlert2(_response);
        });
    }
    processAlert2(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Alert.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    alert3(id, body) {
        let url_ = this.baseUrl + "/Alert/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAlert3(_response);
        });
    }
    processAlert3(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    alert4(id) {
        let url_ = this.baseUrl + "/Alert/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAlert4(_response);
        });
    }
    processAlert4(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    getAll(body) {
        let url_ = this.baseUrl + "/Alert/get";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processGetAll(_response);
        });
    }
    processGetAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Alert.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    bindicator() {
        let url_ = this.baseUrl + "/Bindicator";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processBindicator(_response);
        });
    }
    processBindicator(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = BinLookup.fromJS(resultData200);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    request(success) {
        let url_ = this.baseUrl + "/request?";
        if (success !== undefined && success !== null)
            url_ += "success=" + encodeURIComponent("" + success) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processRequest(_response);
        });
    }
    processRequest(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    expire() {
        let url_ = this.baseUrl + "/request/expire";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processExpire(_response);
        });
    }
    processExpire(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    amount() {
        let url_ = this.baseUrl + "/request/amount";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processAmount(_response);
        });
    }
    processAmount(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    expireRows() {
        let url_ = this.baseUrl + "/request/ExpireRows";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "POST",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processExpireRows(_response);
        });
    }
    processExpireRows(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    submitRequest(requester, amount, success) {
        let url_ = this.baseUrl + "/request/SubmitRequest?";
        if (requester === undefined || requester === null)
            throw new Error("The parameter 'requester' must be defined and cannot be null.");
        else
            url_ += "Requester=" + encodeURIComponent("" + requester) + "&";
        if (amount === undefined || amount === null)
            throw new Error("The parameter 'amount' must be defined and cannot be null.");
        else
            url_ += "Amount=" + encodeURIComponent("" + amount) + "&";
        if (success !== undefined && success !== null)
            url_ += "Success=" + encodeURIComponent("" + success) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "POST",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processSubmitRequest(_response);
        });
    }
    processSubmitRequest(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    uniEventAll() {
        let url_ = this.baseUrl + "/UniEvent";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processUniEventAll(_response);
        });
    }
    processUniEventAll(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UniEvent.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    uniEvent(body) {
        let url_ = this.baseUrl + "/UniEvent";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processUniEvent(_response);
        });
    }
    processUniEvent(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    uniEvent2(id) {
        let url_ = this.baseUrl + "/UniEvent/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processUniEvent2(_response);
        });
    }
    processUniEvent2(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UniEvent.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    uniEvent3(id, body) {
        let url_ = this.baseUrl + "/UniEvent/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processUniEvent3(_response);
        });
    }
    processUniEvent3(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    uniEvent4(id) {
        let url_ = this.baseUrl + "/UniEvent/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processUniEvent4(_response);
        });
    }
    processUniEvent4(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    get(body) {
        let url_ = this.baseUrl + "/UniEvent/get";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processGet(_response);
        });
    }
    processGet(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UniEvent.fromJS(item));
                }
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    getMultipleTimetables(body) {
        let url_ = this.baseUrl + "/UniEvent/GetMultipleTimetables";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processGetMultipleTimetables(_response);
        });
    }
    processGetMultipleTimetables(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    getTimetable(body) {
        let url_ = this.baseUrl + "/UniEvent/GetTimetable";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processGetTimetable(_response);
        });
    }
    processGetTimetable(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    deDupe() {
        let url_ = this.baseUrl + "/UniEvent/DeDupe";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {}
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processDeDupe(_response);
        });
    }
    processDeDupe(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
    weatherForecast() {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };
        return this.http.fetch(url_, options_).then((_response) => {
            return this.processWeatherForecast(_response);
        });
    }
    processWeatherForecast(response) {
        const status = response.status;
        let _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v, k) => _headers[k] = v);
        }
        ;
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = OpenWeatherCurrent.fromJS(resultData200);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    }
}
export class Alert {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.message = _data["message"];
            this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : undefined;
            this.createdBy = _data["createdBy"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Alert();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["message"] = this.message;
        data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : undefined;
        data["createdBy"] = this.createdBy;
        return data;
    }
}
export class NewAlert {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.message = _data["message"];
            this.createdBy = _data["createdBy"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new NewAlert();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["message"] = this.message;
        data["createdBy"] = this.createdBy;
        return data;
    }
}
export class Bin {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.subsequent = _data["subsequent"] ? new Date(_data["subsequent"].toString()) : undefined;
            this.next = _data["next"] ? new Date(_data["next"].toString()) : undefined;
            this.pdfLink = _data["pdfLink"];
            this.communal = _data["communal"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Bin();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["subsequent"] = this.subsequent ? this.subsequent.toISOString() : undefined;
        data["next"] = this.next ? this.next.toISOString() : undefined;
        data["pdfLink"] = this.pdfLink;
        data["communal"] = this.communal;
        return data;
    }
}
export class BinLookup {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.rubbish = _data["rubbish"] ? Bin.fromJS(_data["rubbish"]) : undefined;
            this.recycling = _data["recycling"] ? Bin.fromJS(_data["recycling"]) : undefined;
            this.foodWaste = _data["foodWaste"] ? Bin.fromJS(_data["foodWaste"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new BinLookup();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["rubbish"] = this.rubbish ? this.rubbish.toJSON() : undefined;
        data["recycling"] = this.recycling ? this.recycling.toJSON() : undefined;
        data["foodWaste"] = this.foodWaste ? this.foodWaste.toJSON() : undefined;
        return data;
    }
}
export var UniEventType;
(function (UniEventType) {
    UniEventType[UniEventType["_0"] = 0] = "_0";
    UniEventType[UniEventType["_1"] = 1] = "_1";
    UniEventType[UniEventType["_2"] = 2] = "_2";
    UniEventType[UniEventType["_3"] = 3] = "_3";
})(UniEventType || (UniEventType = {}));
export var Unit;
(function (Unit) {
    Unit[Unit["_0"] = 0] = "_0";
    Unit[Unit["_1"] = 1] = "_1";
    Unit[Unit["_2"] = 2] = "_2";
    Unit[Unit["_3"] = 3] = "_3";
    Unit[Unit["_4"] = 4] = "_4";
    Unit[Unit["_5"] = 5] = "_5";
})(Unit || (Unit = {}));
export class UniEvent {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.startTime = _data["startTime"] ? new Date(_data["startTime"].toString()) : undefined;
            this.endTime = _data["endTime"] ? new Date(_data["endTime"].toString()) : undefined;
            this.eventType = _data["eventType"];
            this.unit = _data["unit"];
            this.eventLeader = _data["eventLeader"];
            this.id = _data["id"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UniEvent();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["startTime"] = this.startTime ? this.startTime.toISOString() : undefined;
        data["endTime"] = this.endTime ? this.endTime.toISOString() : undefined;
        data["eventType"] = this.eventType;
        data["unit"] = this.unit;
        data["eventLeader"] = this.eventLeader;
        data["id"] = this.id;
        return data;
    }
}
export class NewUniEvent {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.startTime = _data["startTime"] ? new Date(_data["startTime"].toString()) : undefined;
            this.endTime = _data["endTime"] ? new Date(_data["endTime"].toString()) : undefined;
            this.eventType = _data["eventType"];
            this.unit = _data["unit"];
            this.eventLeader = _data["eventLeader"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new NewUniEvent();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["startTime"] = this.startTime ? this.startTime.toISOString() : undefined;
        data["endTime"] = this.endTime ? this.endTime.toISOString() : undefined;
        data["eventType"] = this.eventType;
        data["unit"] = this.unit;
        data["eventLeader"] = this.eventLeader;
        return data;
    }
}
export class KeyValue {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.key = _data["key"];
            this.value = _data["value"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new KeyValue();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["key"] = this.key;
        data["value"] = this.value;
        return data;
    }
}
export class Coordinates {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.longitude = _data["longitude"];
            this.latitude = _data["latitude"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Coordinates();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["longitude"] = this.longitude;
        data["latitude"] = this.latitude;
        return data;
    }
}
export class Weather {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.main = _data["main"];
            this.description = _data["description"];
            this.icon = _data["icon"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Weather();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["main"] = this.main;
        data["description"] = this.description;
        data["icon"] = this.icon;
        return data;
    }
}
export class Main {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.temperature = _data["temperature"];
            this.feelsLike = _data["feelsLike"];
            this.minimumTemperature = _data["minimumTemperature"];
            this.maximumTemperature = _data["maximumTemperature"];
            this.pressure = _data["pressure"];
            this.humidity = _data["humidity"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Main();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["temperature"] = this.temperature;
        data["feelsLike"] = this.feelsLike;
        data["minimumTemperature"] = this.minimumTemperature;
        data["maximumTemperature"] = this.maximumTemperature;
        data["pressure"] = this.pressure;
        data["humidity"] = this.humidity;
        return data;
    }
}
export class Wind {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.speed = _data["speed"];
            this.degrees = _data["degrees"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Wind();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["speed"] = this.speed;
        data["degrees"] = this.degrees;
        return data;
    }
}
export class Clouds {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.all = _data["all"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Clouds();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["all"] = this.all;
        return data;
    }
}
export class SysDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.type = _data["type"];
            this.id = _data["id"];
            this.country = _data["country"];
            this.sunrise = _data["sunrise"];
            this.sunset = _data["sunset"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new SysDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        data["id"] = this.id;
        data["country"] = this.country;
        data["sunrise"] = this.sunrise;
        data["sunset"] = this.sunset;
        return data;
    }
}
export class OpenWeatherCurrent {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.cordinates = _data["cordinates"] ? Coordinates.fromJS(_data["cordinates"]) : undefined;
            if (Array.isArray(_data["weather"])) {
                this.weather = [];
                for (let item of _data["weather"])
                    this.weather.push(Weather.fromJS(item));
            }
            this.base = _data["base"];
            this.main = _data["main"] ? Main.fromJS(_data["main"]) : undefined;
            this.visibility = _data["visibility"];
            this.wind = _data["wind"] ? Wind.fromJS(_data["wind"]) : undefined;
            this.clouds = _data["clouds"] ? Clouds.fromJS(_data["clouds"]) : undefined;
            this.dt = _data["dt"];
            this.sys = _data["sys"] ? SysDto.fromJS(_data["sys"]) : undefined;
            this.timeZone = _data["timeZone"];
            this.id = _data["id"];
            this.name = _data["name"];
            this.cod = _data["cod"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new OpenWeatherCurrent();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["cordinates"] = this.cordinates ? this.cordinates.toJSON() : undefined;
        if (Array.isArray(this.weather)) {
            data["weather"] = [];
            for (let item of this.weather)
                data["weather"].push(item.toJSON());
        }
        data["base"] = this.base;
        data["main"] = this.main ? this.main.toJSON() : undefined;
        data["visibility"] = this.visibility;
        data["wind"] = this.wind ? this.wind.toJSON() : undefined;
        data["clouds"] = this.clouds ? this.clouds.toJSON() : undefined;
        data["dt"] = this.dt;
        data["sys"] = this.sys ? this.sys.toJSON() : undefined;
        data["timeZone"] = this.timeZone;
        data["id"] = this.id;
        data["name"] = this.name;
        data["cod"] = this.cod;
        return data;
    }
}
export class SwaggerException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isSwaggerException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isSwaggerException(obj) {
        return obj.isSwaggerException === true;
    }
}
function throwException(message, status, response, headers, result) {
    throw new SwaggerException(message, status, response, headers, result);
}
//# sourceMappingURL=client.js.map