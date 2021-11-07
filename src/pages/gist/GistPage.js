import './GistPage.css';
import React from "react";
import {SearchGistByName} from "../../components/containers/SearchGistByName/SearchGistByName";
import {DefaultGist} from "../../components/containers/DefaultGist/DefaultGist";

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

    return (
        <>
            <DefaultGist/>
            <SearchGistByName/>
        </>
    )
}