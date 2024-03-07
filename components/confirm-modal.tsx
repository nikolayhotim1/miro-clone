'use client'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
	children: React.ReactNode
	header: string
	description?: string
	disabled?: boolean
	onConfirm: () => void
}

export function ConfirmModal({
	children,
	header,
	description,
	disabled,
	onConfirm
}: ConfirmModalProps) {
	function handleConfirm() {
		onConfirm()
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{header}</AlertDialogTitle>
					<AlertDialogDescription>
						{description}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						disabled={disabled}
						onClick={handleConfirm}
					>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
