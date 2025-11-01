export default {
	async fetch(request, env, ctx): Promise<Response> {

		if (request.method === "GET") {
			const html = `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>Styled Message</title>
					<style>
						body {
							background-color: #111;
							color: #f00;
							font-family: Arial, sans-serif;
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							margin: 0;
						}
						h1 {
							font-size: 3rem;
							text-shadow: 2px 2px #000;
						}
					</style>
				</head>
				<body>
					<h1>F*** You Biatch</h1>
				</body>
				</html>
			`;

			return new Response(html, {
				headers: { "Content-Type": "text/html" }
			});
		}
	},
} satisfies ExportedHandler<Env>;
