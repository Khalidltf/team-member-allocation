import maleProfile from "../assets/maleProfile.jpeg";
import femaleProfile from "../assets/femaleProfile.jpeg";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      {/* dropdown */}
      <div className="row  justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            name="team"
            id="team"
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      {/* cards */}
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "male" ? (
                  <img
                    src={maleProfile}
                    className="card-img-top"
                    alt="picture profile"
                  />
                ) : (
                  <img
                    src={femaleProfile}
                    className="card-img-top"
                    alt="picture profile"
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">Full name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
