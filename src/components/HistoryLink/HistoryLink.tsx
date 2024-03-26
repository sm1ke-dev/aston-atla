import React from "react";
import styles from "./HistoryLink.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

interface IHistoryLinkProps {
  name: string;
  handleRemoveHistory: (name: string) => void;
}

const HistoryLink: React.FC<IHistoryLinkProps> = ({
  name,
  handleRemoveHistory,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className={styles.item}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Link to={`/search/${name}`} className={styles.item__link}>
        {name}
      </Link>
      {isHovered && (
        <button
          className={styles.item__button}
          onClick={() => {
            handleRemoveHistory(name);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
            className={styles.item__icon}
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
              </g>
            </g>
          </svg>
        </button>
      )}
    </li>
  );
};

HistoryLink.propTypes = {
  name: PropTypes.string.isRequired,
  handleRemoveHistory: PropTypes.func.isRequired,
};

export default HistoryLink;
