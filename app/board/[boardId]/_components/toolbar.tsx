import {
	Circle,
	MousePointer2,
	Pencil,
	Redo2,
	Square,
	StickyNote,
	Type,
	Undo2
} from 'lucide-react'
import { CanvasMode, CanvasState, LayerType } from '@/types/canvas'
import { ToolButton } from './tool-button'

interface ToolbarProps {
	canvasState: CanvasState
	canUndo: boolean
	canRedo: boolean
	setCanvasState: (newState: CanvasState) => void
	undo: () => void
	redo: () => void
}

export function Toolbar({
	canvasState,
	canUndo,
	canRedo,
	setCanvasState,
	undo,
	redo
}: ToolbarProps) {
	return (
		<div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
			<div className='bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md'>
				<ToolButton
					label='Select'
					icon={MousePointer2}
					isActive={
						canvasState.mode === CanvasMode.None ||
						canvasState.mode === CanvasMode.Translating ||
						canvasState.mode === CanvasMode.SelectionNet ||
						canvasState.mode === CanvasMode.Pressing ||
						canvasState.mode === CanvasMode.Resizing
					}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.None
						})
					}
				/>
				<ToolButton
					label='Text'
					icon={Type}
					isActive={
						canvasState.mode === CanvasMode.Inserting &&
						canvasState.layerType === LayerType.Text
					}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.Inserting,
							layerType: LayerType.Text
						})
					}
				/>
				<ToolButton
					label='Sticky note'
					icon={StickyNote}
					isActive={
						canvasState.mode === CanvasMode.Inserting &&
						canvasState.layerType === LayerType.Note
					}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.Inserting,
							layerType: LayerType.Note
						})
					}
				/>
				<ToolButton
					label='Rectangle'
					icon={Square}
					isActive={
						canvasState.mode === CanvasMode.Inserting &&
						canvasState.layerType === LayerType.Rectangle
					}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.Inserting,
							layerType: LayerType.Rectangle
						})
					}
				/>
				<ToolButton
					label='Ellipse'
					icon={Circle}
					isActive={
						canvasState.mode === CanvasMode.Inserting &&
						canvasState.layerType === LayerType.Ellipse
					}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.Inserting,
							layerType: LayerType.Ellipse
						})
					}
				/>
				<ToolButton
					label='Pen'
					icon={Pencil}
					isActive={canvasState.mode === CanvasMode.Pencil}
					onClick={() =>
						setCanvasState({
							mode: CanvasMode.Pencil
						})
					}
				/>
			</div>
			<div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md'>
				<ToolButton
					label='Undo'
					icon={Undo2}
					isDisabled={!canUndo}
					onClick={undo}
				/>
				<ToolButton
					label='Redo'
					icon={Redo2}
					isDisabled={!canRedo}
					onClick={redo}
				/>
			</div>
		</div>
	)
}

export function ToolbarSkeleton() {
	return (
		<div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md' />
	)
}
