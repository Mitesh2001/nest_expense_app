import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { ReportType } from "./Data";
import { AppService } from './app.service';
import { CreateReportDto } from "./dtos/report.dto";

@Controller('report/:type')

export class AppController {

  constructor (
    private readonly appService : AppService
  ) {}

  @Get()
  getAllReports(@Param('type',new ParseEnumPipe(ReportType)) type : string) {    
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE
    return this.appService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById (@Param('id',ParseUUIDPipe) id :string, @Param('type', new ParseEnumPipe(ReportType)) type : string ) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.appService.getReportById(reportType,id)
  }

  @Post()
  createReport(
    @Body() {amount, source} : CreateReportDto,
    @Param('type') type : string
  ) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.appService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Param('id',ParseUUIDPipe) id : string,
    @Param('type',new ParseEnumPipe(ReportType)) type : string,
    @Body() body : {
      amount : number;
      source : string
    },
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.appService.updateReport(reportType,id,body);

  }

  @Delete(':id')
  deleteReport(
    @Param('id',ParseUUIDPipe) id : string,
    @Param('type',new ParseEnumPipe(ReportType)) type : string,
  ){
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
    return this.appService.deleteReport(reportType,id);
  }
  
}