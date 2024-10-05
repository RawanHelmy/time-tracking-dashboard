import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
})
export class ReportCardComponent implements OnInit {
  @Output() setProductList = new EventEmitter<number>();
  timeStamps = [
    {
      value: 3,
      label: 'Daily',
    },
    {
      value: 10,
      label: 'Weekly',
    },
    {
      value: 15,
      label: 'Monthly',
    },
  ];
  selectedStamp: number = 10;
  ngOnInit(): void {
    this.setProductList.emit(10);
  }
  setTimeStamp(value: number): void {
    this.selectedStamp = value;
    this.setProductList.emit(value);
  }
}
