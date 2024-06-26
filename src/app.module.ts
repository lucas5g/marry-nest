import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [CategoryModule, ProductModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
