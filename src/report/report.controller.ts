import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { ReportType } from "src/Data";
import { CreateReportDto, ReportResponseDto } from "src/dtos/report.dto";
import { ReportService } from "./report.service";

@Controller('report/:type')

export class ReportController {

  constructor (
    private readonly reportService : ReportService
  ) {}

  @Get()
  getAllReports(@Param('type',new ParseEnumPipe(ReportType)) type : string) : ReportResponseDto[] {    
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE
    return this.reportService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById (@Param('id',ParseUUIDPipe) id :string, @Param('type', new ParseEnumPipe(ReportType)) type : string ) : ReportResponseDto {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.reportService.getReportById(reportType,id)
  }

  @Post()
  createReport(
    @Body() {amount, source} : CreateReportDto,
    @Param('type') type : string
  ) : ReportResponseDto {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.reportService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Param('id',ParseUUIDPipe) id : string,
    @Param('type',new ParseEnumPipe(ReportType)) type : string,
    @Body() body : {
      amount : number;
      source : string
    },
  ) : ReportResponseDto{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.reportService.updateReport(reportType,id,body);
  }

  @Delete(':id')
  deleteReport(
    @Param('id',ParseUUIDPipe) id : string,
    @Param('type',new ParseEnumPipe(ReportType)) type : string,
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.reportService.deleteReport(reportType,id);
  }
  
}