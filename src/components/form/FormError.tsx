import React, {memo} from 'react';

import {FormErrorProps} from '../../types/components';

function FormError ({ errors }: FormErrorProps) {
    console.log('form error rendered!');

    return (
        <>
            {errors.map((error, i) => (
                <span key={i} className={'block text-red'}>{error}</span>
            ))}
        </>
    )
}

export default memo(FormError, (prevProps, nextProps) => {
    return prevProps.errors.length === nextProps.errors.length;
});
