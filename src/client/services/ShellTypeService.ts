/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShellType } from '../models/ShellType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class ShellTypeService extends BaseService {

    /**
     * Get Shell Type
     * Returns a Shell Type collection
     * @returns ShellType OK
     * @throws ApiError
     */
    public  findShellTypes(): CancelablePromise<Array<ShellType>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/shelltypes/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create ShellType
     * @param requestBody Created ShellType object
     * @returns ShellType successful operation
     * @throws ApiError
     */
    public  postShellType(
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/shelltypes/',
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
     * @returns ShellType OK
     * @throws ApiError
     */
    public  headShellType(): CancelablePromise<ShellType> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/shelltypes/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find shell type by ID
     * Returns a single shell type
     * @param id ID of ShellType
     * @returns ShellType successful operation
     * @throws ApiError
     */
    public  findById(
        id: string,
    ): CancelablePromise<ShellType> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/shelltypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                404: `shell type not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ShellType OK
     * @throws ApiError
     */
    public  updateShellType(
        id: string,
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/shelltypes/{id}',
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
    public  deleteShellType(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/shelltypes/{id}',
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
     * @returns ShellType OK
     * @throws ApiError
     */
    public  patchShellType(
        id: string,
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/shelltypes/{id}',
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

}
