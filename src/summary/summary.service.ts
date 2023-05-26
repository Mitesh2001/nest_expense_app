import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/Data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {

    constructor(private readonly reportSerive : ReportService){}

    
    calculateSummary = () => {

        const totalExpense = this.reportSerive.getAllReports(ReportType.EXPENCE).reduce((sum, report) => sum + report.amount ,0);
        const totalIncome = this.reportSerive.getAllReports(ReportType.INCOME).reduce((sum, report) => sum + report.amount ,0);

        return {
            totalIncome,
            totalExpense,
            newIncome : totalIncome - totalExpense
        }
    }

}
