import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Divider,
  Button,
  Icon,
  Input
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const ClassSchedules = () => {
  return (
    <div className="content">

         {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">No schdules found</span>
          </h3>
          <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-bold leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> Add Schedule</a>
          </div>
        </div> */}
        
        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">Year 2024 Term 3</span>
          </h3>
          <Input icon='search' placeholder='Search...' className="max-h-7 top-4"/>
          <div class="relative flex flex-wrap items-center my-2 lg:gap-x-4">
            <Button color='brown'><Icon name='plus' color='white'/> New Class Schedule</Button>
          </div>
        </div>
        
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">

      <Table celled selectable striped>

        <TableHeader>
          <TableRow>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell>Grade</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell> 
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>2025</TableCell>
            <TableCell>6B</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell textAlign='center'><Link to='/class-schedule'><Icon name='ellipsis vertical' color='black'/></Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </div>
 

  );
};

export default ClassSchedules;
