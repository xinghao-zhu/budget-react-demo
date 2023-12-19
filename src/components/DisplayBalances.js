import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";
import React from "react";

const DisplayBalances = ({totalExpense,totalIncome}) =>{
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title='Incoming' value={totalIncome} size='tiny' color='green' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title='Expenses' value={totalExpense} size='tiny' color='red' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;