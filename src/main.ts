import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Movies_Challenge API')
    .setDescription(
      'A API Movies_Challenge, faz parte de um desafio técnico de criação de um CRUD com integração do JWT para validação de usuários e navegação dentro das rotas propostas dentro desse CRUD',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('movies')
    .addTag('Login Authorization')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => console.log(`Server is Runnig ${PORT}`));
}
bootstrap();
