import MainLayout from "@layouts/main";
import { NextPage } from "next";
import { Session } from "next-auth";
import { AppProps } from "next/app";
import { Router } from "next/router";
import { ReactElement } from "react";

export type MainLayoutType = NextPage & { layout: typeof MainLayout };

export type LayoutType = MainLayoutType;

export type LayoutProps = ({
	children,
}: {
	children: ReactElement;
}) => ReactElement;

export type AppLayoutProps = AppProps & {
	Component: LayoutType;
	dehydratedState?: any;
	router: Router;
	session?: Session;
	pageProps: any;
};
