import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatButton } from '@angular/material/button';
import { RouterModule, Routes, Router } from '@angular/router';
import { ConsolesComponent } from './consoles/consoles.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeudetailComponent } from './jeudetail/jeudetail.component';
import { ConsoledetailComponent } from './consoledetail/consoledetail.component';
import { AddjeudialogComponent } from './addjeudialog/addjeudialog.component';
import { FormsModule } from '@angular/forms';
import { AddconsoledialogComponent } from './addconsoledialog/addconsoledialog.component';
import { HttpClientModule } from '@angular/common/http';
import { EditconsoledialogComponent } from './editconsoledialog/editconsoledialog.component';
import { EditjeudialogComponent } from './editjeudialog/editjeudialog.component';
import { ParseBoolPipe } from './parse-bool.pipe';
import { YesnodialogComponent } from './yesnodialog/yesnodialog.component';




const appRoutes: Routes = [
  { path: 'jeux', component: JeuxComponent },
  { path: 'consoles', component: ConsolesComponent },
  { path: 'jeux/:id', component: ConsolesComponent },
  { path: 'consoles', component: ConsolesComponent },
  { path: '**', component: JeuxComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JeuxComponent,
    ConsolesComponent,
    JeudetailComponent,
    ConsoledetailComponent,
    AddjeudialogComponent,
    AddconsoledialogComponent,
    EditconsoledialogComponent,
    EditjeudialogComponent,
    ParseBoolPipe,
    YesnodialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
  ],
  entryComponents: [
    AddjeudialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
