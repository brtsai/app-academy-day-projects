import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';



const Widget = () => {

return (<section>
  <h1>Welcome to our widgets app!</h1>
  < Clock />
< Tabs tabs={[{title: "one", content: "this is the first tab" },
{title: "two", content: "this is the second tab" },
{title: "three", content: "this is the third tab" }]}/> 
</section>);

};
export default Widget;
