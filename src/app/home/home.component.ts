import { Component } from '@angular/core';
import { GridPreferencesService } from 'cxone-client-services-platform';
import {
  ColDef,
  ColumnResizedEvent,
  GridApi,
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  RowDragEndEvent,
  RowDragEnterEvent,
  RowDragLeaveEvent,
  SelectionChangedEvent
} from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pagination = true;
  private gridPreferencesService: GridPreferencesService;
  public gridApi!: GridApi;
  public headerNamesWithDrag!: ColDef[];
  dataRowWithDragAll!: any[];
  public gridOptionsDrag!: GridOptions;
  public gridApiDrag!: GridApi;
  public changedPolicies = [];
  public context: any;
  pageSize!: number;

  constructor() {
    this.gridPreferencesService = GridPreferencesService.instance;
    this.grid1Sort = this.gridPreferencesService.getGridSort('grid1');
    this.grid1State = this.gridPreferencesService.getGridState('grid1');
  }

  grid1Sort: unknown;
  grid1State: unknown;

  ngOnInit() {
    this.pageSize = 6;

    this.headerNamesWithDrag = [
      {
        headerName: '',
        headerCheckboxSelection: true,
        checkboxSelection: true,
        maxWidth: 44,
        minWidth: 42,
        headerClass: 'checkbox-class',
        cellClass: 'checkbox-class',
        suppressSizeToFit: true
      },
      {
        headerName: 'type',
        field: 'type',
        width: 80,
        lockPinned: true,
        suppressSizeToFit: true,
      },
      {
        headerName: 'PRIORITY',
        field: 'priority',
        lockPinned: true,
        suppressSizeToFit: true,
        tooltipField: 'priority',
        filter: 'agSetColumnFilter'
      },
      {
        headerName: 'TYPE',
        field: 'actionType',
        lockPinned: true,
        suppressSizeToFit: true,
        tooltipField: 'actionType'
      },
      {
        headerName: 'POLICY NAME',
        field: 'policyName',
        lockPinned: true,
        suppressSizeToFit: true,
        tooltipField: 'policyName'
      },
      {
        headerName: 'FROM',
        field: 'from',
        lockPinned: true,
        suppressSizeToFit: true,
        tooltipField: 'from'
      },
      {
        headerName: 'TO',
        field: 'to',
        lockPinned: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'LAST MODIFIED',
        field: 'lastModified',
        lockPinned: true,
        suppressSizeToFit: true,
        tooltipField: 'lastModified'
      },
      {
        headerName: 'STATUS',
        field: 'status',
        suppressSizeToFit: true,
        lockPinned: true
      },
      {
        headerName: 'ACTIONS',
        field: 'actions',
        suppressSizeToFit: true,
        lockPinned: true
      },
      {
        headerName: 'REASON',
        field: 'actionReason',
        pinned: 'right',
        width: 130,
        suppressSizeToFit: true,
        resizable: false
      }
    ];

    const dataRowWithDragAllData = [
      {
        policyID: 486,
        policyName: 'Rule ABigLongtextExampleHereItIsABigLongtextExampleHereItIsABigLongtextExampleHereItIs',
        priority: 'P1',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:01.507',
        status: 'Draft',
        actionReason: 'My Reason',
        actionType: 'Extend 1'
      },
      {
        policyID: 487,
        priority: 'P2',
        policyName: 'Rule 2 qwertyuiokjhgfdsdf dfghjkjhgfd sdfghjhgfdfgh',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:09.940',
        status: 'Active',
        actionReason: 'My Reason',
        actionType: 'Extend 2'
      },
      {
        policyID: 488,
        priority: 'P3',
        policyName: 'Rule 3 Rule 2 qwertyuiokjhgfdsdf dfghjkjhgfd sdfghjhgfdfgh',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:33.363',
        status: 'Expired',
        actionReason: 'My Reason',
        actionType: 'Extend 3'
      },
      {
        policyID: 489,
        priority: 'P4',
        policyName: 'Rule 4 Rule 2 qwertyuiokjhgfdsdf dfghjkjhgfd sdfghjhgfdfgh',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T12:49:12.090',
        status: 'Failed',
        actionReason: 'My Reason',
        actionType: 'Extend 4'
      },
      {
        policyID: 490,
        priority: 'P5',
        policyName: 'Rule 5',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T12:49:54.077',
        status: 'New',
        actionReason: 'My Reason',
        actionType: 'Extend 6'
      },
      {
        policyID: 491,
        policyName: 'Rule 6',
        priority: 'P6',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:01.507',
        status: 'Running',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 492,
        priority: 'P7',
        policyName: 'Rule 7',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:09.940',
        status: 'Pending',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 493,
        policyName: 'Rule 8',
        priority: 'P8',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:01.507',
        status: 'Draft',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 494,
        priority: 'P9',
        policyName: 'Rule 9',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:09.940',
        status: 'Active',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 495,
        priority: 'P10',
        policyName: 'Rule 10',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:33.363',
        status: 'Expired',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 496,
        priority: 'P11',
        policyName: 'Rule 11',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T12:49:12.090',
        status: 'Failed',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 497,
        priority: 'P12',
        policyName: 'Rule 12',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T12:49:54.077',
        status: 'New',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 498,
        policyName: 'Rule 13',
        priority: 'P13',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:01.507',
        status: 'Running',
        actionReason: 'My Reason',
        actionType: 'Extend'
      },
      {
        policyID: 499,
        priority: 'P14',
        policyName: 'Rule 14',
        from: '2017-04-03T12:15:57.361',
        to: '2017-04-03T12:15:57.362',
        lastModified: '2017-05-10T10:34:09.940',
        status: 'Pending',
        actionReason: 'My Reason',
        actionType: 'Extend'
      }
    ];

    this.dataRowWithDragAll = structuredClone(dataRowWithDragAllData);

    this.gridOptionsDrag = {
      rowSelection: 'multiple',
      rowDragManaged: true,
      debug: true,
      onGridReady: this.onGridDragReady.bind(this),
      onSelectionChanged: this.onSelectionChanged,
      onColumnResized: this.onColumnResized,
      context: this
    };
  }

  private onGridDragReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApiDrag = params.api;
    return this.gridApiDrag.sizeColumnsToFit();
  }

  public onSelectionChanged(event: SelectionChangedEvent) {
    const selectedRows = this.context.gridApi.getSelectedRows();
    console.log(event);
    console.log(selectedRows);
  }

  public onColumnResized(event: ColumnResizedEvent) {
    if (event && event.column && event.finished && event.source === 'uiColumnDragged') {
      console.log(event);
      event.api.sizeColumnsToFit();
    }
  }

  public onGridSizeChanged(params: GridSizeChangedEvent): void {
    params.api.sizeColumnsToFit();
  }

  onRowDragEnter(event: RowDragEnterEvent) {
    console.log('event type 1');
    this.context.addChangedPolicy(event.node.data.policyID);
  }

  onRowDragEnd(event: RowDragEndEvent) {
    console.log(event);
    const params = {
      columns: ['priority'],
      force: false
    };
    this.context.gridApiDrag.refreshCells(params);
  }

  addChangedPolicy(policyID: never) {
    this.changedPolicies.push(policyID);
  }

  onRowDragLeave(e: RowDragLeaveEvent) {
    console.log('onRowDragLeave', e);
  }

  onSaveSortHandler() {
    console.log('Grid sort changed...');
  }

  saveGrid1Sort($event: Event) {
    this.gridPreferencesService.saveGridSort('grid1', $event);
  }

  saveGrid1State($event: Event) {
    this.gridPreferencesService.saveGridState('grid1', $event);
  }

}
