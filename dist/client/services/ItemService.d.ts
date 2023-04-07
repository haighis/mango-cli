import type { Artifact } from '../models/Artifact';
import type { Item } from '../models/Item';
import type { ItemDto } from '../models/ItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ItemService {
    /**
     * Get Item
     * Returns a Item collection
     * @returns Item OK
     * @throws ApiError
     */
    static findItems(): CancelablePromise<Array<Item>>;
    /**
     * Create Item
     * @param requestBody Created Item object
     * @returns Item successful operation
     * @throws ApiError
     */
    static postItem(requestBody: Item): CancelablePromise<Item>;
    /**
     * @returns Item OK
     * @throws ApiError
     */
    static headItem(): CancelablePromise<Item>;
    /**
     * Find Item by ID
     * Returns a single item
     * @param id ID of Item
     * @returns Item successful operation
     * @throws ApiError
     */
    static findById4(id: string): CancelablePromise<Item>;
    /**
     * @param id
     * @param requestBody
     * @returns Item OK
     * @throws ApiError
     */
    static updateItem(id: string, requestBody: Item): CancelablePromise<Item>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteItem(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Item OK
     * @throws ApiError
     */
    static patchItem(id: string, requestBody: Item): CancelablePromise<Item>;
    /**
     * Create Artifact for Item
     * @param orderId
     * @param requestBody Created Item object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    static addArtifactForItem(orderId: string, requestBody: ItemDto): CancelablePromise<Artifact>;
}
