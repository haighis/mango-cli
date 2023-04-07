import type { Label } from '../models/Label';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LabelService {
    /**
     * Get Label
     * Returns a Label collection
     * @returns Label OK
     * @throws ApiError
     */
    static findLabels(): CancelablePromise<Array<Label>>;
    /**
     * Create Label
     * @param requestBody Created Label object
     * @returns Label successful operation
     * @throws ApiError
     */
    static postLabel(requestBody: Label): CancelablePromise<Label>;
    /**
     * @returns Label OK
     * @throws ApiError
     */
    static headLabel(): CancelablePromise<Label>;
    /**
     * Find label by ID
     * Returns a single label
     * @param id ID of Label
     * @returns Label successful operation
     * @throws ApiError
     */
    static findById6(id: string): CancelablePromise<Label>;
    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    static updateLabel(id: string, requestBody: Label): CancelablePromise<Label>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteLabel(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Label OK
     * @throws ApiError
     */
    static patchLabel(id: string, requestBody: Label): CancelablePromise<Label>;
}
