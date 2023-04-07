"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SetupService {
    /**
     * Setup Mango Platform
     * @param requestBody Setup object
     * @returns Label successful operation
     * @throws ApiError
     */
    static postSetup(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/setup/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
exports.SetupService = SetupService;
