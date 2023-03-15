/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Application Install audit object
 */
export type ApplicationInstall = {
    /**
     * Installation created data and time of the Application Install audit.
     */
    created: string;
    /**
     * Url of the Application Install audit.
     */
    applicationUrl: string;
    /**
     * Installed Instance Code of the Application Install audit.
     */
    installedInstanceCode: string;
    /**
     * Status of the Application Install.
     */
    status: boolean;
};

