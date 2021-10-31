import './DefaultGist.css';
import {Stack} from "@mui/material";
import {Item} from "../../presentations/Item/Item";
import {getGists, gistSelector} from "../../../store/gists";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export function DefaultGist() {

    const dispatch = useDispatch();
    const {gistError, gistPending, gists} = useSelector(gistSelector);

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists());
        }
    }, [dispatch, gists])


    if (gistPending) {
        return <h1>Pending in progress ...</h1>
    }

    if (gistError) {
        return <h1>Error get data ...</h1>
    }

    return (
        <>
            <Stack style={{height: '40vh', overflowX: 'auto'}}>
                <h3>Default gist data</h3>
                {gists?.map(gist => <h5 key={gist.url}>{gist.url}</h5>)}
                <Item>
                    <button onClick={() => dispatch(getGists(1))}>1</button>
                    <button onClick={() => dispatch(getGists(2))}>2</button>
                    <button onClick={() => dispatch(getGists(3))}>3</button>
                </Item>
            </Stack>
        </>
    )
}