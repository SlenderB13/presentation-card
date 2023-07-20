"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
	<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-cyan-200 via-cyan-300 to-teal-400">
		<div className="w-[1200px] h-[700px] bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white rounded-lg flex">
			<div className="flex-1">
				<Card className="flex flex-col items-center justify-center h-full dark:bg-zinc-800 dark:text-white border-none">
					<CardHeader className="mb-6">
						<CardTitle>Suas informações</CardTitle>
						<CardDescription className=" text-zinc-600 dark:text-zinc-300">Preencha com suas informações</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center justify-around space-y-4">
						<div>
							<Label htmlFor="name">Nome</Label>
							<Input id="name" placeholder="Seu nome e sobrenome" className="bg-transparent dark:border-zinc-500 dark:placeholder:text-zinc-400" />
						</div>
						<div>
							<Label htmlFor="profession">Profissão</Label>
							<Input id="profession" placeholder="Ex: Contador" className="bg-transparent dark:border-zinc-500 dark:placeholder:text-zinc-400" />
						</div>
						<div>
							<Label htmlFor="instagram">Instagram</Label>
							<Input id="instagram" placeholder="Ex: @lewishamilton" className="bg-transparent dark:border-zinc-500 dark:placeholder:text-zinc-400" />
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="flex-1">
				<Card className="flex flex-col items-center justify-center h-full dark:bg-zinc-800 dark:text-white">
					<CardHeader className="mb-6">
						<CardTitle>Olá</CardTitle>
						<CardDescription className=" text-zinc-600 dark:text-zinc-300">Me chame quando precisar</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col items-center justify-around space-y-4">
						<Avatar className="w-32 h-32">
							<AvatarImage src="https://github.com/slenderb13.png" />
							<AvatarFallback>LS</AvatarFallback>
						</Avatar>
						<div className="flex flex-col items-center">
							<strong className="text-xl">Lucas Silva</strong>
							<p className="text-sm text-zinc-600 dark:text-zinc-300">Desenvolvedor Web</p>
						</div>
						<Button variant="link" className="gap-2 text-teal-800 dark:text-zinc-200">
							<Instagram className="w-5 h-5" />
							<p>@reverendoslender</p>
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	</main>
  )
}
