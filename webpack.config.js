// exports.module = {
// 	entry: "index.js",
// 	output: {
// 		filename: "ml5.js",
// 		library: "ml5"
// 	}
// }

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "./dl.min.js",
		library: "dl"
	},
	watch: true,
	mode: "development"
}
