import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchProfile: React.FC<{ username: string }> = ({ username }) => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, [username]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default FetchProfile;
