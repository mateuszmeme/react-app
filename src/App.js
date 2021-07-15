import React from 'react';
import HeaderExample from './header';
import TabsExample from './tabs';
import {
  Box,  
  Grid,
  Grommet,  
  Main,
  ResponsiveContext,  
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid    
    areas={[
      ['HeaderExample'],
      ['Main'],      
    ]}
    fill
  >
    <Box
      direction={size === 'small' ? 'column-reverse' : 'row'}
      fill
      margin="auto"
      width={{ max: 'xxlarge' }}
      {...rest}
    />
    </Grid>
  );
};

function App() {  
  return (
    <Grommet theme={hpe} full>
      <ResponsiveContext.Consumer>
        {size => (
          <AppContainer>
          <Box flex overflow="auto">
            <Box height={{ min: '100%' }}>
              <HeaderExample>               
              </HeaderExample>
              <Main
                fill={undefined}
                flex={false}
                pad="small"                
              >
                <TabsExample>
                </TabsExample>
              </Main>
            </Box>
          </Box>
        </AppContainer>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
