"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  MoveRight,
  Percent,
  Home,
  ListOrdered,
  MoveLeft,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[2rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && (
            <div className="flex flex-col gap-4">
              <div className="mt-4 flex items-center gap-4 rounded-md bg-zinc-200 p-2">
                {status === "authenticated" && data?.user && (
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                )}

                <div className="flex flex-col">
                  <p className="font-bold">{data?.user?.name}</p>
                  <span className="text-sm font-light">
                    {data?.user?.email}
                  </span>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <MoveRight size={16} />
                Entrar
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <MoveLeft size={16} />
                Sair
              </Button>
            )}
            <Button variant="outline" className="w-full justify-start gap-2">
              <Home size={16} />
              Página Inicial
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Percent size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrdered size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">Andrade Store</h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
