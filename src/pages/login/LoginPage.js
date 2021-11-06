import './LoginPage.css';
import {AuthTemplate} from '../../components/templates';
import {Link} from 'react-router-dom';
import {AuthForm} from "../../components/containers/AuthForm/AuthForm";
import {firebaseApp} from "../../api/v1/firebase/firebase";

const onSubmit = (email, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
}

export const LoginPage = () => {
    return <AuthTemplate link={<Link to="sign-up">У вас нет аккаунта? Зарегистрируйтесь.</Link>}>
        <AuthForm title="Авторизация" submitButtonTitle="Войти" onSubmit={onSubmit}/>
    </AuthTemplate>
}


