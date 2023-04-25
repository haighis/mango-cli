import { CancelablePromise, OpenAPIConfig } from "./client";
import { request as __request } from './client/core/request';
import Context from "./db/models/Context";
import Credential from './db/models/Credential';
import { SetupService } from "./SetupService";

type ConsumerCreateRequest = {
    username: string;
};

type ConsumerRequest = {
    id: string;
};

type ApiKeyRequest = {
    username: string;
};

class AuthContext {
    public GetConsumer(
        requestBody: ConsumerRequest,
        openAPIConfig: OpenAPIConfig
    ): CancelablePromise<ConsumerRequest> {
        return __request(openAPIConfig, {
            method: 'GET',
            url: `/consumers/${requestBody.id}`,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    public DeleteConsumer(
        requestBody: ConsumerRequest,
        openAPIConfig: OpenAPIConfig
    ): CancelablePromise<ConsumerRequest> {
        return __request(openAPIConfig, {
            method: 'DELETE',
            url: `/consumers/${requestBody.id}`,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    public CreateConsumer(
        requestBody: ConsumerCreateRequest,
        openAPIConfig: OpenAPIConfig
    ): CancelablePromise<ConsumerCreateRequest> {
        return __request(openAPIConfig, {
            method: 'POST',
            url: '/consumers/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    public GetApiKey(
        requestBody: ApiKeyRequest,
        openAPIConfig: OpenAPIConfig
    ): CancelablePromise<ApiKeyRequest> {
        return __request(openAPIConfig, {
            method: 'GET',
            url: `/consumers/${requestBody.username}/key-auth`,
            //body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    public CreateApiKey(
        requestBody: ApiKeyRequest,
        openAPIConfig: OpenAPIConfig
    ): CancelablePromise<ApiKeyRequest> {
        return __request(openAPIConfig, {
            method: 'POST',
            url: `/consumers/${requestBody.username}/key-auth`,
            //body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    public async buildAccountApiServerOpenApiConfig() : Promise<OpenAPIConfig | undefined> {
        let defaultContext = await Context.findOne({ where: { isDefaultContext: true}});
        //console.log('buildAccountApiServerOpenApiConfig ', defaultContext)
        const openApiConfig: OpenAPIConfig = {
            BASE: defaultContext!.loginApiServerUrl,
            VERSION: '1.0',
            WITH_CREDENTIALS: false,
            CREDENTIALS: 'include',
            TOKEN: undefined,
            USERNAME: undefined,
            PASSWORD: undefined,
            HEADERS: undefined,
            ENCODE_PATH: undefined,
        };
        return openApiConfig;
    }

    public async buildOpenApiConfig() : Promise<OpenAPIConfig | undefined> {
        let defaultContext = await Context.findOne({ where: { isDefaultContext: true}});
        //console.log('all context ', defaultContext)
        let defaultCredentials = await Credential.findOne({ where: {context: defaultContext?.dataValues.context}});
        //console.log('defaultCredentials ', defaultCredentials)
        if(!defaultContext) {
            console.log(new Error(`No Default Context found so creating.`));
            await new SetupService().AddDefaultDevContextIfNotExists();
            return undefined;
        }
        if(defaultContext.dataValues.context != "development") {
            if(!defaultCredentials) {
                console.log(new Error(`No Credentials defined for Default Context. Please retreive a secret key and specify a credential for Default Context before proceeding.`));
                return undefined;
            }
        }
        if(defaultContext.dataValues.context != "development") {
            let headers: Record<string,string> = { 'x-api-key': defaultCredentials!.secretKey }; 
            const openApiConfig: OpenAPIConfig = {
                BASE: defaultContext!.apiServerUrl,
                VERSION: '1.0',
                WITH_CREDENTIALS: false,
                CREDENTIALS: 'include',
                TOKEN: undefined,
                USERNAME: undefined,
                PASSWORD: undefined,
                HEADERS: headers,
                ENCODE_PATH: undefined,
            };
            return openApiConfig;
        } else {
            const openApiConfig: OpenAPIConfig = {
                BASE: defaultContext!.apiServerUrl,
                VERSION: '1.0',
                WITH_CREDENTIALS: false,
                CREDENTIALS: 'include',
                TOKEN: undefined,
                USERNAME: undefined,
                PASSWORD: undefined,
                HEADERS: undefined,
                ENCODE_PATH: undefined,
            };
            return openApiConfig;
        }
        // For Debug use this commented out open api config
        /*
        let headers: Record<string,string> = { 'x-api-key': '0LEsh29FMTW3INFh7HsWZVdlIyqu6TgG' }; // getCurrentCredentials!.secretKey}
        const openApiConfig: OpenAPIConfig = {
            BASE: 'http://localhost:8000', // getCurrentContext!.apiServerUrl,
            VERSION: '1.0',
            WITH_CREDENTIALS: false,
            CREDENTIALS: 'include',
            TOKEN: undefined,
            USERNAME: undefined,
            PASSWORD: undefined,
            HEADERS: headers,
            ENCODE_PATH: undefined,
        };*/
    }
}
export default AuthContext;