import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatSliderModule, MatSidenavModule} from "@angular/material";
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MatToolbarModule,
    TranslateModule
  ]
})
export class SharedModule {
}
