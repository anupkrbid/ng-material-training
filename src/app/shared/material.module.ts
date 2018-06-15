import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule {}
