import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
<<<<<<< HEAD
    origin: ['http://localhost:3000', 'http://localhost:5173'],
=======
    origin: ['http://localhost:3000, http://localhost:5173'],
>>>>>>> 60806d5f6a1710da252949d175bafee3cdaee35c
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();