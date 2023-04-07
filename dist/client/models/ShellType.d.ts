/**
 * Shell Type object
 */
export type ShellType = {
    /**
     * Classification of the Shell Type.
     */
    classification: string;
    /**
     * Sub Classification of the Shell Type.
     */
    subClassification: string;
    /**
     * The source File Reference for the Application Shell Type
     */
    fileReference: string;
    /**
     * Description fo the Store Item.
     */
    description: string;
    id?: string;
};
