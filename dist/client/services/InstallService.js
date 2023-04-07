"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InstallService {
    /**
     * Get Install
     * Returns a Install collection
     * @returns Install OK
     * @throws ApiError
     */
    static findApplicationInstalls() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Install
     * @param requestBody Created Install object
     * @returns Install successful operation
     * @throws ApiError
     */
    static postApplicationInstall(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/installs/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns Install OK
     * @throws ApiError
     */
    static headApplicationInstall() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Find Install by ID
     * Returns a single Install
     * @param id ID of Install
     * @returns Install successful operation
     * @throws ApiError
     */
    static findById3(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/installs/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Install not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Install OK
     * @throws ApiError
     */
    static updateApplicationInstall(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/installs/{id}',
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
    static deleteApplicationInstall(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/installs/{id}',
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
     * @returns Install OK
     * @throws ApiError
     */
    static patchApplicationInstall(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/installs/{id}',
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
exports.InstallService = InstallService;
