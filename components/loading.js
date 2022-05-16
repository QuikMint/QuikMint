import Image from "next/image";

export default function Loading() {

	return (
    <div className='m-[40vh] flex justify-center items-center'>
      <div className='animate-spin inline-block w-32 h-32 border-4 border-t-transparent rounded-full p-3'></div>
    </div>
  )
}