import { OpenAPIConfig } from "./client";

export class OpenApiConfigBuilder
{
  public CreateOpenApiConfig(baseUrl: string) : OpenAPIConfig {
    const openApiConfig: OpenAPIConfig = {
      BASE: baseUrl, // 'http://localhost:8002'
      VERSION: '1.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
      TOKEN: undefined,
      USERNAME: undefined,
      PASSWORD: undefined,
      HEADERS: undefined,
      ENCODE_PATH: undefined,
    };
    return openApiConfig
  }
}