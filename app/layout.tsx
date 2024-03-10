import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { ModalProvider } from '@/providers/modal-provider'
import { Suspense } from 'react'
import { Loading } from '@/components/auth/loading'

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
				<Suspense fallback={<Loading />}>
					<ConvexClientProvider>
						<Toaster />
						<ModalProvider />
						{children}
					</ConvexClientProvider>
				</Suspense>
			</body>
		</html>
	)
}
