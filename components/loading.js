import Image from "next/image";

export default function Loading({ width, height }) {

	return (
    <div className='m-3 flex justify-center items-center'>
      <div className={`animate-spin inline-block w-[${width || '40'}px] h-[${height || '40'}px] border-4 border-t-transparent rounded-full`}></div>
    </div>
  )
}