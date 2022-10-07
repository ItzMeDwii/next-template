const textTruncate = (limit: number, text: string) => {
	const textSplit = text.split("");
	const textTruncate =
		textSplit.length > limit
			? text.replace(text.substring(24, textSplit.length), "...")
			: text;

	return textTruncate;
};

export default textTruncate;
