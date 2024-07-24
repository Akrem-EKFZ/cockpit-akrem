import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmScreenComponent } from './confirm-screen/confirm-screen.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondaryDataSharingComponent } from './secondary-data-sharing/secondary-data-sharing.component';
import { PrimaryDataSharingComponent } from './primary-data-sharing/primary-data-sharing.component';
import { InformationDataSharingComponent } from './information-data-sharing/information-data-sharing.component';
import { SyncConsentComponent } from './sync-consent/sync-consent.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmScreenComponent,
    ShareScreenComponent,
    FirstStepComponent,
    SecondStepComponent,
    CreateAccountComponent,
    SecondaryDataSharingComponent,
    PrimaryDataSharingComponent,
    InformationDataSharingComponent,
    SyncConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
