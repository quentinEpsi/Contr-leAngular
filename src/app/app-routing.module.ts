import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login/login.component";
import { ChannelComponent } from "./channel/channel/channel.component";



const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch:'prefix'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'tchat',
        component: ChannelComponent,

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }