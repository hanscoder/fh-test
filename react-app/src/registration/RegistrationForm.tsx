export type UserPwdLoginFormFields = {
    email: string;
    password: string;
};


interface RegistrationFormProps {
    onAction?: (fields: UserPwdLoginFormFields) => void;
}

const RegistrationForm = ({onAction}: RegistrationFormProps) => {
    return <>FormComponente</>
}

export default RegistrationForm;