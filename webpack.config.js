// exports.module = {
// 	entry: "index.js",
// 	output: {
// 		filename: "ml5.js",
// 		library: "ml5"
// 	}
// }

module.exports = {
	entry: "./index.js",
	output: {
		filename: "./bundle.js",
		library: "dl"
	},
	watch: true,
	mode: "production"
}
