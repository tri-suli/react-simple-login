import React, {memo} from 'react';

import {InputTextProps} from "../../../types/components";
import FormError from '../FormError';

function Password ({ name = 'password', value, errors, handleOnChange }: InputTextProps) {
    return (
        <div className="input-container">
            <label htmlFor="password">{'Password'}</label>
            <input id={'password'} type="password" name={name} value={value} onChange={e => handleOnChange(e.target.value)} data-testid={'password-node'} />
            {errors?.length ? <FormError errors={errors} /> : ''}
        </div>
    );
}

export default memo(Password);