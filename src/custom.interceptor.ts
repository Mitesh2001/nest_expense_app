import { NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";

class CustomInterceptor implements NestInterceptor {
    intercept(
        context : ExecutionContext,
        handler : CallHandler
    ) {
        return handler.handle().pipe({
            
        }) ;
    }

}