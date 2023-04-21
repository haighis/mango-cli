/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class ArtifactService extends BaseService {

    /**
     * Find Artifact by ID
     * Returns a single artifact
     * @param id ID of Artifact
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public  findById3(
        id: string,
    ): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
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
    public  updateArtifact(
        id: string,
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public  deleteArtifact(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
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
    public  patchArtifact(
        id: string,
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/artifacts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get Artifact
     * Returns a Artifact collection
     * @returns Artifact OK
     * @throws ApiError
     */
    public  findArtifacts(): CancelablePromise<Array<Artifact>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
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
    public  postArtifact(
        requestBody: Artifact,
    ): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/artifacts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Artifact OK
     * @throws ApiError
     */
    public  headArtifact(): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/artifacts/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
