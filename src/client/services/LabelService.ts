/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Label } from '../models/Label';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class LabelService extends BaseService {

    /**
     * Get Label
     * Returns a Label collection
     * @returns Label OK
     * @throws ApiError
     */
    public  findLabels(): CancelablePromise<Array<Label>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Label
     * @param requestBody Created Label object
     * @returns Label successful operation
     * @throws ApiError
     */
    public  postLabel(
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/labels/',
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
     * @returns Label OK
     * @throws ApiError
     */
    public  headLabel(): CancelablePromise<Label> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/labels/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find label by ID
     * Returns a single label
     * @param id ID of Label
     * @returns Label successful operation
     * @throws ApiError
     */
    public  findById5(
        id: string,
    ): CancelablePromise<Label> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/labels/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                404: `label not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    public  updateLabel(
        id: string,
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/labels/{id}',
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
    public  deleteLabel(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/labels/{id}',
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
     * @returns Label OK
     * @throws ApiError
     */
    public  patchLabel(
        id: string,
        requestBody: Label,
    ): CancelablePromise<Label> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/labels/{id}',
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
