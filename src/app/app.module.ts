import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AreaService } from './services/division.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictShowComponent } from './district-show/district-show.component';
import { DivisionShowComponent } from './division-show/division-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule,MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
} from '@angular/material';
import { DisasterService } from './services/disaster.service';
import { DisasterShowComponent } from './disaster-show/disaster-show.component';
import { DisasterCreateComponent } from './disaster-create/disaster-create.component';
import { UpazillaShowComponent } from './upazilla-show/upazilla-show.component';
import { UnionShowComponent } from './union-show/union-show.component';
import { UpazillaCreateComponent } from './upazilla-create/upazilla-create.component';
import { DivisionUpdateComponent } from './division-update/division-update.component';
import { UnionCreateComponent } from './union-create/union-create.component';
import { UpazillaUpdateComponent } from './upazilla-update/upazilla-update.component';
import { HomeComponent } from './home/home.component';
import { UnionUpdateComponent } from './union-update/union-update.component';
import { OrganizationShowComponent } from './organization-show/organization-show.component';
import { DistrictCreateComponent } from './district-create/district-create.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationUpdateComponent } from './organization-update/organization-update.component';
import { ReliefRecordCreateComponent } from './relief-record-create/relief-record-create.component';
import { ReliefRecordShowComponent } from './relief-record-show/relief-record-show.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NavarComponentComponent } from './navar-component/navar-component.component';
import { DistrictUpadateComponent } from './district-upadate/district-upadate.component';
import { DisasterUpdateComponent } from './disaster-update/disaster-update.component';
import { OrganizationService } from './services/organization.service';
import { ReliefService } from './services/relief.serivice';
import { AuthService } from './services/auth.service';
import { UsernameValidators } from './signup/signup.validators';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { LoginAuthGuard } from './services/login-auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
      {path: 'division/show', component: DivisionShowComponent},
      {path: 'division/add',
       component: DivisionCreateComponent,
       canActivate: [AuthGuard]
      },
      {path: 'division/update/:divisionId', component: DivisionUpdateComponent,
      canActivate: [AdminAuthGuard]
        },
      {path: 'district/show', component: DistrictShowComponent},
      {path: 'district/add', component: DistrictCreateComponent},
      {path: 'district/update/:districtId', component:DistrictUpadateComponent,canActivate:
         [AdminAuthGuard] },

      {path: 'upazilla/show', component: UpazillaShowComponent},
      {path: 'union/add', component: UnionCreateComponent},
      {path: 'upazilla/update/:upazillaId', component:UpazillaUpdateComponent,
       canActivate: [AdminAuthGuard] },

      {path: 'union/show', component: UnionShowComponent},
      {path: 'upazilla/add', component: UpazillaCreateComponent},
      {path: 'union/update/:unionId', component:UnionUpdateComponent,
       canActivate: [AdminAuthGuard] },

      {path: 'disaster/add', component: DisasterCreateComponent},
      {path: 'disaster/show', component: DisasterShowComponent},
      {path: 'disaster/update/:disasterId', component: DisasterUpdateComponent},

      {path: 'organization/add', component: OrganizationCreateComponent},
      {path: 'organization/show', component: OrganizationShowComponent},
      {path: 'organization/update/:orgId', component: OrganizationUpdateComponent},
      {path: 'relief/add', component: ReliefRecordCreateComponent},
      {path: 'relief/show', component: ReliefRecordShowComponent},
      {path: 'login', component: LoginComponent,canActivate: [LoginAuthGuard]},
      {path:'signup',component:SignupComponent},
      {path: 'no-access',component: NoAccessComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DivisionCreateComponent,
    DivisionShowComponent,
    DistrictShowComponent,
    DistrictCreateComponent,
    UpazillaShowComponent,
    UnionShowComponent,
    UpazillaCreateComponent,
    DivisionUpdateComponent,
    DistrictUpadateComponent,
    UnionCreateComponent,
    UpazillaUpdateComponent,
    UnionUpdateComponent,
    HomeComponent,
    DisasterCreateComponent,
    DisasterShowComponent,
    DisasterUpdateComponent,
    OrganizationCreateComponent,
    OrganizationShowComponent,
    OrganizationUpdateComponent,
    ReliefRecordCreateComponent,
    NavarComponentComponent,
    SignupComponent,
    LoginComponent,
    NoAccessComponent,
    ReliefRecordShowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [AreaService, DisasterService, OrganizationService,ReliefService,
    AuthService, UsernameValidators,AuthGuard,LoginAuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
