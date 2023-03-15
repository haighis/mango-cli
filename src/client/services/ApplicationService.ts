/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationService {

    /**
     * Get Application
     * Returns a Application collection
     * @returns Application OK
     * @throws ApiError
     */
    public static findApplications(): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
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
    public static postApplication(
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
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
    public static headApplication(): CancelablePromise<Application> {
        return __request(OpenAPI, {
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
    public static findById(
        id: number,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/{id}',
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
     * @returns Application OK
     * @throws ApiError
     */
    public static updateApplication(
        id: string,
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
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
     * @returns number OK
     * @throws ApiError
     */
    public static deleteApplication(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
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
    public static patchApplication(
        id: string,
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
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
