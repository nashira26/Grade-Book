import React from 'react';
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

const Class = () => {
  return (
    <div className="content">

         {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">You have no in charge class</span>
          </h3>
          <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-bold leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> Add Class</a>
          </div>
        </div> */}
        
         <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">Grade 6B - Year 2024</span>
          </h3>
          <Input icon='search' placeholder='Search...' className="max-h-7 top-4"/>
          <div class="relative flex flex-wrap items-center my-2 lg:gap-x-4">
            <Button color="brown"><Icon name='plus' color='white'/> Add Student</Button>
            <Button color='grey'> <Icon name='bars' color='white'/>Class schedules </Button>
          </div>
        </div>
        
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">

      <Table celled selectable striped>

        <TableHeader className='table-header'>
          <TableRow className='table-row'>
            <TableHeaderCell>Serial No</TableHeaderCell>
            <TableHeaderCell>Index No</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Averages</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>6369</TableCell>
            <TableCell>George Cooper</TableCell>
            <TableCell>76</TableCell>
            <TableCell textAlign='center'><Icon name='ellipsis vertical' color='black'/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </div>
  );
};

export default Class;
