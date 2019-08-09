/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Games01 from "./Games/01/components/levels/one";

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
));

export default function LinkRouter() {
  return (
    <Router>
      <div>
        <Link component={RouterLink} to="/Games/01/components/levels/one">
          Simple case
        </Link>
        <br />
        <Link component={AdapterLink} to="/Games/01/components/levels/two">
          Ref forwarding
        </Link>
        <br />
        <Link component={CollisionLink}>Avoids props collision</Link>
      </div>
    </Router>
  );
}