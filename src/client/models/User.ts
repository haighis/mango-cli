/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupRole } from './GroupRole';

export type User = {
    id: string;
    username: string;
    email: string;
    enabled?: boolean;
    roles?: Array<GroupRole>;
};

