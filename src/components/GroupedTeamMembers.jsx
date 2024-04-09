import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];

    let teamAMembers = employees.filter((team) => team.teamName === "TeamA");
    let teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter((team) => team.teamName === "TeamB");
    let teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter((team) => team.teamName === "TeamC");
    let teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };

    teams.push(teamC);

    let teamDMembers = employees.filter((team) => team.teamName === "TeamD");
    let teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4 ">
        <div className="col-8 ">
          <h1 className="mt-4  bg-secondary text-white rounded">
            Grouped Team Members
          </h1>
        </div>
      </div>
    </header>
  );
};

export default GroupedTeamMembers;
