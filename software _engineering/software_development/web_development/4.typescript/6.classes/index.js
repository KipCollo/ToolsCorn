var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Api = /** @class */ (function () {
    function Api(url) {
        this.url = url;
    }
    Api.prototype.post = function () {
        console.log(this.url);
    };
    return Api;
}());
var fb = new Api("facebook.com");
fb.post();
var ig = new Api("instagram.com");
ig.post();
var Microservice = /** @class */ (function (_super) {
    __extends(Microservice, _super);
    function Microservice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Microservice.prototype.com = function () {
        console.log("".concat(this.url, " should talk to other microservice"));
    };
    return Microservice;
}(Api));
var sv = new Microservice("ms.com");
sv.post();
sv.com();
