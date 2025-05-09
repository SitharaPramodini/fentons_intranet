import React from 'react'


const Documents = () => {
  return (

    // .folder {
    //     width: 80%;
    //     height: 250px;
    //     /* margin: 10em auto 10em; */
    //     border-radius: 5px 25px 25px 25px;
    //     box-shadow: 3px 4px 11px 0px #00000021;
    //     background: white;
    //     position: relative;
    //     margin-left: auto;
    //     margin-right: auto;
    //     margin-top: 3rem;
    // }

    <div><div class="container md:flex-row flex-col flex-wrap flex gap-x-2 mx-auto">

    <div class="folder w-[80%] mt-3">
      <h2 class="name text-[#ff6000] font-semibold text-xl mt-32 mx-6 pb-6 border-b-2">Folder Name 1</h2>
      <div class="options">
        <h5 className='mt-3 mx-6'>Option 1</h5>
      </div>
    </div>
    <div class="folder">
    <h2 class="name text-[#ff6000] font-semibold text-xl mt-32 mx-6 pb-6 border-b-2">Folder Name 2</h2>
    <div class="options">
        <h5 className='mt-3 mx-6'>Option 1</h5>
      </div>
    </div>
  
    <div class="folder">
    <h2 class="name text-[#ff6000] font-semibold text-xl mt-32 mx-6 pb-6 border-b-2">Folder Name 3</h2>
    <div class="options">
        <h5 className='mt-3 mx-6'>Option 1</h5>
      </div>
    </div>
  </div></div>
  )
}

export default Documents