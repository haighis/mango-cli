"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ApplicationService {
    /**
     * Get Application
     * Returns a Application collection
     * @returns Application OK
     * @throws ApiError
     */
    static findApplications() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/applications/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Application
     * @param requestBody Created Application object
     * @returns Application successful operation
     * @throws ApiError
     */
    static postApplication(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/applications/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns Application OK
     * @throws ApiError
     */
    static headApplication() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/applications/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Find application by ID
     * Returns a single application
     * @param id ID of Application
     * @returns Application successful operation
     * @throws ApiError
     */
    static findById(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Application not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Application OK
     * @throws ApiError
     */
    static updateApplication(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/applications/{id}',
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
    static deleteApplication(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/applications/{id}',
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
     * @returns Application OK
     * @throws ApiError
     */
    static patchApplication(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/applications/{id}',
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
exports.ApplicationService = ApplicationService;
