import { NestFactory } from '@nestjs/core'
import { writeFileSync } from 'fs'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false })

  app.enableCors()

  const options = new DocumentBuilder().setTitle('NestJS APIs').build()
  const document = SwaggerModule.createDocument(app, options)

  writeFileSync('./swagger-spec.json', JSON.stringify(document, undefined, 2))

  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
