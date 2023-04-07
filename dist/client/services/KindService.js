"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class KindService {
    /**
     * Find Kind by ID
     * Returns a single kind
     * @param id ID of Kind
     * @returns Kind successful operation
     * @throws ApiError
     */
    static findById5(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/kinds/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `kind not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Kind OK
     * @throws ApiError
     */
    static updateKind(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/kinds/{id}',
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
    static deleteKind(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/kinds/{id}',
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
     * @returns Kind OK
     * @throws ApiError
     */
    static patchKind(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/kinds/{id}',
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
     * Get Kind
     * Returns a Kind collection
     * @returns Kind OK
     * @throws ApiError
     */
    static findKinds() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Kind
     * @param requestBody Created Kind object
     * @returns Kind successful operation
     * @throws ApiError
     */
    static postKind(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/kinds/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns Kind OK
     * @throws ApiError
     */
    static headKind() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
exports.KindService = KindService;
