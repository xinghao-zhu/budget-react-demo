import { Grid, Icon, Segment} from "semantic-ui-react";
import React, {Fragment} from "react";
import {useDispatch} from "react-redux";
import {removeEntryRedux} from "../actions/entryActions";
import {openModal} from "../actions/modalAction";

const EntryLine = ({id,description,value,isExpense}) => {

    const dispatch = useDispatch();
    dispatch({type: 'TEST_MESSAGE'})
  return (
      <Fragment>
          <Segment color={isExpense ? 'red': 'green'}>
              <Grid columns={3} textAlign='right'>
                  <Grid.Row>
                      <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                      <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
                      <Grid.Column width={3}>
                          <Icon name='edit' bordered onClick={() => dispatch(openModal(id))}/>
                          <Icon name='trash' bordered onClick={() => dispatch(removeEntryRedux(id))} />
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </Segment>
        </Fragment>
    )
}

export default EntryLine;