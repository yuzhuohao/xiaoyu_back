import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Paging = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query;

    if (!query.page || query.page < 1) {
      query.page = 1;
    }

    if (!query.pageSize || query.pageSize < 1) {
      query.pageSize = 1;
    }

    return query;
  },
);
