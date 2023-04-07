"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class LabelService {
    /**
     * Get Label
     * Returns a Label collection
     * @returns Label OK
     * @throws ApiError
     */
    static findLabels() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Label
     * @param requestBody Created Label object
     * @returns Label successful operation
     * @throws ApiError
     */
    static postLabel(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/labels/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns Label OK
     * @throws ApiError
     */
    static headLabel() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Find label by ID
     * Returns a single label
     * @param id ID of Label
     * @returns Label successful operation
     * @throws ApiError
     */
    static findById6(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `label not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    static updateLabel(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteLabel(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    static patchLabel(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
exports.LabelService = LabelService;
