import styles from "./authorList.module.css";

export default function AuthorList() {
	return (
		<>
			<div className={styles.container}>
				<p>
					<strong>원작자 목록</strong>
				</p>
				<span>
					음악 원작자{" "}
					<a href="https://freesound.org/" target="_blank">
						Freesound
					</a>
					의
				</span>
				<div>
					<span>하트 아이콘 클릭 시 효과음 : elmasmalo1</span>
					<span>카드 클릭 시 효과음: jomse</span>
					<span>카드 위로 날아가는 효과음: raaghav81</span>
					<span>생일축하곡: SergeQuadrado</span>
				</div>
				<span className={styles.imgAuthor}>배경이미지 원작자</span>
				<div>
					<a
						href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/selective-focus-photography-of-assorted-color-balloons-Hli3R6LKibo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						target="_blank"
					>
						Unsplash의
					</a>
					<a href="https://unsplash.com/ko/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
						Adi Goldstein
					</a>
				</div>
				<p>
					<strong>감사합니다!</strong>{" "}
				</p>
				<p>
					<strong>Thanks for your contribution! 💜</strong>
				</p>
			</div>
		</>
	);
}
