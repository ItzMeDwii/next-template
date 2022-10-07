import "../styles/globals.css";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import Head from "next/head";
import { ReactNode, useState } from "react";
import { AppLayoutProps } from "../types/layouts";

interface Props {
	children?: ReactNode;
}

function MyApp({ Component, dehydratedState, pageProps }: AppLayoutProps) {
	const Layout = Component.layout || (({ children }: Props) => <>{children}</>);
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	);

	return (
		<>
			<Head>
				<title>Next.JS Tailwind</title>

				<meta name="viewport" content="initial-scale=1" />
				<meta name="robots" content="index, nofollow" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
			</Head>

			<QueryClientProvider client={queryClient}>
				<Hydrate state={dehydratedState}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
