"use client"
import Image from "next/image";
import Link from "next/link";

import { UserItem } from "./user-item";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client"


interface RecommendedProps {
  data: User[];
}


export const Recommended = ({ data }: RecommendedProps) => {

  const { collapsed } = useSidebar((state) => state);

  console.log(data?.length);

  const showLabel = (!collapsed && data?.length > 0);

  return (
    <div>

      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">
            Recommended
          </p>
        </div>
      )}

      <ul className={cn(
        "space-y-2 px-2 flex flex-col gap-y-3",
        showLabel ? "items-start" : "items-center"
      )}>
      {data.map((user) => (
        <UserItem 
          key={user.id}
          username={user.username}
          imageUrl={user.imageUrl}
          isLive={true}
        />
      ))}
      </ul>

    </div>
  )
}