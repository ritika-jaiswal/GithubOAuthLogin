import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepoDetails = ({ match }) => {
    const repoId = match.params.id;
    const [repoDetails, setRepoDetails] = useState(null);
    console.log(repoId, "repoId")
  
    useEffect(() => {
      fetchRepoDetails();
    }, []);
  
    const fetchRepoDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
        setRepoDetails(response.data);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };
  
    if (!repoDetails) {
      return <div>Loading repository details...</div>;
    }
  
    return (
      <div>
        <h2>{repoDetails.name}</h2>
        <p>Author: {repoDetails.owner.login}</p>
        <p>Languages: {Object.keys(repoDetails.languages).join(', ')}</p>
        <p>Stars: {repoDetails.stargazers_count}</p>
        <p>Forks: {repoDetails.forks_count}</p>
      </div>
    );
  };

  export default RepoDetails;