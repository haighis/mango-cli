/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationInstall } from '../models/ApplicationInstall';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationInstallService {

    /**
     * Get Application Install
     * Returns a Application Install collection
     * @returns ApplicationInstall OK
     * @throws ApiError
     */
    public static findApplicationInstalls(): CancelablePromise<Array<ApplicationInstall>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applicationinstalls/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Application Install
     * @param requestBody Created Application Install object
     * @returns ApplicationInstall successful operation
     * @throws ApiError
     */
    public static postApplicationInstall(
        requestBody: ApplicationInstall,
    ): CancelablePromise<ApplicationInstall> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/applicationinstalls/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ApplicationInstall OK
     * @throws ApiError
     */
    public static headApplicationInstall(): CancelablePromise<ApplicationInstall> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/applicationinstalls/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find applicationInstall by ID
     * Returns a single applicationInstall
     * @param id ID of Application Install
     * @returns ApplicationInstall successful operation
     * @throws ApiError
     */
    public static findById1(
        id: number,
    ): CancelablePromise<ApplicationInstall> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applicationinstalls/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `ApplicationInstall not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ApplicationInstall OK
     * @throws ApiError
     */
    public static updateApplicationInstall(
        id: string,
        requestBody: ApplicationInstall,
    ): CancelablePromise<ApplicationInstall> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/applicationinstalls/{id}',
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
    public static deleteApplicationInstall(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/applicationinstalls/{id}',
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
     * @returns ApplicationInstall OK
     * @throws ApiError
     */
    public static patchApplicationInstall(
        id: string,
        requestBody: ApplicationInstall,
    ): CancelablePromise<ApplicationInstall> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/applicationinstalls/{id}',
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
