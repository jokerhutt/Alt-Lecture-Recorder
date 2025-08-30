type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="h-20 flex justify-center items-center flex-col font-bold">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
