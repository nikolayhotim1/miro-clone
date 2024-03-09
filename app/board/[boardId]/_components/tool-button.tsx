'use client'

import { LucideIcon } from 'lucide-react'
import { Hint } from '@/components/hint'
import { Button } from '@/components/ui/button'

interface ToolButtonProps {
	label: string
	icon: LucideIcon
	isActive?: boolean
	isDisabled?: boolean
	onClick: () => void
}

export function ToolButton({
	label,
	icon: Icon,
	isActive,
	isDisabled,
	onClick
}: ToolButtonProps) {
	return (
		<Hint label={label} side='right' sideOffset={14}>
			<Button
				disabled={isDisabled}
				onClick={onClick}
				size='icon'
				variant={isActive ? 'boardActive' : 'board'}
			>
				<Icon />
			</Button>
		</Hint>
	)
}
