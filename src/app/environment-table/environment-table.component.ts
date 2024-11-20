import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-environment-table',
  templateUrl: './environment-table.component.html',
  styleUrls: ['./environment-table.component.css']
})
export class EnvironmentTableComponent implements OnInit {
  @Input() environments: any;
  
  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  detailCellRendererParams: any = {
    detailGridOptions: {
      columnDefs: [
        { field: 'podName', headerName: 'Pod Name' },
        { field: 'status', headerName: 'Status' },
        { field: 'systemUsage', headerName: 'System Usage' },
        { field: 'memory', headerName: 'Memory' }
      ],
      defaultColDef: {
        flex: 1,
      },
    },
    getDetailRowData: (params: any) => {
      debugger;
      params.successCallback(params.data.pods);
    }
  }
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    masterDetail: true,
    detailCellRendererParams: {
      detailGridOptions: {
        columnDefs: [
          { field: 'podName', headerName: 'Pod Name' },
          { field: 'status', headerName: 'Status' },
          { field: 'systemUsage', headerName: 'System Usage' },
          { field: 'memory', headerName: 'Memory' }
        ],
        defaultColDef: {
          flex: 1,
        },
      },
      getDetailRowData: (params: any) => {
        debugger;
        params.successCallback(params.data.pods);
      }
    }
  };;

  ngOnInit() {
    this.columnDefs = [
      { field: 'environment', headerName: 'Environment' },
      { field: 'branchName', headerName: 'Branch' },
      { field: 'status', headerName: 'Status' }
    ];
    debugger;
    this.rowData = Object.entries(this.environments)
    .map(([env, data]: [string, any]) => ({
      environment: env,
      branchName: data.branchName,
      status: Object.values(data).every((pod: any) => pod.status === 'UP') ? 'UP' : 'DOWN',
      pods: Object.values(data)
    }))
    .filter(item => item.environment != "dependentServices");

console.log(this.rowData);

    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      masterDetail: true,
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: 'podName', headerName: 'Pod Name' },
            { field: 'status', headerName: 'Status' },
            { field: 'systemUsage', headerName: 'System Usage' },
            { field: 'memory', headerName: 'Memory' }
          ],
          defaultColDef: {
            flex: 1,
          },
        },
        getDetailRowData: (params: any) => {
          debugger;
          params.successCallback(params.data.pods);
        }
      }
    };
    
  }

  private calculateAverage(data: any, property: string): string {
    const values = Object.values(data)
      .filter((pod: any) => pod[property])
      .map((pod: any) => parseFloat(pod[property]));
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    return `${average.toFixed(2)}%`;
  }
}