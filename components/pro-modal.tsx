"use client"

import { useProModal } from "@/hooks/use-pro-model"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"

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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
