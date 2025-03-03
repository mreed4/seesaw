import { playgrounds, users } from "../data/data";
import { useParams } from "react-router-dom";

import PlaygroundLink from "./PlaygroundLink";

const ProfilePage = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === Number(userId));
  if (!user) {
    return <div>User not found</div>;
  }
  const favoritePlaygrounds = playgrounds.filter((playground) => user.favorites.includes(playground.id));

  return (
    <div>
      <h1>{user.name}&apos;s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Date Joined: {new Date(user.dateJoined).toLocaleDateString()}</p>
      <h2>Favorite Playgrounds</h2>
      <table>
        <thead>
          <tr>
            <th>Playground Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {favoritePlaygrounds.map(({ id, names, address }) => {
            // eslint-disable-next-line no-unused-vars
            const [street, city, state, zip] = address;
            return (
              <tr key={id}>
                <td>
                  <PlaygroundLink playground={{ id, names, address }} />
                </td>
                <td>{city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
