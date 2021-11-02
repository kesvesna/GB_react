import './SignUpPage.css';
import { AuthTemplate } from '../../components/templates';
import { Link } from 'react-router-dom';
import {AuthForm} from "../../components/containers/AuthForm/AuthForm";
import {firebaseApp} from "../../api/v1/firebase/firebase";

const onSubmit = (email, password) => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
}

export const SignUpPage = () => {
    return <AuthTemplate link={<Link to="login">У вас есть аккаунт? Войдите.</Link>}>
        <AuthForm title="Регистрация" submitButtonTitle="Зарегистрироваться" onSubmit={onSubmit}/>
    </AuthTemplate>
}


