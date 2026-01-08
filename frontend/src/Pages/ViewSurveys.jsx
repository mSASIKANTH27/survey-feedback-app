import CardLayout from "../components/CardLayout";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewSurveys() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/surveys"
      );
      setSurveys(res.data);
    };

    fetchSurveys();
  }, []);

 return (
  <CardLayout title="Available Surveys">
    {surveys.length === 0 && <p>No surveys found</p>}

    {surveys.map((survey) => (
      <div key={survey._id} style={{ marginBottom: "20px" }}>
        <h3>{survey.title}</h3>

        {survey.questions.map((q) => (
          <div key={q._id}>
            <p>
              <b>Q:</b> {q.questionText}
            </p>
            <ul>
              {q.options.map((opt, index) => (
                <li key={index}>{opt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ))}
  </CardLayout>
);

}

export default ViewSurveys;
