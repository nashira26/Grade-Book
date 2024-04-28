import React from 'react';

const SubjectSchedule = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
        
         <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span class="mr-3 font-semibold text-dark">My schedules</span>
            {/* <span class="mt-1 font-medium text-secondary-dark text-lg/normal">Year 2024</span> */}
          </h3>
          <div class="relative flex flex-wrap items-center my-2">
            <a href="javascript:void(0)" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> Add Marks</a>
          </div>
        </div>

        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span class="mr-3 font-semibold text-dark">Grade 8B </span>
            <span class="mt-1 font-medium text-secondary-dark text-lg/normal">Science</span>
          </h3>
          
        </div>

       
      <div class="overflow-x-auto overflow-y-auto relative rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500 relative">
    <thead class="bg-gray-50">
      <tr>
      <th scope="col" class="px-2 py-4 font-medium text-gray-900">Serial no.</th>
        <th scope="col" class="px-2 py-4 font-medium text-gray-900">Index No</th>
        <th scope="col" class="px-4 py-4 font-medium text-gray-900">Student Name</th>
        <th scope="col" class="px-4 py-4 font-medium text-gray-900">Marks</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Grade</th>
        <th scope="col" class="px-3 py-4 font-medium text-gray-900"></th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        
        <td class="px-2 py-4">
          1
        </td>
        <td class="px-2 py-4">6369</td>
        <td class="px-4 py-4">George</td>
        <td class="px-4 py-4">76</td>
        <td class="px-6 py-4"><a href='/class-schedule'>A</a></td>
        <td class="px-3 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default SubjectSchedule;
