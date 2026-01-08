import CardLayout from "../components/CardLayout";
import { useState } from "react";
import axios from "axios";

function CreateSurvey() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateSurvey = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first ❌");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/surveys",
        {
          title,
          questions: [
            {
              questionText: question,
              options: options.split(","),
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Survey created successfully ✅");
      setTitle("");
      setQuestion("");
      setOptions("");
    } catch (error) {
      setMessage("Failed to create survey ❌");
    }
  };

  return (
  <CardLayout title="Create Survey">
    <form className="login-form" onSubmit={handleCreateSurvey}>
      <input
        type="text"
        placeholder="Survey Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Options (comma separated)"
        value={options}
        onChange={(e) => setOptions(e.target.value)}
        required
      />

      <button type="submit">Create Survey</button>
    </form>

    <p className="message">{message}</p>
  </CardLayout>
);

}

export default CreateSurvey;
