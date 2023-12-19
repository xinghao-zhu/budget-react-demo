import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";
import {useDispatch} from "react-redux";
import {closeModal} from "../actions/modalAction";
import useEntryDetail from "../hooks/useEntryDetail";

const ModalEdit = ({isOpen,id,description,value,isExpense}) => {
    const dispatch = useDispatch();
    const {description:updateDescription,
        setDescription,
        value: updateValue,
        setValue,
        isExpense: updateIsExpense,
        setIsExpense,
        updateEntry} = useEntryDetail(description,value,isExpense);


    const submitEntry = () => {
        updateEntry(id);
        dispatch(closeModal());
    };
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={updateDescription} value={updateValue} isExpense={updateIsExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}/>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeModal())}>Close</Button>
                <Button onClick={() => submitEntry()} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
};
export default ModalEdit;