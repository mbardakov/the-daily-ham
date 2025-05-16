import Image from 'next/image' ;

export default function Ham() {
	return (
		<div className='mx-auto w-fit font-mono'>
			<h1 className='font-bold text-4xl'>The Daily Ham</h1>
			<Image
				className='grayscale'
				src="/ham_bonk.png"
				alt="A brown dog getting bonked by a blue scoop"
				width={756}
				height={1008}
				priority
			/>
		</div>
	)
}
