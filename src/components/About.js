import React, { Component } from 'react';
import { getFunName } from '../helpers';

class About extends Component {
  render() {
    return (
      <div className="About">
       
       <h3>About Events App</h3>
        <h2>Beware! Some events are weirdly named like so...</h2> 
        <input type="text" required placeholder="Random Event Name" defaultValue={getFunName()} />
          <p>
            
           Throughtout my coding studies, I have had to travel for family or work and also renovated a house, requiring me to live in different locations and just had a lot going on!

           I have created this app to help me keep track of all my life events, a little like a diary whilst helping me to practice my coding skills.

           Welcome to my very public diary!

            <br />
            
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus dui, dictum nec nisl quis, aliquet commodo sapien. Ut lobortis viverra purus, id efficitur neque porttitor nec. In dolor sapien, semper quis ornare vitae, accumsan eget metus. Mauris ullamcorper venenatis ante id faucibus. Donec placerat, lorem sed lacinia elementum, arcu mi rutrum nulla, sit amet mattis velit mauris sed nunc. Aenean eget venenatis massa. Morbi aliquet, urna eget consequat sollicitudin, lorem lorem condimentum arcu, et iaculis augue lorem at libero. Suspendisse potenti. Vestibulum efficitur tortor nulla, in ultricies odio auctor vel. Morbi ullamcorper enim ex, sed faucibus odio consectetur vel. Suspendisse dapibus faucibus porta. Quisque sed ipsum ante. Donec aliquam sit amet tortor bibendum posuere. In quis risus non odio feugiat rhoncus eu at tellus.

            Duis quam turpis, ornare vitae vestibulum sed, luctus nec lorem. Donec et urna eros. Phasellus tristique nisi lacus, in rutrum ligula ornare at. Maecenas dapibus augue quis nisi lacinia, id euismod augue iaculis. Vestibulum dapibus sit amet velit et volutpat. Nullam sed laoreet arcu. Nulla finibus lacinia gravida. Etiam et pulvinar libero, eget pharetra leo. Nullam eu convallis velit.

            Mauris mi velit, lobortis a pulvinar eu, ornare nec enim. Donec dui ante, congue sit amet dolor sed, pulvinar lobortis turpis. Phasellus commodo rhoncus dui, eu viverra est vulputate eget. Integer dignissim vestibulum lacus, non rutrum metus tincidunt ut. Donec pharetra dolor arcu, quis tincidunt neque efficitur id. Nulla quis sapien magna. Cras nec ultrices augue, ullamcorper malesuada eros. Maecenas id mi nec metus consequat condimentum sit amet vitae eros. In maximus sed tortor egestas gravida. Ut dictum, ligula vel sodales auctor, erat orci consectetur nulla, tincidunt rutrum enim mauris et lacus. Nunc luctus tincidunt urna nec ullamcorper. Sed nec ligula porta, pharetra velit quis, rhoncus purus. Donec pretium tincidunt lorem, interdum ultricies lorem.

            Duis turpis arcu, finibus ut egestas ut, dapibus sed est. In commodo mi quis arcu ullamcorper aliquet at non urna. Duis ultricies nec est sit amet porttitor. Vestibulum viverra faucibus purus quis tincidunt. Curabitur mauris dui, pellentesque eget varius sed, mollis porta lectus. Praesent molestie sem felis, sit amet tempor felis aliquam at. Nunc aliquet auctor consequat. Proin sollicitudin est sit amet scelerisque porttitor. Quisque sed fermentum ante, at venenatis risus. Morbi vitae est sit amet orci finibus consectetur aliquam vitae metus. Nam sit amet nibh sed metus ultricies feugiat at ac lectus. Quisque blandit nulla quis urna rutrum, quis facilisis urna accumsan.

            Aliquam erat volutpat. Aenean id volutpat arcu. Proin imperdiet eleifend justo, sit amet consequat augue lobortis at. Nullam erat ex, rhoncus vel rhoncus quis, luctus in lectus. Sed nec lacinia erat, vel blandit enim. Integer luctus laoreet vehicula. Donec varius tortor turpis. Nunc finibus sapien ut aliquam tempor. Nulla feugiat tellus rutrum mollis facilisis. Ut vitae ex dolor. Sed tristique posuere venenatis. In consequat a est eget vestibulum. Vestibulum eget lobortis mi. Nullam laoreet nunc tortor, at placerat justo porttitor eget.
          </p>
      </div>
    );
  }
}

export default About;