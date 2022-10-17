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

function HomeDashboard() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="App">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Header collapsed={collapsed}/>
      <div className={"cards " + (!collapsed && "blur")}>
        <Card title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue}/>
        <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/>
        <Card title={applications2.title} count={applications2.count} growth={applications2.growth} data={applications2.data} blue={applications2.blue}/>
      </div>
      <div className={"new-appl-bar " + (!collapsed && "blur")}>
        <ApplicationsBar />
      </div>
      <div className={"graphs-line-bar " + (!collapsed && "blur")}>
        
        <ApplicationDetails />
      </div>
    </div>
  );
}

export default HomeDashboard;
