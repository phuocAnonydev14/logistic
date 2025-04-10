interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">{title}</h1>
      </div>
    </div>
  )
}
