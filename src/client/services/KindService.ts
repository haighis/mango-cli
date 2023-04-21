/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Kind } from '../models/Kind';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class KindService extends BaseService {

    /**
     * Find Kind by ID
     * Returns a single kind
     * @param id ID of Kind
     * @returns Kind successful operation
     * @throws ApiError
     */
    public  findById(
        id: string,
    ): CancelablePromise<Kind> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/kinds/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                404: `kind not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Kind OK
     * @throws ApiError
     */
    public  updateKind(
        id: string,
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/kinds/{id}',
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
    public  deleteKind(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/kinds/{id}',
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
     * @returns Kind OK
     * @throws ApiError
     */
    public  patchKind(
        id: string,
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/kinds/{id}',
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
     * Get Kind
     * Returns a Kind collection
     * @returns Kind OK
     * @throws ApiError
     */
    public  findKinds(): CancelablePromise<Array<Kind>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Kind
     * @param requestBody Created Kind object
     * @returns Kind successful operation
     * @throws ApiError
     */
    public  postKind(
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/kinds/',
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
     * @returns Kind OK
     * @throws ApiError
     */
    public  headKind(): CancelablePromise<Kind> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
