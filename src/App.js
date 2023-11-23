import {
    Button,
    Container,
    Form,
    Grid,
    Header,
    Icon,
    Segment,
    Statistic,
    StatisticLabel,
    StatisticValue
} from 'semantic-ui-react';
import './App.css';
import React from 'react';

function App() {
  return (
    <Container>
      <Header as='h1'>Budge</Header>
      <Statistic size='small'>
          <StatisticLabel>
          your balance:
          </StatisticLabel>
          <StatisticValue>2.550.53</StatisticValue>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
              <Grid.Column>
                  <Statistic size='tiny' color='green'>
                      <Statistic.Label style={{textAlign: 'left'}}>
                          Incoming:
                      </Statistic.Label>
                      <Statistic.Value>1.045.50</Statistic.Value>
                  </Statistic>
              </Grid.Column>
              <Grid.Column>
                  <Statistic size='tiny' color='red'>
                      <Statistic.Label style={{textAlign: 'left'}}>
                          Expenses:
                      </Statistic.Label>
                      <Statistic.Value>6.045.50</Statistic.Value>
                  </Statistic>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
        <Header as='h3'>
            History
        </Header>
        <Segment color='red'>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>something</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered/>
                        <Icon name='trash' bordered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment color='green'>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>something else</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>$100.00</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered/>
                        <Icon name='trash' bordered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment color='red'>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>something else</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered/>
                        <Icon name='trash' bordered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Header as='h3'>
            <Form unstackable>
                <Form.Group>
                    <Form.Input icon='tags' placeholder='New shinny thing' width={12} label='Description'/>
                    <Form.Input icon='dollar' iconPosition='left' placeholder='100.00' width={4} label='Value'/>
                </Form.Group>
                <Button.Group style={{marginTop: 20}}>
                    <Button>Cancel</Button>
                    <Button.Or/>
                    <Button primary>Ok</Button>
                </Button.Group>
            </Form>
        </Header>
    </Container>
  );
}

export default App;
