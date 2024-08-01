import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsProviderService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const productsCount = await this.productModel.countDocuments();
    createProductDto.id = 999 + productsCount + 1;
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  async findOne(_id: string) {
    return await this.productModel.findById(_id).exec();
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate(_id, updateProductDto, {
      new: true,
    });
  }

  async delete(id: number) {
    return await this.productModel.findOneAndDelete({ id: id }).exec();
  }

  async deleteAll() {
    return this.productModel.deleteMany().exec();
  }
}
