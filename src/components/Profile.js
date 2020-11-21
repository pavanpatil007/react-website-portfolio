import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import './Profile.css';


const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/pavanpatil007`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <><video src="/videos/video-1.mp4" autoPlay loop muted />
      <div style={{ padding: 20 }}>
        <div className="ui search">
        

          <button
            className="ui-primary-button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Show 
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;