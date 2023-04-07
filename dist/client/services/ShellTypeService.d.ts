import type { ShellType } from '../models/ShellType';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ShellTypeService {
    /**
     * Get Shell Type
     * Returns a Shell Type collection
     * @returns ShellType OK
     * @throws ApiError
     */
    static findShellTypes(): CancelablePromise<Array<ShellType>>;
    /**
     * Create ShellType
     * @param requestBody Created ShellType object
     * @returns ShellType successful operation
     * @throws ApiError
     */
    static postShellType(requestBody: ShellType): CancelablePromise<ShellType>;
    /**
     * @returns ShellType OK
     * @throws ApiError
     */
    static headShellType(): CancelablePromise<ShellType>;
    /**
     * Find shell type by ID
     * Returns a single shell type
     * @param id ID of ShellType
     * @returns ShellType successful operation
     * @throws ApiError
     */
    static findById(id: string): CancelablePromise<ShellType>;
    /**
     * @param id
     * @param requestBody
     * @returns ShellType OK
     * @throws ApiError
     */
    static updateShellType(id: string, requestBody: ShellType): CancelablePromise<ShellType>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteShellType(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns ShellType OK
     * @throws ApiError
     */
    static patchShellType(id: string, requestBody: ShellType): CancelablePromise<ShellType>;
}
