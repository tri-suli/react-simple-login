import React, {memo} from 'react';

import {InputTextProps} from '../../../types/components';
import FormError from '../FormError';

function Email ({ name = 'email', value, errors = [], handleOnChange }: InputTextProps) {
    return (
        <div className="input-container">
            <label htmlFor="email">{'Email'}</label>
            <input id={'email'} type="email" name={name} value={value} onChange={e => handleOnChange(e.target.value)} />
            {errors?.length ? <FormError errors={errors} /> : ''}
        </div>
    );
}

export default memo(Email);
