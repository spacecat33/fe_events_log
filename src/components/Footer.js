import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div>
            &copy; Property of Events App Creator
        </div>
    );
  }
}

export default Footer;

// or 
// function Footer(props) {
//   return (
//     <div>
//             &copy; Property of Events App Creator
//         </div>
//     );
// }

// or
// const Footer = (props) => (
//     <div>
//       &copy; Property of Events App Creator
//     </div>
// );