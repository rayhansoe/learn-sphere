import clsx from "clsx";

const YoutubeIframe = ({
	embedId,
	className,
	isDocPost = true,
}: YoutubeIframe) => (
	<figure
		className={clsx(
			"relative h-0 overflow-hidden pb-[56.25%]",
			className,
			isDocPost && "not-prose my-8"
		)}
	>
		<iframe
			className="absolute left-0 top-0 !my-0 h-full w-full"
			width="796"
			height="447"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title="Embedded YouTube"
			allowFullScreen
		/>
	</figure>
);

type YoutubeIframe = {
	className: string;
	embedId: string;
	isDocPost: boolean;
};

export default YoutubeIframe;
