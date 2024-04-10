import maleProfile from "../assets/maleProfile.jpeg";
import femaleProfile from "../assets/femaleProfile.jpeg";

export default function TeamMemberCard({
  employee,
  selectedTeam,
  handleEmployeeCardClick,
}) {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} className="card-img-top" alt="picture profile" />
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
  );
}
