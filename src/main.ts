import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Movies_challenge')
    .setDescription(
      'The Movies_challenge API, has a simple CRUD to the users interact with a table of movies',
    )
    .setVersion('1.0')
    .addTag('challenge')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Server is Running');
}
bootstrap();
