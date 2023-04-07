"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ArtifactService {
    /**
     * Get Artifact
     * Returns a Artifact collection
     * @returns Artifact OK
     * @throws ApiError
     */
    static findArtifacts() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create Artifact
     * @param requestBody Created Artifact object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    static postArtifact(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/artifacts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns Artifact OK
     * @throws ApiError
     */
    static headArtifact() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Find Artifact by ID
     * Returns a single artifact
     * @param id ID of Artifact
     * @returns Artifact successful operation
     * @throws ApiError
     */
    static findById2(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `artifact not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns Artifact OK
     * @throws ApiError
     */
    static updateArtifact(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/artifacts/{id}',
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
    static deleteArtifact(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/artifacts/{id}',
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
     * @returns Artifact OK
     * @throws ApiError
     */
    static patchArtifact(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/artifacts/{id}',
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
exports.ArtifactService = ArtifactService;
