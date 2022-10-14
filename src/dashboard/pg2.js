import './app.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Card from './components/card/card';
import ApplicationsBar from './components/applicationsbar/ApplicationsBar';
import ApplicationDetails from './components/applicationdetails/ApplicationDetails';
import LineChart from './components/linechart/linechart';
import { useState } from 'react';


const applications1 = {
  title: "Total Applications",
  count: 7956,
  growth: +3.59,
  data: 70,
  blue: false
}

const shortlists = {
  title: "Shortlisted Candidates",
  count: 4658,
  growth: 0.6,
  data: 60,
  blue: true
}

const applications2 = {
  title: "Total Applications",
  count: 1501,
  growth: -0.4,
  data: -40,
  blue: false
}

function TestePg() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="App">

      <div className={"new-appl-bar " + (!collapsed && "blur")}>
        <ApplicationsBar />
      </div>
      <div className={"graphs-line-bar " + (!collapsed && "blur")}>
        <p>TESTE</p>
       
      </div>
    </div>
  );
}

export default TestePg;
