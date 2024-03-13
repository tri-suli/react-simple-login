import React, {useCallback, useEffect, useState} from 'react';

import Email from './input/Email';
import Password from './input/Password';
import {FormValue} from '../../types/components';
import * as api from '../../services/api';
import * as validator from '../../utils/validator';

function LoginForm () {
    const [email, setEmail] = useState<FormValue<string>>({
        value: '',
        valid: false,
        errors: []
    });
    const [password, setPassword] = useState<FormValue<string>>({
        value: '',
        valid: false,
        errors: []
    });
    const [canSubmit, setCanSubmit] = useState<boolean>(false);

    const handlePasswordChange = useCallback(
        (value: string) => {
            if (validator.isEmpty(value)) {
                setPassword({
                    value,
                    valid: false,
                    errors: ['The password field is required']
                })
            } else {
                setPassword({ value, valid: true, errors: [] });
            }
        },
        [password]
    );

    const handleEmailChange = useCallback(
        (value: string) => {
            const errors: string[] = [];

            if (validator.isEmpty(value)) {
                errors.push('The email field is required!');
            }

            if (! validator.isEmail(value)) {
                errors.push('The email field is invalid!');
            }

            setEmail({ value, valid: !errors.length, errors });
        },
        [email]
    );

    const handleSubmit = async () => {
        const loggedIn = await api.login(email.value, password.value);

        if (loggedIn) {
            alert('Login Success!');

            const input = { value: '', valid: false, errors: [] };
            setEmail(input);
            setPassword(input);
        } else {
            alert('Invalid credential!');
        }
    }

    useEffect(() => {
        setCanSubmit(email.valid && password.valid);
    }, [email, password]);

    return (
        <form data-testid={'loginForm'} action="" noValidate>
            <Email value={email.value} errors={email.errors} handleOnChange={handleEmailChange} />
            <Password value={password.value} errors={password.errors} handleOnChange={handlePasswordChange} />
            <div className="action">
                <button type={'button'} className="submit" onClick={handleSubmit}
                        disabled={!canSubmit}>{'Login'}</button>
            </div>
        </form>
    );
}

export default LoginForm;