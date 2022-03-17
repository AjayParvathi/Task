import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
  });

  const { one, two, three, four, five, six, seven } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/users/${id}`, user);
    navigate("/users/add");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="exam_form">
          <div className="exam_form_heading my-3 ">
            <h3 className="text-center">Pain & Functional Description</h3>
            <p className="header_content">
              The description of the current situation gives your Optimum
              Trainer a picture of and clues to the underlying causes of your
              problems.
            </p>
          </div>

          <div className="exam_form_data">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group q1">
                <label>
                  1.If you have problems with pain/aches,stiffness,weakness of
                  functional problems,describe this/these below.(List the
                  symptoms in descending order with the most troublesome first)
                </label>
                <textarea
                  name="one"
                  id=""
                  value={one}
                  onChange={(e) => onInputChange(e)}
                  className="text_area"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group q2">
                <label>2.Have you been diagonised with this problem?</label>
                <label className="radio-inline">
                  {" "}
                  <input
                    type="radio"
                    value="not relavent"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="two"
                  />
                  Not relevant
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="Yes"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="two"
                  />
                  Yes
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="No"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="two"
                  />
                  No
                </label>
              </div>
              <div className="form-group q3">
                <label>3.Did the problem start after a physical trauma?</label>
                <label className="radio-inline">
                  {" "}
                  <input
                    type="radio"
                    value="not relavent"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="three"
                  />
                  Not relevant
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="Yes"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="three"
                  />
                  Yes
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="No"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="three"
                  />
                  No
                </label>
              </div>
              <div className="form-group q4">
                <label>4.Did the problem start after a mental trauma?</label>
                <label className="radio-inline">
                  {" "}
                  <input
                    type="radio"
                    value="not relavent"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="four"
                  />
                  Not relevant
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="Yes"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="four"
                  />
                  Yes
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    value="No"
                    onChange={(e) => onInputChange(e)}
                    className="answers"
                    name="four"
                  />
                  No
                </label>
              </div>

              <div className="form-group q5">
                <label>5.How often do you experience the problem?</label>
                <label className="radio d-block pl-3">
                  {" "}
                  <input
                    type="radio"
                    className="answers"
                    value="Not relavent"
                    onChange={(e) => onInputChange(e)}
                    name="five"
                  />
                  Not relevant
                </label>
                <label className="radio d-block pl-3">
                  <input
                    type="radio"
                    className="answers"
                    name="five"
                    onChange={(e) => onInputChange(e)}
                    value="Dialy"
                  />
                  Dialy
                </label>
                <label className="radio d-block pl-3">
                  <input
                    type="radio"
                    className="answers"
                    name="five"
                    onChange={(e) => onInputChange(e)}
                    value="Several times/week"
                  />
                  Several times/week
                </label>
                <label className="radio d-block pl-3">
                  <input
                    type="radio"
                    className="answers"
                    name="five"
                    onChange={(e) => onInputChange(e)}
                    value="a few times/month"
                  />
                  a few times/month
                </label>
                <label className="radio d-block pl-3">
                  <input
                    type="radio"
                    className="answers"
                    name="five"
                    onChange={(e) => onInputChange(e)}
                    value="a few times/year"
                  />
                  a few times/year
                </label>
              </div>

              <div className="form-group q6">
                <label>6.How often do you experience the problem?</label>
                <div className="form-check">
                  <input
                    className="input-check-input"
                    type="checkbox"
                    name="six"
                    value="Not relevant"
                    onChange={(e) => onInputChange(e)}
                    id="defaultCheck1"
                  />
                  <label className="form-check-label " for="defaultCheck1">
                    Not relevant
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="input-check-input"
                    type="checkbox"
                    name="six"
                    value="when lying down"
                    onChange={(e) => onInputChange(e)}
                    id="defaultCheck1"
                  />
                  <label className="form-check-label  " for="defaultCheck1">
                    When lying down
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="input-check-input"
                    type="checkbox"
                    name="six"
                    value="when sitting"
                    onChange={(e) => onInputChange(e)}
                    id="defaultCheck1"
                  />
                  <label className="form-check-label " for="defaultCheck1">
                    when sitting
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="input-check-input"
                    type="checkbox"
                    name="six"
                    value="Under Standing"
                    onChange={(e) => onInputChange(e)}
                    id="defaultCheck1"
                  />
                  <label className="form-check-label " for="defaultCheck1">
                    Under Standing
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="input-check-input"
                    type="checkbox"
                    name="six"
                    value="In walking"
                    onChange={(e) => onInputChange(e)}
                    id="defaultCheck1"
                  />
                  <label className="form-check-label " for="defaultCheck1">
                    In walking
                  </label>
                </div>
              </div>

              <div className="form-group q7">
                <label>
                  7.How intense is the experience of the problem on average on a
                  0-10 scale?
                </label>
                <div className="d-block">
                  <label className="radio-inline">
                    {" "}
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="1"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>1</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="2"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>2</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="3"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>3</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="4"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>4</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="5"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>5</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="6"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>6</span>
                  </label>
                  {/* <label className="radio-inline"><input type="radio"className='answers' name="seven" value="7" onChange={e => onInputChange(e)}/><span>6</span></label> */}
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="7"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>7</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="8"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>8</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="9"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>9</span>
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      className="answers"
                      name="seven"
                      value="10"
                      onChange={(e) => onInputChange(e)}
                    />
                    <span>10</span>
                  </label>
                </div>
              </div>
              <div className="next_btn text-center">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
          <div className="add_btn text-center">
            <span>
              <i className="fas fa-plus"></i>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
