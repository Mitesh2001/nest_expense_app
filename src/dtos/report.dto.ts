import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";
import { ReportType } from "src/Data";
import { Exclude, Expose } from "class-transformer";

export class CreateReportDto {
    
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    amount : number;

    @IsString()
    @IsNotEmpty()
    source : string;
}

export class UpdateReportDto {
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    amount : number;

    @IsString()
    @IsOptional()
    source : string;
}

export class ReportResponseDto {
    id : string;
    source : string;
    amount : number;
    
    @Expose({name : 'createdAt'})
    transformCreatedAt =() => this.created_at

    @Exclude()
    created_at : Date;

    @Exclude()
    updated_at : Date;
    
    type : ReportType


    constructor(partial: Partial <ReportResponseDto>){
        Object.assign(this, partial)
    }
}