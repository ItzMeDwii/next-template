import { LayoutProps } from "../types/layouts";

const MainLayout: LayoutProps = ({ children }) => (
	<>
		<div className="min-h-screen">{children}</div>
	</>
);

export default MainLayout;
