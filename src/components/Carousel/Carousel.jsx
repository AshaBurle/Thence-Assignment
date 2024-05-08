import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';


function Carousel() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
   

  return (
   <>
   <Box>
    <Typography variant='h4' component={'h4'} sx={{fontWeight:500,marginBottom:'10px'}} >Enhance fortune 50 <br/> companys insights <br/> team reserach <br/> capabilities</Typography>
     <MobileStepper
      variant="dots"
      color='green'
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      />


     <Button sx={{backgroundColor:'black',color:'white',borderRadius:'30px',marginTop:'70px',fontSize:'12px',height:'55px',width:'180px'}} size="medium" onClick={handleNext} disabled={activeStep === 3}>
      Explore More
      {theme.direction === 'rtl' ? (
        <KeyboardArrowLeft />
      ) : (
        <KeyboardArrowRight />
      )}
    </Button>
    </Box>
   </>
  )
}

export default Carousel