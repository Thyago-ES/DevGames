type ContainerProps = {
	children: React.ReactNode;
};

export function PageContainer({ children }: ContainerProps) {
	return <div>{children}</div>;
}
