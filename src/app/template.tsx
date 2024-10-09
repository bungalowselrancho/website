import { Transition } from '@/components/layout';

function Template({ children }: { children: React.ReactNode }) {
	return <Transition>{children}</Transition>;
}

export default Template;
