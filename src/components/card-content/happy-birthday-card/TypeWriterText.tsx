import Typewriter from "typewriter-effect";
import useShowContentStore from "@/stores/useShowContentStore";

const TypeWriterText: React.FC = () => {
	const { setShowScrollButton } = useShowContentStore();
	return (
		<Typewriter
			onInit={typewriter => {
				typewriter
					.pauseFor(2000)
					.typeString('<span style="color: #DA70D6;font-size: 4rem">정윤희</span>여사님의 16번째')
					.deleteChars(4)
					.typeString('<strong><span style="color: var(--accent-color);font-size: 4rem">66</span></strong>번째 ')
					.typeString("탄신 경축")
					.deleteChars(6)
					.typeString('<strong><span style="color: #DA70D6;font-size: 4rem"> 생신</span>을 <span style="color: #DA70D6;font-size: 4rem">축하</span></strong>드립니다!')
					.callFunction(() => {
						setShowScrollButton(true);
					})
					.start();
			}}
		/>
	);
};

export default TypeWriterText;
