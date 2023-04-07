import type { Install } from '../models/Install';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InstallService {
    /**
     * Get Install
     * Returns a Install collection
     * @returns Install OK
     * @throws ApiError
     */
    static findApplicationInstalls(): CancelablePromise<Array<Install>>;
    /**
     * Create Install
     * @param requestBody Created Install object
     * @returns Install successful operation
     * @throws ApiError
     */
    static postApplicationInstall(requestBody: Install): CancelablePromise<Install>;
    /**
     * @returns Install OK
     * @throws ApiError
     */
    static headApplicationInstall(): CancelablePromise<Install>;
    /**
     * Find Install by ID
     * Returns a single Install
     * @param id ID of Install
     * @returns Install successful operation
     * @throws ApiError
     */
    static findById3(id: string): CancelablePromise<Install>;
    /**
     * @param id
     * @param requestBody
     * @returns Install OK
     * @throws ApiError
     */
    static updateApplicationInstall(id: string, requestBody: Install): CancelablePromise<Install>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteApplicationInstall(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Install OK
     * @throws ApiError
     */
    static patchApplicationInstall(id: string, requestBody: Install): CancelablePromise<Install>;
}
