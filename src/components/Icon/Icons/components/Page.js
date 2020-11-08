/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Page = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5.84244 3.45C5.73264 3.45 5.63085 3.49275 5.55856 3.56333C5.48688 3.63332 5.45001 3.72436 5.45001 3.81539V16.0846C5.45001 16.1756 5.48688 16.2667 5.55856 16.3367C5.63085 16.4072 5.73264 16.45 5.84244 16.45H14.1243C14.2341 16.45 14.3358 16.4072 14.4081 16.3367C14.4798 16.2667 14.5167 16.1756 14.5167 16.0846V5.9504C14.5167 5.95034 14.5167 5.95045 14.5167 5.9504C14.5166 5.85955 14.4798 5.76856 14.4084 5.69867M14.4084 5.69867L12.2212 3.56325C12.149 3.49277 12.0473 3.45006 11.9377 3.45C11.9376 3.45 11.9377 3.45 11.9377 3.45H5.84244M14.1243 17.95C14.6204 17.95 15.0998 17.7577 15.456 17.41C15.8128 17.0616 16.0167 16.5852 16.0167 16.0846V5.95023C16.0166 5.44998 15.8129 4.97379 15.4564 4.62555L13.2689 2.48979C12.9128 2.14238 12.4336 1.9501 11.9378 1.95H5.84244C5.34625 1.95 4.86688 2.14227 4.51068 2.49005C4.15387 2.83841 3.95001 3.31478 3.95001 3.81539V16.0846C3.95001 16.5852 4.15387 17.0616 4.51068 17.41C4.86688 17.7577 5.34625 17.95 5.84244 17.95H14.1243Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Page.displayName = 'Page';
Page.propTypes = {
  size: PropTypes.string
}
export default Page;
/* tslint:enable */
/* eslint-enable */
