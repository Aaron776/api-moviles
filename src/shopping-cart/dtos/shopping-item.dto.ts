import { ProductDto } from 'src/product/dtos/product.dto';

export interface ShoppingItemDto {
  observation?: string;
  item?: ProductDto;
}
