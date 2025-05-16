import Image from "next/image";

export default function Ham() {
	const filenames = [...Array(12)].map((_, i) => i+1);
	return (
		<>
			<h1 className="font-bold text-4xl my-2">The Daily Ham</h1>
			<div className="columns-2 md:columns-3">
				{filenames.map(filename =>
					<Image
					className="grayscale contrast-125 rounded-md mb-4"
					src={'/' + filename + '.png'}
					alt="A brown dog getting bonked by a blue scoop"
					width={756}
					height={1008}
					priority
					key={filename}
				/>)}
			</div>
		</>
	)
}
