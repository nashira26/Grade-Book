import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Card,
  Image,
  Button,
  Icon,
  Input,
  Header,
  HeaderContent,
  Divider
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Subjects = () => {
  return (
    <div className="content">
    <Header size='small' as='h3' icon textAlign='center' floated='left' className="icon-header">
      <Icon name='clipboard' />
      <HeaderContent className="breadcrumb">Subjects</HeaderContent>
    </Header>
    <Divider className='divider'/>
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
            <Button className='plus'><Icon name='add to cart' color='white'/> Add Subject</Button>
          </div>
        </div>
        
      <div class="rounded-lg border border-gray-200 shadow-md m-5">
        <CardGroup itemsPerRow={4}>
          <Card className='science text-center subject-card' color='red'>
            <CardContent>
              <div className="subject-name"><CardHeader>Science 6B</CardHeader></div>
              <CardMeta> <Icon name='user'/> 40 students </CardMeta>
              <CardDescription className="text-center pb-2">Schedule Status</CardDescription>
              <div className='ui three buttons'>
                  <Button basic color='green' className='term-btn'>
                  1st term <Icon name="check"  />
                  </Button>
                  <Button basic color='red'>
                  <span  className='term-btn'>2nd term </span><Icon name="spinner"/>
                  </Button>
                  <Button basic color="grey" className='term-btn'>
                    3rd term <Icon/>
                  </Button>
                </div>
            </CardContent>
          </Card>
          <Card className='maths text-center subject-card' color='red'>
            <CardContent>
            <div className="subject-name"><CardHeader>Maths 7C</CardHeader></div>
              <CardMeta> <Icon name='user'/> 40 students </CardMeta>
              <CardDescription className="text-center pb-2">Schedule Status</CardDescription>
                <div className='ui three buttons'>
                  <Button basic color='green' className='term-btn'>
                  1st term <Icon name="check"  />
                  </Button>
                  <Button basic color='red'>
                  <span  className='term-btn'>2nd term </span><Icon name="spinner"/>
                  </Button>
                  <Button basic color="grey" className='term-btn'>
                    3rd term <Icon/>
                  </Button>
                </div>
            </CardContent>
          </Card>
          <Card className='english text-center subject-card' color='red'>
            <CardContent>
            <div className="subject-name"><CardHeader>English 8A</CardHeader></div>
              <CardMeta> <Icon name='user'/> 40 students </CardMeta>
              <CardDescription className="text-center pb-2">Schedule Status</CardDescription>
              <div className='ui three buttons'>
                  <Button basic color='green' className='term-btn'>
                  1st term <Icon name="check"  />
                  </Button>
                  <Button basic color='red'>
                  <span  className='term-btn'>2nd term </span><Icon name="spinner"/>
                  </Button>
                  <Button basic color="grey" className='term-btn'>
                    3rd term <Icon/>
                  </Button>
                </div>
            </CardContent>
          </Card>
        </CardGroup>
      </div>
    </div>
 
  );
};

export default Subjects;
