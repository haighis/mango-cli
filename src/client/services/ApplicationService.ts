/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class ApplicationService extends BaseService {

    /**
     * Find application by ID
     * Returns a single application
     * @param id ID of Application
     * @returns Application successful operation
     * @throws ApiError
     */
    public  findById6(
        id: string,
    ): CancelablePromise<Application> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
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
    public  updateApplication(
        id: string,
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/applications/{id}',
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
    public  deleteApplication(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/applications/{id}',
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
     * @returns Application OK
     * @throws ApiError
     */
    public  patchApplication(
        id: string,
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/applications/{id}',
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
     * Get Application
     * Returns a Application collection
     * @returns Application OK
     * @throws ApiError
     */
    public  findApplications(): CancelablePromise<Array<Application>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/applications/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
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
    public  postApplication(
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/applications/',
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
     * @returns Application OK
     * @throws ApiError
     */
    public  headApplication(): CancelablePromise<Application> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/applications/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
