const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-r from-zinc-900 via-zinc-900 to-slate-800 overflow-auto">
      <div className="mx-auto max-w-screen-xl h-ful w-full">{children}</div>
    </main>
  )
}

export default LandingLayout
