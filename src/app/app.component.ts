import { Component, inject, OnInit } from '@angular/core';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ExpandCollapseComponent } from './components/expand-collapse/expand-collapse.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { SearchComponent } from './components/search/search.component';
import { fileFormats } from './data/states';
import { NotificationComponent } from './components/notification/notification.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LangTranslateComponent } from "./components/lang-translate/lang-translate.component";
import { CommonAlertComponent } from './common/common-alert/common-alert.component';
import { CommonCardComponent } from './common/common-card/common-card.component';
import { CommonModule } from '@angular/common';
import { TableService } from './services/table.service';
import { CommonTableComponent } from './common/table/common-table/common-table.component';
import { InformationLinksComponent } from './components/information-links/information-links.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { MeetingsComponent } from './components/meetings/meetings.component';

const data = [
  {
    id: 1,
    title: "5",
    subtitle: "Comments",
  },
  {
    id: 2,
    title: "4",
    subtitle: "Due To Revalidation",
  },
  {
    id: 3,
    title: "6",
    subtitle: "Fines",
  },
  {
    id: 4,
    title: "9",
    subtitle: "Payments",
  },
  {
    id: 5,
    title: "6",
    subtitle: "Fines",
  }
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadComponent, PdfComponent, InformationLinksComponent, ExpandCollapseComponent, TypeAheadComponent, SearchComponent, NotificationComponent, NgbNavModule,
    LangTranslateComponent, ApplicationStatusComponent, BookmarksComponent, StatusIndicatorComponent, MeetingsComponent,CommonTableComponent,CommonCardComponent,CommonAlertComponent,CommonModule],
  providers: [TableService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'enoc';
  file_formats = fileFormats;
  active = "file-upload";
  cardData: any[] = []
  customTableData: [] = []

  custTableData = inject(TableService)

  onFilesChanged(files: File[]): void {
    console.log('Uploaded files:', files);
  }

  ngOnInit(): void {
    this.cardData = data
    this.getCustomTableData()
  }

  getCustomTableData() {
    this.custTableData.getTableData().subscribe((res) => {
      this.customTableData = res
      console.log(res)
    })
  }
}
