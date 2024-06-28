import React, {useState} from 'react';
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
  Input,
  Header,
  HeaderContent,
  Modal,

} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const Class = () => {
  const [addStudentModal, openAddStudentModal] = useState(false);
  
	const handleAddStudent = () => {
		// if (state.createChecklistName) {
		// 	onAddChecklist({
		// 		name: state.createChecklistName,
		// 		createdBy: localStorage.getItem('auth0UserEmail')
		// 			? localStorage.getItem('auth0UserEmail')
		// 			: '',
		// 	});
		// 	openAddChecklistModal(false);
		// } else {
		// 	toastMessage('error', 'Enter a name for the checklist.');
		// }
	};
	
  return (
    <div className="content">
      
      <Header size='medium' as='h3' icon textAlign='center' floated='left' className="icon-header">
        <Icon name='users' />
        <HeaderContent className="breadcrumb">Grade 6B</HeaderContent>
      </Header>
      <Divider />
         {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">You have no in charge class</span>
          </h3>
          <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-bold leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> Add Class</a>
          </div>
        </div> */}
        
         <div class="px-9 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
  
          {/* <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-bold text-xl/tight text-dark">
            <span class="mt-1 font-bold text-secondary-dark text-lg/normal">Grade 6B</span>
          </h3> */}
          <Input icon='search' placeholder='Search...' className="max-h-7 top-10"/>
          <div class="relative flex flex-wrap items-end my-2 lg:gap-x-4">
            <Button className='plus' onClick={()=>openAddStudentModal(true)}><Icon name='add user' color='white'/> Add Student</Button>
            <Link to="/class-schedule">
              <Button color='grey'><Icon name='bars' color='white'/>Final schedules</Button>
            </Link>
          </div>
        </div>
        
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">

      <Table celled selectable striped>

        <TableHeader className='table-header'>
          <TableRow className='table-row'>
            <TableHeaderCell width={1}>No.</TableHeaderCell>
            <TableHeaderCell width={3}>Index No</TableHeaderCell>
            <TableHeaderCell width={6}>Name & Index No</TableHeaderCell>
            <TableHeaderCell width={3}>Averages</TableHeaderCell>
            <TableHeaderCell width={3}>Trend</TableHeaderCell>
            <TableHeaderCell width={2}></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell><Button>6369</Button></TableCell>
            <TableCell><Icon name='user' color='black' size='large'/>George Cooper</TableCell>
            <TableCell>76</TableCell>
            <TableCell><Icon name='line graph' color='green' size='large'/></TableCell>
            <TableCell textAlign='center'><Icon name='history' color='black' size='large'/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>

      {/* create checkList modal */}
				<Modal
					size="mini"
					open={addStudentModal}
					onClose={() => openAddStudentModal(false)}
					onOpen={() => openAddStudentModal(true)}
				>
					<Modal.Header>
						<Header>Add Student</Header>
						<Icon
							name='close'
							onClick={() => openAddStudentModal(false)}
						/>
					</Modal.Header>
					<Modal.Content className="">
						
					</Modal.Content>
					<Modal.Actions>
          <Button 
            content="Submit"
            labelPosition='right'
            icon='checkmark'
            onClick={() => handleAddStudent()}
            negative>
            Reset
            </Button>
            <Button
            content="Submit"
            labelPosition='right'
            icon='checkmark'
            onClick={() => handleAddStudent()}
            positive
          />
					</Modal.Actions>
				</Modal>
    </div>
  );
};

export default Class;
