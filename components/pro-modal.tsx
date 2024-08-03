"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

export const ProMoadal = () => {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center flex-col gap-y-4 pb-2">
            Upgrade To{" "}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
