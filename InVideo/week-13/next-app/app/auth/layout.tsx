
export default function layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="text-center p-4 bg-gray-200 text-2xl font-bold">Banner</div>
            {children}
        </div>
    )
}