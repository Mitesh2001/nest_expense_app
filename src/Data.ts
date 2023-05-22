export interface Data {
    report : {
        id : string,
        source : string,
        amount : number,
        created_at : Date,
        updated_at : Date,
        type : ReportType
    } []
}

enum ReportType  {
    INCOME = 1,
    EXPENCE = 2
}

const data : Data = {
    report : [{
        id : "uuid",
        source :  "Salary",
        amount : 7500,
        created_at : new Date(),
        updated_at : new Date(),
        type : 1
    }]
}

data.report.push({
    id : "uuid",
    source :  "Salary",
    amount : 7500,
    created_at : new Date(),
    updated_at : new Date(),
    type : 2
});