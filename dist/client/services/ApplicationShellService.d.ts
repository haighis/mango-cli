import type { ApplicationShell } from '../models/ApplicationShell';
import type { Install } from '../models/Install';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ApplicationShellService {
    /**
     * Get Application Shell
     * Returns a Application Shell collection
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static findApplicationShells(): CancelablePromise<Array<ApplicationShell>>;
    /**
     * Create Application Shell
     * @param requestBody Created Application Shell object
     * @returns ApplicationShell successful operation
     * @throws ApiError
     */
    static postApplicationShell(requestBody: ApplicationShell): CancelablePromise<ApplicationShell>;
    /**
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static headApplicationShell(): CancelablePromise<ApplicationShell>;
    /**
     * Find application shell by ID
     * Returns a single applicationShell
     * @param id ID of Application Shell
     * @returns Install successful operation
     * @throws ApiError
     */
    static findById1(id: string): CancelablePromise<Install>;
    /**
     * @param id
     * @param requestBody
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static updateApplicationShell(id: string, requestBody: ApplicationShell): CancelablePromise<ApplicationShell>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteApplicationShell(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    static patchApplicationShell(id: string, requestBody: ApplicationShell): CancelablePromise<ApplicationShell>;
}
