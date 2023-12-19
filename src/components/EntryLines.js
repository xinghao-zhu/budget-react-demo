import EntryLine from "./EntryLine";
import React from "react";
import {Container} from "semantic-ui-react";

const entryLines = ({entries}) => {
    return (
        <Container>
            {
                entries.map((entry) => (
                    <EntryLine key={entry.id} {...entry} />
                ))
            }
        </Container>
        )
};
export  default entryLines;