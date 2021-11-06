import './Route.css';
import {Route, Redirect} from 'react-router-dom';

export function PublicRoute({isAuth, to = "/login", ...rest}) {
    console.log('Public route isAuth =', isAuth, ', redirect to', to);
    return !isAuth ? <Route {...rest}/> : <Redirect to={to}/>
}

export function PrivateRoute({isAuth, to = "/", ...rest}) {
    console.log('Private route isAuth =', isAuth, ', redirect to', to);
    return isAuth ? <Route {...rest}/> : <Redirect to={to}/>
}



