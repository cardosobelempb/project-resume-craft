'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, SquareUser } from 'lucide-react'
import Link from 'next/link'

export default function UserDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="w-full gap-2 justify-start px-2 z-10"
                >
                    <Avatar className="w-7 h-7 block">
                        <AvatarImage src="https://github.com/cardosobelempb.png" />
                        <AvatarFallback>CB</AvatarFallback>
                    </Avatar>
                    <p>Cardoso Belém PB</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className=" mb-6">
                <Link passHref href="/dashboard/account">
                    <DropdownMenuItem className="px-2 py-3">
                        <DropdownMenuItem className="flex gap-2 items-center">
                            <SquareUser size={16} />
                            Configurações de Conta
                        </DropdownMenuItem>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="flex items-center gap-2 text-red-500 px-2 py-3">
                    <LogOut size={16} />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
