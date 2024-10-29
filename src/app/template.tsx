import { Loader, Transition } from '@/components/layout';

function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Loader />
			<Transition>{children}</Transition>
		</>
	);
}

export default Template;
