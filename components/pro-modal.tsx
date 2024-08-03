"use client"

import { useProModal } from "@/hooks/use-pro-model"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Badge } from "./ui/badge"
import {
  CheckCheck,
  CheckCircle,
  Code,
  Image,
  MessageSquare,
  Music,
  Rocket,
  Video,
} from "lucide-react"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]

export const ProMoadal = () => {
  const proMoadal = useProModal()
  return (
    <Dialog open={proMoadal.isOpen} onOpenChange={proMoadal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center flex-col gap-y-4 pb-2">
            Upgrade To Dr Doom
            <Badge className="uppercase text-sm py-1">Pro</Badge>
            <div className="flex items-center gap-x-2 font-bold py-1"></div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className=" flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <CheckCircle className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="lg" variant="glow" className="w-full">
            Upgrade
            <Rocket />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
