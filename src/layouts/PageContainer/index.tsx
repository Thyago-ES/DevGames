import "./styles.css";

type ContainerProps = {
	children: React.ReactNode;
};

export function PageContainer({ children }: ContainerProps) {
	return <div className="container">{children}</div>;
}
