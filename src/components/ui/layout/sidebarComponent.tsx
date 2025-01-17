'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import {
    Shield,
    ChevronsUpDown,
    LogOut,
    User,
    CircleGauge,
    Settings,
    Wallet,
    ArrowLeftRight,
    BadgePoundSterling,
    BotMessageSquare,
    PlusCircle,
    History,
    BadgeCheck
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
    Sidebar,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarFooter
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { StoreUserSession } from '@/state/userState';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SidebarComponent = () => {
    const router = useRouter();
    const { user } = StoreUserSession();

    async function logout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        try {
            const response = await axios.delete('/api/logout');
            if (response.status === 200) {
                router.push('/');
            }
        } catch (error) {
            console.error('Cannot logout', error);
        }
    }

    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <BadgeCheck className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate text-xl font-bold">Laxi</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarMenu>
                        {/* <SidebarMenuItem className="bg-sidebar-accent font-medium text-sidebar-accent-foreground"> */}
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/dashboard'}>
                                    <CircleGauge />
                                    <span>{'Dashboard'}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {/* <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/profile'}>
                                    <User />
                                    <span>{'Profile'}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem> */}
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/generate-post'}>
                                    <PlusCircle />
                                    <span>{'Generate Post'}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/post-history'}>
                                    <History />
                                    <span>{'Post History'}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/settings'}>
                                    <Settings />
                                    <span>{'Settings'}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarFallback className="rounded-lg">
                                            {user &&
                                                user.firstname[0].toUpperCase() +
                                                ' ' +
                                                user.lastname[0].toUpperCase()
                                            }</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {user &&
                                                user.firstname.slice(0, 1).toUpperCase() +
                                                user.firstname.slice(1).toLowerCase() +
                                                ' ' +
                                                user.lastname.slice(0, 1).toUpperCase() +
                                                user.lastname.slice(1).toLowerCase()
                                            }
                                        </span>
                                        <span className="truncate text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Button onClick={logout} variant="ghost" className='w-full text-start'>
                                        <LogOut />
                                        Log out
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default SidebarComponent;