import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomField, FormInputComponent, INPUT_COMPONENT_OPTIONS } from '@vendure/admin-ui/core';
import { ReactComponentHostDirective } from '../react-component-host.directive';
import { ReactFormInputProps } from '../types';

@Component({
    selector: 'vdr-react-form-input-component',
    template: ` <div [vdrReactComponentHost]="reactComponent" [props]="props"></div> `,
    standalone: true,
    imports: [ReactComponentHostDirective],
})
export class ReactFormInputComponent implements FormInputComponent, OnInit {
    static readonly id: string = 'react-form-input-component';
    readonly: boolean;
    formControl: FormControl;
    config: CustomField & Record<string, any>;

    protected props: ReactFormInputProps;

    protected reactComponent = inject(INPUT_COMPONENT_OPTIONS).component;

    ngOnInit() {
        this.props = {
            formControl: this.formControl,
            readonly: this.readonly,
            config: this.config,
        };
    }
}