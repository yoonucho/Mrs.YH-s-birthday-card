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
					<span>
						하트 아이콘 클릭 시 효과음 : elmasmalo1
						<a href="https://freesound.org/people/elmasmalo1/sounds/376968" target="_blank">
							elmasmalo1
						</a>
					</span>
					<span>
						카드 클릭 시 효과음:{" "}
						<a href="https://freesound.org/people/jomse/sounds/428652" target="_blank">
							jomse
						</a>
					</span>
					<span>
						카드 위로 날아가는 효과음:{" "}
						<a href="https://freesound.org/people/raaghav81/sounds/277234" target="_blank">
							raaghav81
						</a>
					</span>
					<span>
						축하 효과음:{" "}
						<a href="https://freesound.org/people/theuned/sounds/391869" target="_blank">
							theuned
						</a>
					</span>
					<span>
						생일축하곡:{" "}
						<a href="https://freesound.org/people/SergeQuadrado/sounds/646117" target="_blank">
							SergeQuadrado
						</a>
					</span>
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

				<span className={styles.imgAuthor}>이미지 & Youtube 영상 원작자</span>
				<div>
					<a href="https://www.youtube.com/@CHOSK_INFP" target="_blank">
						CHOSK
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
