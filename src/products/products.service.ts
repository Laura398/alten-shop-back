import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductProvider } from './abstraction/products-provider.class';

@Injectable()
export class ProductsService {
  constructor(private readonly productProvider: ProductProvider) {}

  create(createProductDto: CreateProductDto) {
    return this.productProvider.create(createProductDto);
  }

  findAll() {
    return this.productProvider.findAll();
  }

  findOne(id: number) {
    return this.productProvider.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productProvider.update(id, updateProductDto);
  }

  delete(id: number) {
    return this.productProvider.delete(id);
  }

  deleteAll() {
    return this.productProvider.deleteAll();
  }
}
