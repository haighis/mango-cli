/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupRoleDTO } from './GroupRoleDTO';

export type UserDTO = {
    id?: string;
    username: string;
    password: string;
    email: string;
    enabled?: boolean;
    roles?: Array<GroupRoleDTO>;
};

