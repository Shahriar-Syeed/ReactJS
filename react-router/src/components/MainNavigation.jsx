import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? classes.active : ''
              }
              style={({isActive}) =>
                ({fontWeight: isActive ? '900' : '400',})
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({isActive}) =>
                isActive ? classes.active : ''
              }
              style={({isActive}) =>
                ({fontWeight: isActive ? '900' : '400',})
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
