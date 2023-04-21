/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Install } from '../models/Install';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class InstallService extends BaseService {

    /**
     * Find Install by ID
     * Returns a single Install
     * @param id ID of Install
     * @returns Install successful operation
     * @throws ApiError
     */
    public  findById1(
        id: string,
    ): CancelablePromise<Install> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/installs/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
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
    public  updateApplicationInstall(
        id: string,
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/installs/{id}',
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
    public  deleteApplicationInstall(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/installs/{id}',
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
     * @returns Install OK
     * @throws ApiError
     */
    public  patchApplicationInstall(
        id: string,
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/installs/{id}',
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
     * Get Install
     * Returns a Install collection
     * @returns Install OK
     * @throws ApiError
     */
    public  findApplicationInstalls(): CancelablePromise<Array<Install>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
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
    public  postApplicationInstall(
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/installs/',
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
     * @returns Install OK
     * @throws ApiError
     */
    public  headApplicationInstall(): CancelablePromise<Install> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
