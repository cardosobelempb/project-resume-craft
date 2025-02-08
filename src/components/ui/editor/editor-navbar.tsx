'use client'

import { Editor } from '@tiptap/react'
import {
    Italic,
    Bold,
    ListOrdered,
    List,
    Strikethrough,
    Underline,
    AlignLeft,
    AlignJustify,
    AlignCenter,
    AlignRight,
} from 'lucide-react'
import { Button } from '../button'
import { Tooltip } from '../tooltip'



type EditorNavBarProps = {
    editor: Editor | null
}

export const EditorNavBar: React.FC<EditorNavBarProps> = ({ editor }) => {
    if (!editor) return null

    const ACTIONS = [
        {
            label: 'Negrito',
            icon: Bold,
            action: () => editor.chain().focus().toggleBold().run(),
            active: editor.isActive('bold') ? 'is-active' : '',
        },
        {
            label: 'Itálico',
            icon: Italic,
            action: () => editor.chain().focus().toggleItalic().run(),
            active: editor.isActive('italic') ? 'is-active' : '',
        },
        {
            label: 'Riscado',
            icon: Strikethrough,
            action: () => editor.chain().focus().toggleStrike().run(),
            active: editor.isActive('strike') ? 'is-active' : '',
        },
        {
            label: 'Sublinhado',
            icon: Underline,
            action: () => editor.chain().focus().toggleUnderline().run(),
            active: editor.isActive('underline') ? 'is-active' : '',
        },
        {
            label: 'Lista',
            icon: List,
            action: () => editor.chain().focus().toggleBulletList().run(),
            active: editor.isActive('bulletList') ? 'is-active' : '',
        },
        {
            label: 'Lista ordenada',
            icon: ListOrdered,
            action: () => editor.chain().focus().toggleOrderedList().run(),
            active: editor.isActive('orderedList') ? 'is-active' : '',
        },
        {
            label: 'Alinhar Esquerda',
            icon: AlignLeft,
            action: () => editor.chain().focus().setTextAlign('left').run(),
            active: editor.isActive({ textAlign: 'left' }) ? 'is-active' : '',
        },
        {
            label: 'Alinhar Centro',
            icon: AlignCenter,
            action: () => editor.chain().focus().setTextAlign('center').run(),
            active: editor.isActive({ textAlign: 'center' }) ? 'is-active' : '',
        },
        {
            label: 'Alinhar Direita',
            icon: AlignRight,
            action: () => editor.chain().focus().setTextAlign('right').run(),
            active: editor.isActive({ textAlign: 'right' }) ? 'is-active' : '',
        },
        {
            label: 'Alinhar Justificado',
            icon: AlignJustify,
            action: () => editor.chain().focus().setTextAlign('justify').run(),
            active: editor.isActive({ textAlign: 'justify' })
                ? 'is-active'
                : '',
        },
    ]
    return (
        <div className="flex items-center border-b p-2 flex-wrap">
            {ACTIONS.map(action => (
                <Tooltip key={action.label} content={action.label}>
                    <Button
                        onClick={action.action}
                        variant="ghost"
                        className="p-2 h-max"
                        type="button"
                    >
                        <action.icon className="w-4 h-4" />
                    </Button>
                </Tooltip>
            ))}
        </div>
    )
}
