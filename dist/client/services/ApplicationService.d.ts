import type { Application } from '../models/Application';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ApplicationService {
    /**
     * Get Application
     * Returns a Application collection
     * @returns Application OK
     * @throws ApiError
     */
    static findApplications(): CancelablePromise<Array<Application>>;
    /**
     * Create Application
     * @param requestBody Created Application object
     * @returns Application successful operation
     * @throws ApiError
     */
    static postApplication(requestBody: Application): CancelablePromise<Application>;
    /**
     * @returns Application OK
     * @throws ApiError
     */
    static headApplication(): CancelablePromise<Application>;
    /**
     * Find application by ID
     * Returns a single application
     * @param id ID of Application
     * @returns Application successful operation
     * @throws ApiError
     */
    static findById(id: string): CancelablePromise<Application>;
    /**
     * @param id
     * @param requestBody
     * @returns Application OK
     * @throws ApiError
     */
    static updateApplication(id: string, requestBody: Application): CancelablePromise<Application>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteApplication(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Application OK
     * @throws ApiError
     */
    static patchApplication(id: string, requestBody: Application): CancelablePromise<Application>;
}
