import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { Route } from '@angular/router';
import { ComponentRegistryService } from '@vendure/admin-ui/core';
import { ElementType } from 'react';
import { ReactFormInputComponent } from './components/react-form-input.component';
import { ReactRouteComponent, ROUTE_COMPONENT_OPTIONS } from './components/react-route.component';

export function registerReactFormInputComponent(id: string, component: ElementType): FactoryProvider {
    return {
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: (registry: ComponentRegistryService) => () => {
            registry.registerInputComponent(id, ReactFormInputComponent, { component });
        },
        deps: [ComponentRegistryService],
    };
}

export function registerReactRouteComponent(options: {
    component: ElementType;
    title?: string;
    breadcrumb?: string;
    path?: string;
    props?: Record<string, any>;
    routeConfig?: Route;
}): Route {
    return {
        path: options.path ?? '',
        providers: [
            {
                provide: ROUTE_COMPONENT_OPTIONS,
                useValue: {
                    component: options.component,
                    title: options.title,
                    props: options.props,
                },
            },
            ...(options.routeConfig?.providers ?? []),
        ],
        data: {
            breadcrumb: options.breadcrumb,
            ...(options.routeConfig?.data ?? {}),
        },
        ...(options.routeConfig ?? {}),
        component: ReactRouteComponent,
    };
}