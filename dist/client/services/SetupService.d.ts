import type { Label } from '../models/Label';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SetupService {
    /**
     * Setup Mango Platform
     * @param requestBody Setup object
     * @returns Label successful operation
     * @throws ApiError
     */
    static postSetup(requestBody: Label): CancelablePromise<Label>;
}
