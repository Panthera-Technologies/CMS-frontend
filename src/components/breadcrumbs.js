import { Link } from "react-router-dom";
import { Breadcrumb } from "rsuite";
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

export default function Breadcrumbs({ routes }) {
  return (
    <Breadcrumb separator={<AngleRightIcon />}>
      {routes.map((route, index) => {
        return (
          <Breadcrumb.Item key={index} active={route.active}>
            {route.active ? (
              <span className="text-secondary">{route.name}</span>
            ) : (
              <Link to={route.href}>{route.name}</Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
