import React from "react";
import './Profile.css';

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
 
      <tbody>
        <tr>
        <td className="small-image">
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          </tr>
          <tr>
          <td className='name-text'>{data.name}</td>
          </tr>
          <tr>
          <td>{data.location}</td>
          <tr>
          <td>{data.bio}</td>
          </tr>
         
          <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;