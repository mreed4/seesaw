/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { kebabCase } from "lodash";

const PlaygroundLink = ({ playground }) => {
  const { id, names, address } = playground;
  const [street, city, state, zip] = address;
  const { official: name } = names;
  return (
    <Link to={`/playground/${kebabCase(city)}/${kebabCase(name)}`} state={{ id }}>
      {name}
    </Link>
  );
};

export default PlaygroundLink;
