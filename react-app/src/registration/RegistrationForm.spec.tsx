import {render, screen} from "@testing-library/react";
import RegistrationForm from "@/registration/RegistrationForm.tsx";
import {when} from 'jest-when';

import userEvent from '@testing-library/user-event';

describe('Registration', () => {
    test('register successfully', async () => {
        const submitHandler = jest.fn();
        when(submitHandler)
            .expectCalledWith(
                expect.objectContaining({
                    email: 'hans.sowa@polygons.at',
                    password: 'G1234%&',
                }),
                expect.anything(),
            )
            .mockReturnValueOnce(undefined);

        render(<RegistrationForm onAction={submitHandler}/>);

        await userEvent.type(screen.getByLabelText('E-Mail'), 'hans.sowa@polygons.at');
        await userEvent.type(screen.getByLabelText('Password'), 'gG1234%&');
        await userEvent.click(screen.getByLabelText('Registrieren'));
    });
});