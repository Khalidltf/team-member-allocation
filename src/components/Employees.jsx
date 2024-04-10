import Teams from "./Teams";
import TeamMembers from "./TeamMembers";

const Employees = () => {
  return (
    <main className="container">
      {/* dropdown */}
      <div className="row  justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams />
        </div>
      </div>

      {/* cards */}
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
