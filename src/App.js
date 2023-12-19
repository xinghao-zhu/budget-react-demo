import {
    Container,
} from 'semantic-ui-react';
import './App.css';
import React, {useEffect, useState} from 'react';
import MainHeaders from "./components/MainHeaders";
import NewFormEntry from "./components/NewFormEntry";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getEntriesRedux} from "./actions/entryActions";

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  const entries = useSelector(state => state.entries);
  const {isOpen, id} = useSelector(state => state.modals);
  const [entry, setEntry] = useState();

  useEffect(() => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      setEntry(entries[index]);
    }
  },[isOpen,id,entries]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntriesRedux());
  },[]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
    setTotal(totalIncome - totalExpense);
  }, [entries]);



  return (
    <Container>
      <MainHeaders title='Budge'/>
        <DisplayBalance title='your balance:' value={total} size='small' />
        <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense}/>
        <MainHeaders title='History' type='h3' />
        <EntryLines entries={entries}  />
        <MainHeaders title='Add new transaction' type='h3'/>

        <NewFormEntry />

      <ModalEdit
          isOpen={isOpen}
          {...entry}
      />
    </Container>
  );
}

export default App;
