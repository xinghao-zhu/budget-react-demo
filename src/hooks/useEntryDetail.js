import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEntryRedux, editEntryRedux} from "../actions/entryActions";
import {v4 as uuidv} from "uuid";

function useEntryDetail(desc, val, isExp=true) {

    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries);

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    },[desc,val,isExp]);
    function updateEntry(id) {
        dispatch(editEntryRedux(
            id,
            {
                id,
                description,
                value,
                isExpense
            }
        ))
    }
    function addEntry() {
        dispatch(addEntryRedux({
            id: entries?entries.length + 1 : uuidv(),
            description,
            value,
            isExpense
        }));
        setDescription('');
        setValue(0);
        setIsExpense(true);
    }


    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry,
    };
}

export default useEntryDetail;