import React from "react";
import {createStore} from "redux";
import {useSelector, useDispatch} from "react-redux";
import {ProfileReducer} from "./reducer";
import {INCREMENT, DECREMENT} from "./types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export * from "./actions";
export * from "./reducer";

export function ProfilePage() {

    const store = createStore(ProfileReducer, {count: 0});

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({type: INCREMENT});
    const decrement = () => dispatch({type: DECREMENT});

    return (
        <div style={{textAlign: 'center'}}>
            <Card sx={{minWidth: 275, marginTop: '10px'}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Geek Brains
                    </Typography>
                    <Typography variant="h5" component="div">
                        React course
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Lesson 5 Redux
                    </Typography>
                    <Typography variant="body2">
                        Count {count}
                    </Typography>
                </CardContent>
                <button style={{marginRight: '10px'}} onClick={increment}>Increment</button>
                <button style={{marginBottom: '10px'}} onClick={decrement}>Decrement</button>
            </Card>
        </div>
    )
}