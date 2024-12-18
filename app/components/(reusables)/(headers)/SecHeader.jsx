

const SecHeader = ({ subhead, head }) => {


    return (
      <div className="text-left" >
         <h1 className="my-0 mb-2 text-black lg:mb-2 leading-secHead  font-bold text-4xl sm:text-3xl md:text-4xl  transition-all duration-500">
         {head}
        </h1>
        <p
          className='w-full font-normal  text-lg text-Para  mb-5 '
        >
          {subhead}
        </p>
       
      </div>
    );
  };
  
  export default SecHeader;
  