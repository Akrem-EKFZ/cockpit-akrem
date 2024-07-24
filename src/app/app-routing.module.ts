import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmScreenComponent } from './confirm-screen/confirm-screen.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SecondaryDataSharingComponent } from './secondary-data-sharing/secondary-data-sharing.component';
import { PrimaryDataSharingComponent } from './primary-data-sharing/primary-data-sharing.component';
import { InformationDataSharingComponent } from './information-data-sharing/information-data-sharing.component';
import { SyncConsentComponent } from './sync-consent/sync-consent.component';

const routes: Routes = [
  { path: '', redirectTo: '/confirm', pathMatch: 'full' },
  { path: 'confirm', component: ConfirmScreenComponent },
  { path: 'share', component: ShareScreenComponent },
  { path: 'firstStep', component: FirstStepComponent },
  { path: 'secondStep', component: SecondStepComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'secondaryDataSharing', component: SecondaryDataSharingComponent },
  { path: 'primaryDataSharing', component: PrimaryDataSharingComponent },
  { path: 'informationDataSharing', component: InformationDataSharingComponent },
  { path: 'syncConsent', component: SyncConsentComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }