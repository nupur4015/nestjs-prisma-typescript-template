import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsService } from './services/cors.service';
import { ConfigService } from '@nestjs/config';
import { SwaggerService } from './services/swagger.service';
import cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const config = app.get(ConfigService);
  const corsService = new CorsService(config);
  app.enableCors(corsService.getCorsConfig());
  const swagger = new SwaggerService(app, config);
  swagger.setup();
  
  await app.listen(3000);
}
bootstrap();
