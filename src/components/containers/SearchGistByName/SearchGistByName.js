import './SearchGistByName.css';
import {Stack} from "@mui/material";
import React, {useEffect, useMemo, useState} from "react";
import debounce from "lodash.debounce";
import {getGistsByName, gistByNameSelector} from "../../../store/gists";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";


export function SearchGistByName() {

    const dispatch = useDispatch();
    const {gistByNameError, gistByNamePending, gistByName} = useSelector(gistByNameSelector);
    const [search, setSearch] = useState('');

    const searchDebounced = useMemo(() => {
        return debounce((query) => {
            dispatch(getGistsByName(query))
        }, 1000)
    }, [dispatch]);

    useEffect(() => {
        if (search) {
            searchDebounced(search);
        }
    }, [searchDebounced, search])


    if (gistByNamePending) {
        return <h1>Pending by name in progress ...</h1>
    }

    if (gistByNameError) {
        return <h1>Error by name get data ...</h1>
    }

    return (
        <>
            <Stack display="row">
                <hr/>
                <h3>Search gist by name</h3>
                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoFocus="true"/>
                <hr/>
            </Stack>
            <Stack style={{height: '60vh', overflowX: 'auto'}}>
                {gistByName?.map(gist => <h5 key={gist.url}>{gist.url}</h5>)}
            </Stack>
        </>
    )
}