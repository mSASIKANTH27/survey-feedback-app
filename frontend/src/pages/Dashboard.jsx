import CardLayout from "../components/CardLayout";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <CardLayout title="Admin Dashboard">
      <div style={{ textAlign: "center" }}>
        <p>Welcome👋</p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/create">Create Survey</Link>
          <br /><br />
          <Link to="/surveys">View Surveys</Link>
        </div>
      </div>
    </CardLayout>
  );
}

export default Dashboard;
