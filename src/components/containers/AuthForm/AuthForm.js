import {makeStyles} from "@material-ui/core/styles";
import {Button, Input} from "@mui/material";
import {useState} from "react";

export const AuthForm = ({title, onSubmit, submitButtonTitle}) => {
    const styles = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async () => {
        try {
            if (email && password) {
                await onSubmit(email, password);
            }
        } catch (e) {
            console.log("auth error", e);
        }
    }
    return (
        <div className={styles.root}>
            <h1>{title}</h1>
            <Input placeholder="Email"
                   fullWidth
                   className={styles.input}
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   autoComplete="new-password"/>
            <Input placeholder="Password"
                   fullWidth
                   className={styles.input}
                   type="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   autoComplete="new-password"/>
            <Button variant="text" onClick={handleSubmit} fullWidth>{submitButtonTitle}</Button>
        </div>
    )

}

const useStyles = makeStyles((theme) => {
    return {
        input: {
            color: "#9a9fa1",
            padding: "10px 15px",
            fontSize: "15px",
            marginBottom: 15,
        },
        root: {
            "& h1": {
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 50,
            }
        }
    }
})