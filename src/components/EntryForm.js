import {Checkbox, Form, Segment} from "semantic-ui-react";
import React from "react";
const EntryForm = ({description,value,isExpense,setDescription,setValue,setIsExpense}) => {
    return (
        <>
            <Form.Group>
                <Form.Input icon='tags' placeholder='New shinny thing' width={12} label='Description'
                            value={description} onChange={(event) => setDescription(event.target.value)}/>
                <Form.Input icon='dollar' iconPosition='left' placeholder='100.00' width={4} label='Value' value={value}
                            onChange={(event) => setValue(event.target.value)}/>
            </Form.Group>
            <Segment compact>
                <Checkbox label='is expense' checked={isExpense} onChange={() => setIsExpense((oldState) => !oldState)}
                          toggle/>
            </Segment>
        </>
    )
}
export default EntryForm;