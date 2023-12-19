import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import React from "react";
import EntryForm from "./EntryForm";
import useEntryDetail from "../hooks/useEntryDetail";

const NewFormEntry = () => {
    const {description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,addEntry} = useEntryDetail();
    return (
        <Form unstackable>
            <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}/>
            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    );
}
export default NewFormEntry;