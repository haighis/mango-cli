/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { BaseService } from './BaseService';

export class AccountService extends BaseService {

    /**
     * Authenticate account by username and password
     * Returns a single object containing token.
     * @param requestBody
     * @returns LoginRequest successful operation
     * @throws ApiError
     */
    public login(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginRequest> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/account/login',
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
     * Register account by UserDto
     * Returns a single user object containing the created user.
     * @param requestBody
     * @returns UserDTO successful operation
     * @throws ApiError
     */
    public  register(
        requestBody: UserDTO,
    ): CancelablePromise<UserDTO> {
        return __request(this.openApiOverride, {
            method: 'POST',
            url: '/api/account/register',
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
