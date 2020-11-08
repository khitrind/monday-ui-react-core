/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Health = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.74957 7.76846C3.79144 6.5508 4.55992 5.3961 5.61803 4.94947C6.59683 4.53632 8.03165 4.65629 9.59416 6.4258C9.73655 6.58706 9.94134 6.67941 10.1565 6.67937C10.3716 6.67934 10.5764 6.58692 10.7187 6.42561C11.7569 5.24912 12.7373 4.81282 13.5308 4.75651C14.3242 4.70021 15.0444 5.01472 15.5937 5.56266C16.725 6.6911 16.9878 8.61528 15.7135 9.90176L10.1563 14.9837L6.34441 11.4984C6.03872 11.2189 5.56432 11.2401 5.28481 11.5458C5.00531 11.8515 5.02654 12.3259 5.33223 12.6054L9.65026 16.5535C9.93681 16.8155 10.376 16.8155 10.6625 16.5535L16.7388 10.9968C16.747 10.9893 16.755 10.9817 16.7629 10.9738C18.758 8.97937 18.245 6.08863 16.653 4.50067C15.8391 3.68877 14.7078 3.16922 13.4246 3.26028C12.3354 3.33757 11.2185 3.84823 10.156 4.85062C8.43061 3.22637 6.57897 2.9157 5.03471 3.56754C3.40038 4.25739 2.31096 5.95752 2.25045 7.7169C2.23621 8.13087 2.56026 8.478 2.97423 8.49224C3.3882 8.50647 3.73533 8.18243 3.74957 7.76846ZM8.09218 7.44723C7.97714 7.17881 7.71676 7.00158 7.42485 6.993C7.13294 6.98442 6.8626 7.14606 6.732 7.40726L5.83832 9.19462H4.09989C3.68568 9.19462 3.34989 9.53041 3.34989 9.94462C3.34989 10.3588 3.68568 10.6946 4.09989 10.6946H6.30184C6.58592 10.6946 6.84562 10.5341 6.97266 10.28L7.35046 9.52444L8.36492 11.8915C8.47041 12.1377 8.69913 12.3089 8.96502 12.3408C9.2309 12.3726 9.49361 12.2603 9.65428 12.0461L11.0807 10.1441H12.3572C12.7714 10.1441 13.1072 9.80835 13.1072 9.39414C13.1072 8.97992 12.7714 8.64414 12.3572 8.64414H10.7057C10.4697 8.64414 10.2474 8.75528 10.1057 8.94414L9.23263 10.1083L8.09218 7.44723Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Health.displayName = 'Health';
Health.propTypes = {
  size: PropTypes.string
}
export default Health;
/* tslint:enable */
/* eslint-enable */
