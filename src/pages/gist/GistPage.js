import './GistPage.css';
import React from "react";
import {useEffect, useState, useMemo} from 'react';
import {getGists, gistSelector, gistByNameSelector, getGistsByName} from '../../store/gists/index'
import {useDispatch, useSelector} from "react-redux";
import debounce from "lodash.debounce";

// const API_GISTS_URL = "https://api.github.com/gists";
//
// const useGists = () => {
//
//     const [gists, setGists] = useState(null);
//     const [pending, setPending] = useState(false);
//     const [error, setError] = useState(null);
//
//     const getGists = useCallback(async () => {
//         setPending(true);
//         try {
//             const result = await fetch(API_GISTS_URL);
//             if (!result.ok) {
//                 throw Error('Result error');
//             }
//             const data = await result.json();
//             setGists(data);
//         } catch (e) {
//             setError(e);
//         } finally {
//             setPending(false);
//         }
//     }, []);
//
//     useEffect(() => {
//         getGists()
//     }, [getGists])
//
//     console.log('data from gists', gists);
//
//     return {
//         gists,
//         pending,
//         error
//     }
// }

export function GistPage() {

    const dispatch = useDispatch();
    const {gistError, gistPending, gists} = useSelector(gistSelector);
    const {gistByNameError, gistByNamePending, gistByName} = useSelector(gistByNameSelector);
    const [search, setSearch] = useState('');

    const searchDebounced = useMemo(()=>{
        return debounce((query)=>{dispatch(getGistsByName(query))}, 1000)
    }, [dispatch]);

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists());
        }
    }, [dispatch, gists])

    useEffect(() => {
        if (search) {
            searchDebounced(search);
        }
    }, [searchDebounced, search])

    //const {pending, gists, error} = useGists();

    if (gistPending) {
        return <h1>Pending in progress ...</h1>
    }

    if (gistError) {
        return <h1>Error get data ...</h1>
    }

    if (gistByNamePending) {
        return <h1>Pending by name in progress ...</h1>
    }

    if (gistByNameError) {
        return <h1>Error by name get data ...</h1>
    }

    return (
        <>
            <h1>GistPage</h1>
            {gists?.map(gist => <h5 key={gist.url}>{gist.url}</h5>)}
            <button onClick={() => dispatch(getGists(1))}>1</button>
            <button onClick={() => dispatch(getGists(2))}>2</button>
            <button onClick={() => dispatch(getGists(3))}>3</button>
            <hr/>
            <h5>Search gist by name</h5>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} />
            <hr/>
            {gistByName?.map(gist => <h5 key={gist.url}>{gist.url}</h5>)}
        </>
    )
}