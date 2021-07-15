import React from 'react';
import { Box, Tab, Tabs } from 'grommet';

export const TabsExample = () => {
  const [index, setIndex] = React.useState();
  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Box>
      <Tabs activeIndex={index} onActive={onActive} justify="start">
        <Tab title="Section A">
          <Box margin="small" gap="small">
          <p><b>Random content with a picture:</b> Vivamus nec eleifend sem, vestibulum sagittis nunc. Sed gravida pellentesque sodales. </p>
          <img src="images/greenlakejpg.jpg" alt="Green Lake" style={{ maxWidth: "50%" }}/>
          </Box>
        </Tab>
        <Tab title="Section B">
          <Box margin="small">
              <p>Sed gravida pellentesque sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu justo nec nunc consequat accumsan.</p>
          </Box>
        </Tab>
        <Tab title="Section C">
          <Box margin="small">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget laoreet velit. Nulla at orci non quam tincidunt vehicula. Morbi ac dui leo. In at nulla dignissim, suscipit risus vel, pretium massa.</p>
          </Box>
        </Tab>        
      </Tabs>
    </Box>
  );
};

export default TabsExample;