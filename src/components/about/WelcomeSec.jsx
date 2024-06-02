import aboutImg from '../../assets/imgs/about1.png'
const WelcomeSec = () => {
  return (
    <div className="w-full flex items-center max-h-[983px]">
        <div className="w-[43%] relative bg-[#F4F4F4]">
           <div className="w-full py-32  px-10">
                    <div className="flex w-full flex-col justify-center items-end">
                        <img alt="about" src={aboutImg} width={408} height={446} />
                    </div>
           </div>
        </div>
        <div className="w-full">
            hello
        </div>
    </div>
  )
}

export default WelcomeSec
