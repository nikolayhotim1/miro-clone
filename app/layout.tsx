import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexClientProvider } from '@/providers/convex-client-provider'

const inter = Inter({ subsets: ['latin'] })
interface LayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: 'Miro Clone',
	description: 'This is a real-time miro clone with next, react, tailwind'
}

export default function Layout({ children }: Readonly<LayoutProps>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	)
}
