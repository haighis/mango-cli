import type { Kind } from '../models/Kind';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class KindService {
    /**
     * Find Kind by ID
     * Returns a single kind
     * @param id ID of Kind
     * @returns Kind successful operation
     * @throws ApiError
     */
    static findById5(id: string): CancelablePromise<Kind>;
    /**
     * @param id
     * @param requestBody
     * @returns Kind OK
     * @throws ApiError
     */
    static updateKind(id: string, requestBody: Kind): CancelablePromise<Kind>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteKind(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Kind OK
     * @throws ApiError
     */
    static patchKind(id: string, requestBody: Kind): CancelablePromise<Kind>;
    /**
     * Get Kind
     * Returns a Kind collection
     * @returns Kind OK
     * @throws ApiError
     */
    static findKinds(): CancelablePromise<Array<Kind>>;
    /**
     * Create Kind
     * @param requestBody Created Kind object
     * @returns Kind successful operation
     * @throws ApiError
     */
    static postKind(requestBody: Kind): CancelablePromise<Kind>;
    /**
     * @returns Kind OK
     * @throws ApiError
     */
    static headKind(): CancelablePromise<Kind>;
}
