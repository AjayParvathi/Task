import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Summary Page</h1>
        {users.map((user) => (
          <table class="table border shadow">
            <thead class="thead">
              <tr>
                <th>Q.NO</th>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td className="question_data">
                  If you have problems with pain/aches,stiffness,weakness of
                  <br />
                  functional problems,describe this/these below.(List the
                  symptoms
                  <br />
                  in descending order with the most troublesome first)
                </td>
                <td> {user.one}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td className="question_data">
                  Have you been diagonised with this problem?
                </td>
                <td> {user.two}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="question_data">
                  Did the problem start after a physical trauma?
                </td>
                <td> {user.three}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td className="question_data">
                  Did the problem start after a mental trauma?
                </td>
                <td> {user.four}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td className="question_data">
                  How often do you experience the problem?
                </td>
                <td> {user.five}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td className="question_data">
                  How often do you experience the problem?
                </td>
                <td> {user.six}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td className="question_data">
                  How intense is the experience of the problem on average on a
                  0-10 scale?
                </td>
                <td> {user.seven}</td>

                <td>
                  <Link
                    class="btn btn-outline-primary mx-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>

            <div className="text-center mt-5 ">
              <Link to="/" class="btn btn-primary Back_button mx-2">
                {" "}
                Home{" "}
              </Link>
              <Link
                to=""
                class="btn btn-danger mx-2"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Link>
            </div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Home;
