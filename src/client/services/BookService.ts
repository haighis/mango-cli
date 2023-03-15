/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Book } from '../models/Book';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookService {

    /**
     * Get books
     * Returns a books collection
     * @returns Book OK
     * @throws ApiError
     */
    public static findBooks(): CancelablePromise<Array<Book>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create book
     * This can only be done by the logged in book.
     * @param bookAuthorization select which kind of data to fetch
     * @param requestBody Created book object
     * @returns Book successful operation
     * @throws ApiError
     */
    public static postBook(
        bookAuthorization: string,
        requestBody: Book,
    ): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/books/',
            headers: {
                'bookAuthorization': bookAuthorization,
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
     * @returns Book OK
     * @throws ApiError
     */
    public static headBook(): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/v1/books/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find book by ID
     * Returns a single book
     * @param id ID of book
     * @param bookAuthorization select which kind of data to fetch
     * @returns Book successful operation
     * @throws ApiError
     */
    public static findById3(
        id: number,
        bookAuthorization: string,
    ): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/{id}',
            path: {
                'id': id,
            },
            headers: {
                'bookAuthorization': bookAuthorization,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Book not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Book OK
     * @throws ApiError
     */
    public static updateBook(
        id: string,
        requestBody: Book,
    ): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/books/{id}',
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
    public static deleteBook(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/books/{id}',
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
     * @returns Book OK
     * @throws ApiError
     */
    public static patchBook(
        id: string,
        requestBody: Book,
    ): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/books/{id}',
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
