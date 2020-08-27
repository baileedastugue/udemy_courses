abstract class Department  {
  static fiscalYear = 2020; 

  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  abstract describe(this: Department): void;  

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;    
  }
  describe () {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; 

  get mostRecentReport () {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error ('Please pass in a valid value plz');  
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
    console.log(Department.fiscalYear); 
  }

  static getInstance () {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment ('d3', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Bailee') {
      return
    }
    this.employees.push(name); 
  }  
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear );

// const accounting = new AccountingDepartment('d1', []);

const accounting = AccountingDepartment.getInstance();
// accounting.addEmployee('Bailee');
// accounting.addEmployee('Max');
// accounting.addEmployee('Jack');

// accounting.printEmployeeInfo();

accounting.describe();

// access it like a normal property
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);

// accounting.addReport('Oh no we have no money :-(');
// accounting.getReports();
// console.log(accounting)

const it = new ITDepartment('d1', ['Bailee'])
it.describe();

// const accounting = new Department('d1', 'Accounting');
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe};

// console.log(accounting);

// accountingCopy.describe();

// accounting.sales();
// accounting.describe();

// accounting.addEmployee('Bailee');
// accounting.addEmployee('Jack');
// accounting.printEmployeeInfo();

// want to avoid this when using classes
// accounting.employees[2] ='Max';