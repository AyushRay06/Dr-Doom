import Heading from "@/components/heading"
import { MessageSquare } from "lucide-react"

const Conversation = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Ask me anything you want answers for."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  )
}

export default Conversation
