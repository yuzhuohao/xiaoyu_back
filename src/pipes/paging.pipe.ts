import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PagingPipe implements PipeTransform {
  transform(query: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      if (!query.page || query.page < 1) {
        query.page = 1;
      }

      if (!query.pageSize || query.pageSize < 1) {
        query.pageSize = 1;
      }
    }
    return query;
  }
}
