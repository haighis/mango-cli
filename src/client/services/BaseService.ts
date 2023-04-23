import { OpenAPIConfig } from "../core/OpenAPI";

export class BaseService {

    public openApiOverride!: OpenAPIConfig;
    constructor(openApiConfig: OpenAPIConfig) {
        this.openApiOverride = openApiConfig;
    }
}