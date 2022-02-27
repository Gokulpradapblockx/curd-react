     import React from "react";
import Card from "./card";
function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
      <Card border="border-left-primary" heading = "Earnings (Monthly)" icon = "fa-calendar" text = "text-primary"/>
      <Card border="border-left-info" heading = "Earnings (Annual)" icon = "fa-dollar-sign" text = "text-info"/>
      <Card border="border-left-success" heading = "Tasks" icon = "fa-clipboard-list" text = "text-success"/>      
      <Card border="border-left-warning" heading = "Pending Requests" icon = "fa-comments" text = "text-warning"/>
      
      </div>
    </>
  );
}

export default Dashboard;
