import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';


function AccordionPage() {
  return (
    <>

<div className='grid grid-cols-12 mx-20 mt-20 bgClr2 p-10 rounded-3xl'>
  <div className='col-span-6'>
      <div className='ml-6'><p className='font-cursive text-grey text-[20px]'>Whats on your mind?</p></div>
      <div className='ml-6'><p className='text-[40px] bold font-medium'>Ask Questions</p></div>

  </div>
  <div className='col-span-6'>
  <Accordion sx={{backgroundColor:'transparent',boxShadow:0}} >
        <AccordionSummary
        style={{border:0}}
       
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:'700'}}>Do you offer freelancers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'transparent',boxShadow:0}}  className='border-b-[1px] border-b-gray-200' >
        <AccordionSummary
          expandIcon={<AddIcon/>}
          
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight:'700'}}>What is te gurareentethat i will be satisfied with te hire talent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'transparent',boxShadow:0}}  className='border-b-[1px] border-b-gray-200'   defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:'700'}}>Can i hire multiple talents at once?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'transparent',boxShadow:0}} className='border-b-[1px] border-b-gray-200'  >
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:'700'}}>Why should i not go to an agency directly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'transparent',boxShadow:0}}  className='border-b-[1px] border-b-gray-200'  >
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight:'700'}} >How can youhelp me pick a rigt skillset?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  </div>
</div>





     
      
     
    </>
  )
}

export default AccordionPage