/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';
import type { Item } from '../models/Item';
import type { ItemDto } from '../models/ItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class ItemService extends BaseService {

    /**
     * Get Item
     * Returns a Item collection
     * @returns Item OK
     * @throws ApiError
     */
    public  findItems(): CancelablePromise<Array<Item>> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/items/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Item
     * @param requestBody Created Item object
     * @returns Item successful operation
     * @throws ApiError
     */
    public  postItem(
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/items/',
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
     * @returns Item OK
     * @throws ApiError
     */
    public  headItem(): CancelablePromise<Item> {
        return __request(this.openApiOverride, {
            method: 'HEAD',
            url: '/api/items/',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find Item by ID
     * Returns a single item
     * @param id ID of Item
     * @returns Item successful operation
     * @throws ApiError
     */
    public  findById4(
        id: string,
    ): CancelablePromise<Item> {
        return __request(this.openApiOverride, {
            method: 'GET',
            url: '/api/items/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                401: `Unauthorized`,
                404: `item not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Item OK
     * @throws ApiError
     */
    public  updateItem(
        id: string,
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(this.openApiOverride, {
            method: 'PUT',
            url: '/api/items/{id}',
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
    public  deleteItem(
        id: string,
    ): CancelablePromise<string> {
        return __request(this.openApiOverride, {
            method: 'DELETE',
            url: '/api/items/{id}',
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
     * @returns Item OK
     * @throws ApiError
     */
    public  patchItem(
        id: string,
        requestBody: Item,
    ): CancelablePromise<Item> {
        return __request(this.openApiOverride, {
            method: 'PATCH',
            url: '/api/items/{id}',
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
     * Create Artifact for Item
     * @param orderId
     * @param requestBody Created Item object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public  addArtifactForItem(
        orderId: string,
        requestBody: ItemDto,
    ): CancelablePromise<Artifact> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/items/{orderId}/artifact',
            path: {
                'orderId': orderId,
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
