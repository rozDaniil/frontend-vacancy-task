import React from "react";
import { Link } from "react-router-dom";

type TokenPropsType = {
  token: {
    id: number;
    name: string;
    symbol: string;
    address: string;
    logoURI: string;
    categories: string[];
    description: string;
    price: number;
    priceChange: {
      hours24: number;
      days7: number;
      days365: number;
    };
    volume: number,
    volumeChangePercentage: number,
    tvl: number,
    tvlChangePercentage: number,
    users: number,
  }
}

export const Token: React.FC<TokenPropsType> = ({ token }) => {
  const [descriptionToggle, setDescriptionToggle] = React.useState(false);

  const descriptionHander = () => setDescriptionToggle(!descriptionToggle);

  const priseChecker = (value: number): string => {
    if (value > 0) {
      return "token__price--priceChange-link grow";
    } else if (value < 0) {
      return "token__price--priceChange-link fall";
    } else {
      return "token__price--priceChange-link";
    }
  };

  return (
    <div className="token__wrapper">
      <div className="token">
        <span className="token__number">#{token.id}</span>
        <img
          width={40}
          height={40}
          src={token.logoURI}
          alt="tokenImg"
          className="token__img"
        />
        <Link to={`/${token.name}`} className="token__name">
          <span className="token__name--long">{token.name}</span>
          <span className="token__name--short">{token.symbol}</span>
        </Link>
        <div className="token__price">
          <span className="price">{token.price} $</span>
          <ul className="token__price--priceChange">
            <li className={priseChecker(token.priceChange.hours24)}>
              {token.priceChange.hours24}%
            </li>
            <li className={priseChecker(token.priceChange.days7)}>
              {token.priceChange.days7}%
            </li>
            <li className={priseChecker(token.priceChange.days365)}>
              {token.priceChange.days365}%
            </li>
          </ul>
        </div>
        <div className="token__stock">
          <span className="stock">{token.volume} $</span>
          <span className="stock--change">{token.volumeChangePercentage}%</span>
        </div>
        <div className="token__stock">
          <span className="stock">{token.tvl} $</span>
          <span className="stock--change">{token.tvlChangePercentage}%</span>
        </div>
        <div className="token__traider">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.599976 16.3333C0.599976 14.0322 2.46546 12.1667 4.76664 12.1667H11.4333C13.7345 12.1667 15.6 14.0322 15.6 16.3333V18C15.6 18.4602 15.2269 18.8333 14.7666 18.8333C14.3064 18.8333 13.9333 18.4602 13.9333 18V16.3333C13.9333 14.9526 12.814 13.8333 11.4333 13.8333H4.76664C3.38593 13.8333 2.26664 14.9526 2.26664 16.3333V18C2.26664 18.4602 1.89355 18.8333 1.43331 18.8333C0.973072 18.8333 0.599976 18.4602 0.599976 18V16.3333Z"
              fill="#6347F5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.93335 6.33334C3.93335 4.03215 5.79883 2.16667 8.10002 2.16667C10.4012 2.16667 12.2667 4.03215 12.2667 6.33334C12.2667 8.63452 10.4012 10.5 8.10002 10.5C5.79883 10.5 3.93335 8.63452 3.93335 6.33334ZM8.10002 3.83334C6.7193 3.83334 5.60002 4.95263 5.60002 6.33334C5.60002 7.71405 6.7193 8.83334 8.10002 8.83334C9.48073 8.83334 10.6 7.71405 10.6 6.33334C10.6 4.95263 9.48073 3.83334 8.10002 3.83334Z"
              fill="#6347F5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4598 12.9C16.5748 12.4544 17.0294 12.1864 17.475 12.3015C19.3135 12.7762 20.5986 14.4339 20.6 16.3327L20.6 18C20.6 18.4602 20.2269 18.8333 19.7666 18.8333C19.3064 18.8333 18.9333 18.4602 18.9333 18L18.9333 16.334C18.9333 16.3339 18.9333 16.334 18.9333 16.334C18.9323 15.1948 18.1614 14.2 17.0583 13.9152C16.6127 13.8001 16.3447 13.3456 16.4598 12.9Z"
              fill="#6347F5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.126 2.90163C13.2401 2.45578 13.6941 2.18688 14.14 2.30104C15.9836 2.77309 17.2731 4.43436 17.2731 6.3375C17.2731 8.24063 15.9836 9.9019 14.14 10.374C13.6941 10.4881 13.2401 10.2192 13.126 9.77336C13.0118 9.32751 13.2807 8.87353 13.7266 8.75937C14.8328 8.47614 15.6065 7.47938 15.6065 6.3375C15.6065 5.19562 14.8328 4.19885 13.7266 3.91562C13.2807 3.80146 13.0118 3.34748 13.126 2.90163Z"
              fill="#6347F5"
            />
          </svg>
          <span className="token__traider--volume">{token.users}</span>
        </div>
        <div onClick={descriptionHander} className="token__toggler">
          {descriptionToggle ? (
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9428 10.4428C18.4222 10.9635 17.5779 10.9635 17.0572 10.4428L10 3.38563L2.94285 10.4428C2.42215 10.9635 1.57793 10.9635 1.05723 10.4428C0.536531 9.92212 0.536531 9.0779 1.05723 8.5572L9.05723 0.557201C9.57793 0.0365019 10.4222 0.0365019 10.9428 0.557201L18.9428 8.5572C19.4635 9.0779 19.4635 9.92212 18.9428 10.4428Z"
                fill="#6347F5"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.05715 0.557196C1.57785 0.036497 2.42207 0.036497 2.94277 0.557196L9.99996 7.61439L17.0572 0.557196C17.5779 0.036497 18.4221 0.036497 18.9428 0.557196C19.4635 1.0779 19.4635 1.92212 18.9428 2.44281L10.9428 10.4428C10.4221 10.9635 9.57785 10.9635 9.05715 10.4428L1.05715 2.44281C0.536451 1.92212 0.536451 1.0779 1.05715 0.557196Z"
                fill="#6347F5"
              />
            </svg>
          )}
        </div>
      </div>
      {descriptionToggle && (
        <div className="token__description">{token.description}</div>
      )}
    </div>
  );
};
