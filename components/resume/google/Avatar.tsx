import Head from 'next/head'
import Link from 'next/link';

interface URL {
    image: string;
    className?: string;
}

const GoogleAvatar = ({image, className}: URL,) => {
  return (
    <img loading="lazy" className={`h-10 w-10 object-cover rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} src={image} alt="profile pic" />
  )
}

export default GoogleAvatar