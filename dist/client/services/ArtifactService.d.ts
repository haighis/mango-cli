import type { Artifact } from '../models/Artifact';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ArtifactService {
    /**
     * Get Artifact
     * Returns a Artifact collection
     * @returns Artifact OK
     * @throws ApiError
     */
    static findArtifacts(): CancelablePromise<Array<Artifact>>;
    /**
     * Create Artifact
     * @param requestBody Created Artifact object
     * @returns Artifact successful operation
     * @throws ApiError
     */
    static postArtifact(requestBody: Artifact): CancelablePromise<Artifact>;
    /**
     * @returns Artifact OK
     * @throws ApiError
     */
    static headArtifact(): CancelablePromise<Artifact>;
    /**
     * Find Artifact by ID
     * Returns a single artifact
     * @param id ID of Artifact
     * @returns Artifact successful operation
     * @throws ApiError
     */
    static findById2(id: string): CancelablePromise<Artifact>;
    /**
     * @param id
     * @param requestBody
     * @returns Artifact OK
     * @throws ApiError
     */
    static updateArtifact(id: string, requestBody: Artifact): CancelablePromise<Artifact>;
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    static deleteArtifact(id: string): CancelablePromise<string>;
    /**
     * @param id
     * @param requestBody
     * @returns Artifact OK
     * @throws ApiError
     */
    static patchArtifact(id: string, requestBody: Artifact): CancelablePromise<Artifact>;
}
