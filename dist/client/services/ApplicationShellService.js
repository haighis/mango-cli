"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationShellService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ApplicationShellService {
    /**
     * Get Application Shell
     * Returns a Application Shell collection
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static findApplicationShells() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/applicationshells/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Application Shell
     * @param requestBody Created Application Shell object
     * @returns ApplicationShell successful operation
     * @throws ApiError
     */
    static postApplicationShell(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/applicationshells/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static headApplicationShell() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/applicationshells/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Find application shell by ID
     * Returns a single applicationShell
     * @param id ID of Application Shell
     * @returns Install successful operation
     * @throws ApiError
     */
    static findById1(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/applicationshells/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `ApplicationShell not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static updateApplicationShell(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/applicationshells/{id}',
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
    static deleteApplicationShell(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/applicationshells/{id}',
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
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static patchApplicationShell(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/applicationshells/{id}',
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
exports.ApplicationShellService = ApplicationShellService;
