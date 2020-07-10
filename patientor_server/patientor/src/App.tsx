import React, {useEffect} from "react";
import axios from "axios";
import { Button, Divider, Header, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {Diagnosis, Patient} from "./types";
import { useStateValue } from "./state";

import PatientListPage from "./PatientListPage";
import { apiBaseUrl } from "./constants";
import {setDiagnosisList, setPatientList} from "./state/actions";
import PatientPage from "./PatientPage";

const App: React.FC = () => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };

    const fetchDiagnosisList = async () => {
      try {
        const { data: diagnosisListFromApi } = await axios.get<Diagnosis[]>(
            `${apiBaseUrl}/diagnoses`
        );
        dispatch(setDiagnosisList(diagnosisListFromApi));
      } catch (e) {
        console.error(e);
      }
    };

    fetchPatientList();
    fetchDiagnosisList();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route exact path="/" render={() => <PatientListPage />} />
            <Route path="/patients/:id" component={PatientPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
