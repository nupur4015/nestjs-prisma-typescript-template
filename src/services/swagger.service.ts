import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerService {
  constructor(
    private readonly app: any,
    private readonly config: ConfigService,
  ) {}

  public setup(): void {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(this.config.get<string>('swagger.apiName'))
      .setDescription(this.config.get<string>('swagger.apiDescription'))
      .setVersion(this.config.get<string>('swagger.apiCurrentVersion'))
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(this.app, swaggerConfig);
    SwaggerModule.setup(this.config.get<string>('swagger.apiRoot'), this.app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }
}
