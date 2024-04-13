import "./Background.css"


function Background(){
    return( <>
    <div className="fixed z-[2] w-full h-screen">
      <div className='py-10 w-full flex justify-center text-xl text-zinc-600'>Document</div>
      <h1 className='text-zinc-900 text-[12vw] tracking-tighter leading-none'>Docs.</h1>
    </div>
      
    </>
    );
}

export default Background