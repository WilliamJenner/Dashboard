export class Client {
    constructor(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : "";
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
                console.log(_responseText);
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