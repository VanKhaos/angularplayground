import { NgModule } from '@angular/core';
import { SwirlComponentsModule } from '@getflip/swirl-components-angular/dist/component-library';
import { defineCustomElements } from '@getflip/swirl-components/loader';

defineCustomElements();

@NgModule({
  imports: [SwirlComponentsModule],
})
export class SwirlModule { }
