import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "@/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { version } from 'package.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Marry Doc")
    .setDescription('Desc doc')
    .setVersion(version)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, document)

  await app.listen(3000);
  Logger.log(await app.getUrl());
}
bootstrap();
