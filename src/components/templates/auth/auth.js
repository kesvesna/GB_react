import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {firebaseApp} from "../../../api/v1/firebase/firebase";
import {sessionSelector, onAuthStateChanged} from "../../../store/session";
import {useDispatch, useSelector} from "react-redux";

export const AuthTemplate = ({children, link}) => {
    const styles = useStyles();

    const session = useSelector(sessionSelector);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(onAuthStateChanged());
    },[dispatch])

    return (
        <div className={styles.wrapper}>
            {children}
            <div className={styles.link}>{link}</div>
        </div>
    )

}

const useStyles = makeStyles((theme) => {
    return {
        link: {
            display: "flex",
            justifyContent: "center",
            marginTop: 30,
            color: "#000"
        },
        wrapper: {
            width: 500,
            margin: "0 auto",
            marginTop: "10%",
        },
    }
})