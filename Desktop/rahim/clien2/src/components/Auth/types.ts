

export type ProfileProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
}

export type SignupProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
    signUp: ()=> void;
}

export type ConfirmSignUpProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
    confirmSignUp: ()=> void;
}

export type SignInProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
    signIn: ()=> void;
}

export type ForgotPasswordProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
    forgotPassword: ()=> void;
}


export type ForgotPasswordSubmitProps = {
    setUiState: React.Dispatch<React.SetStateAction<string | null>>;
    onChange: (e:any) =>void;
    forgotPasswordSubmit: ()=> void;
}

