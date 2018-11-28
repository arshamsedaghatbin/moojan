import { NgModule } from '@angular/core';

import { MoojanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MoojanSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MoojanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MoojanSharedCommonModule {}
