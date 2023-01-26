import router, { useRouter } from 'next/router';
interface Props {
    Icon: any;
    title: string;
    selected?:boolean;
    route?: string;
  }
  const changeUrl = (url:string) => {
    router.push(`/${url}`)
  }
const HeaderOption = ({Icon , title, selected, route} : Props) => {
  const router = useRouter();
  return (
    <>
    
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${selected && 'text-blue-500 border-blue-500'}`}>
        {Icon}
        <p className="hidden sm:inline-flex">{title}</p>
    </div>
    </>
  )
}

export default HeaderOption