import RegistrationForm, {UserPwdLoginFormFields} from "@/registration/RegistrationForm.tsx";
import {Box, Container, Typography} from "@mui/material";
import {useState} from "react";

const RegistrationPage = () => {

    const [message, setMessage] = useState<string>("");

    const registrationHandler = (fields: UserPwdLoginFormFields) => {
        fetch("/api/register", {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(fields)
        }).then((response) => {
            if (response.ok) {
                setMessage('Benutzer:in wurde erfolgreich registriert');
            }
        });
    }

    return <Container>
        <RegistrationForm  onAction={registrationHandler}/>
        <Box mt="1rem" mb="1rem">
            <Typography align={'inherit'} component="p" color={'primary'}>
                {message}
            </Typography>
        </Box>
    </Container>
}

export default RegistrationPage;