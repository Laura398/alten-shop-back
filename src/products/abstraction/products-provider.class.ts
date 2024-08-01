import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductProvider {
  create!: (createProductDto: CreateProductDto) => Promise<Product>;
  findAll!: () => Promise<Product[]>;
  findOne!: (_id: string) => Promise<Product>;
  update!: (
    _id: string,
    updateProductDto: UpdateProductDto,
  ) => Promise<Product>;
  delete!: (id: number) => Promise<Product>;
  deleteAll!: () => Promise<void>;
}
