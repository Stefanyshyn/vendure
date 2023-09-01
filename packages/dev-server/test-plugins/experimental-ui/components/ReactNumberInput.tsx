import { NotificationService } from '@vendure/admin-ui/core';
import { useFormControl, ReactFormInputProps, useInjector } from '@vendure/admin-ui/react';
import React from 'react';

export function ReactNumberInput({ readonly }: ReactFormInputProps) {
    const { value, setFormValue } = useFormControl();
    const notificationService = useInjector(NotificationService);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = +(e.target as any).value;
        if (val === 0) {
            notificationService.error('Cannot be zero');
        } else {
            setFormValue(val);
        }
    };
    return (
        <div>
            This is a React component!
            <input readOnly={readonly} type="number" onChange={handleChange} value={value} />
        </div>
    );
}