import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {
        path: 'feed',
    loadChildren: () => 
    import('../Pages/feed/feed.module').then( 
      m => m.FeedPageModule
      )
    },
    {
      path: 'notification',
  loadChildren: () => 
  import('../Pages/notification/notification.module').then( 
    m => m.NotificationPageModule
    )
  
  
   },
   {
    path: 'message',
loadChildren: () => 
import('../Pages/messages/messages.module').then( 
  m => m.MessagesPageModule
  )


 },
 {
  path: 'setting',
loadChildren: () => 
import('../Pages/setting/setting.module').then( 
m => m.SettingPageModule
)


},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
