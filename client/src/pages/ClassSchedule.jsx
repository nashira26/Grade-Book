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
  Header,
  HeaderContent,
  Input
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const ClassSchedule = () => {
  return (
    <div className="content">

    <Header size='medium' as='h3' icon textAlign='center' floated='left' className="icon-header">
      <Icon name='users' />
      <HeaderContent className="breadcrumb">Grade 6B - 3rd term</HeaderContent>
    </Header>
    <Divider />
         {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">No schdules found</span>
          </h3>
          <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-bold leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> Add Schedule</a>
          </div>
        </div> */}
        
        <div class="px-9 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
        <Input icon='search' placeholder='Search...' className="max-h-7 top-10"/>
          <div class="relative flex flex-wrap items-center my-2 lg:gap-x-4">
          <Link to="/class-schedule">
            <Button color='grey'> <Icon name='bars' color='white'/>Final schedules </Button>
          </Link>
          </div>
        </div>
        
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">

      <Table celled selectable striped>

        <TableHeader>
          <TableRow>
            <TableHeaderCell>Serial no</TableHeaderCell>
            <TableHeaderCell>Index</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell> 
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>6369</TableCell>
            <TableCell>George Cooper</TableCell>
            <TableCell textAlign='center'><Link ><Icon name='ellipsis vertical' color='black'/></Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </div>
 

  );
};

export default ClassSchedule;
