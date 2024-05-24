import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";

export type UserPwdLoginFormFields = {
    email: string;
    password: string;
};


interface RegistrationFormProps {
    onAction: (fields: UserPwdLoginFormFields) => void;
}

const RegistrationForm = ({onAction}: RegistrationFormProps) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: onAction,
    });

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="E-Mail"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                Registrieren
            </Button>
        </form>
    </div>
}

export default RegistrationForm;