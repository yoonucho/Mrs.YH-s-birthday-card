import styles from "./authorList.module.css";

export default function AuthorList() {
	return (
		<>
			<div className={styles.container}>
				<p>Author List</p>
				<span>sound author</span>
				<div>
					<span>click-button : elmasmalo1,</span>
					<span>card-open: jomse,</span>
					<span>sweep sound: raaghav81,</span>
					<span>happy birthday to you music: SergeQuadrado</span>
				</div>
				<span className={styles.imgAuthor}>image author</span>
				<a
					href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/selective-focus-photography-of-assorted-color-balloons-Hli3R6LKibo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					target="_blank"
				>
					Unsplash
				</a>
				의
				<a href="https://unsplash.com/ko/@adigold1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">
					Adi Goldstein
				</a>
			</div>
		</>
	);
}
