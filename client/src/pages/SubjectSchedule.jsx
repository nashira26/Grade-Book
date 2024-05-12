import React from 'react';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  TableFooter,
  Table,
  Divider,
  Button,
  Icon,
  Input
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SubjectSchedule = () => {
  return (
    <div className="content">
         <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">Year 2024 Term 3 Grade 6 Science</span>
          </h3>
          <Input icon='search' placeholder='Search...' className="max-h-7 top-4"/>
          <div class="relative flex flex-wrap items-center my-2 lg:gap-x-4">
            <Button color='blue'><Icon name='plus' color='white'/> Add Marks</Button>
            <Button color='grey'> <Icon name='print' color='white'/> Download </Button>
          </div>
        </div>
        
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">

      <Table celled selectable striped>

        <TableHeader>
          <TableRow>
            <TableHeaderCell>Serial no</TableHeaderCell>
            <TableHeaderCell>Index no</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Marks</TableHeaderCell>
            <TableHeaderCell>Grade</TableHeaderCell>
            <TableHeaderCell>Highest</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>6369</TableCell>
            <TableCell>George Cooper</TableCell>
            <TableCell>78</TableCell>
            <TableCell>A</TableCell>
            <TableCell>98</TableCell>
            <TableCell textAlign='center'><Link to='/subject-schedule'><Icon name='ellipsis vertical' color='black'/></Link></TableCell>
          </TableRow>
        </TableBody>

        <TableFooter fullWidth>
          <TableRow>
            <TableHeaderCell colSpan='7'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
              >
                <Icon name='save' /> Save
              </Button>
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>
                Send
              </Button>   
            </TableHeaderCell>
          </TableRow>
        </TableFooter>

      </Table>
      </div>
    </div>
  );
};

export default SubjectSchedule;
