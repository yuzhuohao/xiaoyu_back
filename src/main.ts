import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import globalMiddleware from './middleware/global.middleware';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('xiaoyu');
  app.use(globalMiddleware);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
